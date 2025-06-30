import "./MainMenu.css";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSignup = async() => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Signup done");
            navigate("/menu");
        } catch (err: any) {
            console.log("Signup failed");
            setError("Signup unsuccessful. Enter valid email and try again")
        }
        
        
    }
    
    return (
        <div className = "main-menu">
            <img src = "images/torn.jpg" alt="Signup background" className = "paper">
            </img>
        
            <div className = "signup-form">
                <label className = "email-label">Email</label>
                <input 
                type = "email"
                placeholder = "Enter your email here"
                className = "inputbox"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                ></input>
                <label>Password</label>
                <input
                type = "password"
                placeholder = "Enter your password here"
                className = "inputbox"
                value= {password}
                onChange = {(e) => setPassword(e.target.value)}
                ></input>
                <button className = "go-signup" onClick = {handleSignup}>
                    Go</button>

                    
            </div>
        </div>
    );
}

export default signup;