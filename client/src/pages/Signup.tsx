import "./MainMenu.css";
import "./Signup.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

function signup() {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useAuth();

  const handleSignup = async () => {
    try {
      await user?.signup(email.current?.value, password.current?.value);
      console.log("Signup done");
      navigate("/menu");
    } catch (err: any) {
      console.log("Signup failed");
      setError("Signup unsuccessful. Enter valid email and try again");
    }
  };

  return (
    <div className="main-menu">
      <img
        src="images/torn.jpg"
        alt="Signup background"
        className="paper"
      ></img>

      <div className="signup-form">
        <label className="email-label">Email</label>
        <input
          type="email"
          placeholder="Enter your email here"
          className="inputbox"
          ref={email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password here"
          className="inputbox"
          ref={password}
        ></input>
        <button className="go-signup" onClick={handleSignup}>
          Go
        </button>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>
    </div>
  );
}

export default signup;
