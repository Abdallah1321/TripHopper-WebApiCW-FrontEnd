import { Link } from "react-router-dom";
import "./login.css";
import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import img from "../../assets/images/google.png";
import { BASE_URL } from "../../utils/config";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  const googleAuth = () => {
    window.open(`${BASE_URL}/auth/google/callback`, "_self");
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />{" "}
        <button disabled={isLoading} className="btn">
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <p>or</p>
      <button className="googleBtn" onClick={googleAuth}>
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default Login;
