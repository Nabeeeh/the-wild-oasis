import { useMutation } from "@tanstack/react-query";
import { signUpAuth } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
  const { mutate: singUp, isLoading: isSigningUp } = useMutation({
    mutationFn: signUpAuth,
    onSuccess: () => {
      toast.success(
        "Account Successfully Created! Please Verify the new account from the user's email address."
      );
    },
  });

  return { singUp, isSigningUp };
}
