import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { loginAuth } from "../../services/apiAuth";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogIn } = useMutation({
    mutationFn: ({ email, password }) => loginAuth({ email, password }),
    onSuccess: () => {
      toast.success("Login Successfully");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isLogIn };
}
