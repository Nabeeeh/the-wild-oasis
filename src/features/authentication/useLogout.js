import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logout } from "../../services/apiAuth";

export function useLogout() {
  const navigate = useNavigate();

  const { mutate: logoutMutation, isLoading: isLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      navigate("/login", { replace: true });
    },
  });

  return { logoutMutation, isLogout };
}
