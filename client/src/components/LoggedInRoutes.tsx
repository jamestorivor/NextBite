import { Outlet, Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function LoggedInRoutes() {
  const auth = useAuth();
  console.log(auth?.currUser);

  return auth?.currUser ? <Outlet /> : <Navigate to="/login"></Navigate>;
}

export default LoggedInRoutes;
