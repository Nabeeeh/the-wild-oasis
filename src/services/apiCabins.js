import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins Could not be loaded");
  }

  return data;
}

export async function createAndEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Create/Edit Cabin
  let query = supabase.from("cabins");

  // a) Create Cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // b) Edit Cabin
  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin Could not be Created");
  }

  // Upload image

  if (hasImagePath) return data;

  const { error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // Delete the Cabin if there was an error uploading image
  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(uploadError);
    throw new Error(
      "Cabin image Could not be Uploaded and the Cabin was not created"
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin Could not be Deleted");
  }
}
