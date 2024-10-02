import { HiOutlineLogout } from "react-icons/hi";

import { useLogout } from "./useLogout";

import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { logoutMutation, isLogout } = useLogout();

  return (
    <ButtonIcon disabled={isLogout} onClick={logoutMutation}>
      {isLogout ? <SpinnerMini /> : <HiOutlineLogout />}
    </ButtonIcon>
  );
};

export default Logout;
