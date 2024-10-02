import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserData } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUserData() {
  const queryClient = useQueryClient();

  const { mutate: updateUserDataMutate, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("User Data Successfully Updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUserDataMutate, isUpdating };
}
