import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // adjust path if needed
import { useNavigate } from "react-router";

import Button from "../components/Button";
import TextBox from "../components/TextBox";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      setError("");
      navigate("/menu");

    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-sm border p-4">
        <legend className="fieldset-legend text-lg">Login</legend>

        <label className="label">Email</label>
        <TextBox
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label">Password</label>
        <TextBox
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div onClick={handleLogin}>
          <Button style="btn-neutral mt-4">Login</Button>
        </div>

        <div className="divider">OR</div>

        <button className="btn bg-white text-black border-[#e5e5e5]">
          {}
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
             <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </fieldset>
      <div className="m-1.5 self-center flex text-sm text-gray-600">
        <p className="pr-1">Don’t have an account? </p>
        <a href="/signup" className="hover:text-red-600">
          Create one here
        </a>
      </div>
    </div>
  );
}

export default Login;
