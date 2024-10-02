import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";

import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./darkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const HeaderMenu = () => {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>

      <li>
        <DarkModeToggle />
      </li>

      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
