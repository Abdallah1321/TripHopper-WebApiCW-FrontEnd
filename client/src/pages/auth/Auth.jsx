import "./auth.css";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import { useRef, useState } from "react";

const Auth = () => {
  const [login, setLogin] = useState(true);
  const [signup, setSignup] = useState(false);

  const authRef = useRef(null)

  const handleClick = () => {
    setLogin(!login);

    authRef.current.classList.toggle("active")
  };

  return (
    <div className="authPage" ref={authRef}>
      <Login/> 
      <div className="sideDiv">
        <button type="button" onClick={handleClick}>
          {" "}
          {login ? "Signup" : "Login"}
        </button>
      </div>
      <Signup/>
    </div>
  );
};

export default Auth;
