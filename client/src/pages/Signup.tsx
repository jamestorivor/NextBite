import "./MainMenu.css";
import "./Signup.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function signup() {
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const preferences = useRef<HTMLInputElement>(null);
  const allergies = useRef<HTMLInputElement>(null);
  const restrictions = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useAuth();

  const handleSignup = async () => {
    try {
      if (
        !email.current?.value ||
        !password.current?.value ||
        !name.current?.value
      ) {
        setError("Name, email and password are required");
        return;
      }
      // 1. Sign up the user with Firebase Auth
      const userCredential = await user?.signup(
        email.current.value,
        password.current.value
      );

      if (!userCredential) {
        throw new Error("User signup failed");
      }

      const uid = userCredential.user.uid;

      // 2. Save extra profile info to Firestore under collection "users"
      await setDoc(doc(db, "users", uid), {
        name: name.current.value,
        email: email.current.value,
        preferences: preferences.current?.value || "",
        allergies: allergies.current?.value || "",
        restrictions: restrictions.current?.value || "",
      });

      console.log("Signup and profile saved");
      navigate("/menu");
    } catch (err: any) {
      console.error("Signup failed", err);
      setError("Signup unsuccessful. Enter valid info and try again.");
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
        <label className="email-label">Name</label>
        <input
          type="name"
          placeholder="Enter your name here"
          className="inputbox"
          ref={name}
        ></input>
        <label className="email-label">Email</label>
        <input
          type="email"
          placeholder="Enter your email here"
          className="inputbox"
          ref={email}
        ></input>
        <label className="email-label">Password</label>
        <input
          type="password"
          placeholder="Enter your password here"
          className="inputbox"
          ref={password}
        ></input>
        <label className="email-label">Food preferences</label>
        <input
          type="preferences"
          placeholder="Enter your food preferences here"
          className="inputbox"
          
          ref={preferences}
        ></input>
        <label className="email-label">Food allergies</label>
        <input
          type="allergies"
          placeholder="Enter any allergies here"
          className="inputbox"
          ref={allergies}
        ></input>
        <label className="email-label">Dietary Restrictions</label>
        <input
          type="restrictions"
          placeholder="Enter any food restrictions you have"
          className="inputbox"
          ref={restrictions}
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