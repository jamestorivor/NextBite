import { useAuth } from "../contexts/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.log("Error");
    }
  };

  return (
    <Button style="" onClick={onClick}>
      Sign Out
    </Button>
  );
}

export default Settings;
