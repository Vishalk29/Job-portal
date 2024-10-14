import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ childern }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { pathname } = useLocation();
  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }
  return childern;
};

export default ProtectedRoutes;
