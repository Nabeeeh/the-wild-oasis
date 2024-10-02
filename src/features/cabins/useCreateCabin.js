import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAndEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabinMutate, isLoading: isCreating } = useMutation({
    mutationFn: (newCabin) => createAndEditCabin(newCabin),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      toast.success("A new Cabin Successfully Created");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabinMutate };
}
