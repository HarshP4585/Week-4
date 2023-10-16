import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function login() {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        username,
        password,
      },
    })
      .then(d => d.json())
      .then(d => {
        console.log(d);
        localStorage.setItem("users-token", d.token)
        navigate("/")
      })
  }

  return (
    <>
      Username -{" "}
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      Password -{" "}
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>
      <br />
      <br />
      New here? <a href="/register">Register</a>
    </>
  );
}

export default Login;
