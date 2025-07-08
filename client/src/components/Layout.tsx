import NavBar from "./NavBar";
import { useAuth } from "../contexts/AuthContext";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  const auth = useAuth();
  const dropDown = auth?.currUser
    ? ["Menu", "Choose An Eatery", "Random Eatery", "Account", "Settings"]
    : ["NextBite", "Login", "Sign Up"];
  const path = auth?.currUser
    ? ["Menu", "Choose", "Random", "Account", "Settings"]
    : ["NextBite", "Login", "Sign Up"];

  return (
    <div className="flex flex-col h-screen">
      <NavBar dropDown={dropDown} path={path}></NavBar>
      <div className="flex flex-grow overflow-auto justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default Layout;
