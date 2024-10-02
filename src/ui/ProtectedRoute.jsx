import styled from "styled-components";
import { Navigate } from "react-router-dom";

import { useUser } from "../features/authentication/useUser";

import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated, fetchStatus } = useUser();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isAuthenticated && !isLoading && fetchStatus !== "fetching")
    return <Navigate to="/login" />;

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
