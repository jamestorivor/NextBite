import { Outlet, Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function LoggedOutRoutes() {
  const auth = useAuth();
  console.log(auth?.currUser);

  return !auth?.currUser ? <Outlet /> : <Navigate to="/menu"></Navigate>;
}

export default LoggedOutRoutes;
