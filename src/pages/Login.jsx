import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import "./Login.css";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const input = useRef(null);
  const navigate = useNavigate();

  return (
    <main>
    <h2>Please, Log in first</h2>
      <input type="text" ref={input} defaultValue={user} />
      <button
        onClick={() => {
          setUser(input.current.value);
          localStorage.setItem("user", input.current.value);
          navigate("/");
        }}
      >
        Login
      </button>
    </main>
  );
};

export default Login;
