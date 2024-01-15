import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';
import "./login.scss";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [error,setError] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleForm}>
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(v) => setEmail(v.target.value)}
          />
        </div>
        {error && <span className="error">Incorrect email or password</span>}{" "}
        <div>
          <input
            type="text"
            placeholder="Enter Password"
            onChange={(v) => setPassword(v.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
