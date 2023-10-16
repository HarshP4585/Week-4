import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    fetch("http://localhost:3000/admin/login", {
      method: "POST",
      headers: { username, password },
    })
      .then((d) => d.json())
      .then((d) => {
        localStorage.setItem("user-token", d.token);
        navigate("/");
      });
  }

  return (
    <div>
      <h1>Login to admin dashboard</h1>
      <br />
      Username -{" "}
      <input type={"text"} onChange={(e) => setUsername(e.target.value)} />
      <br />
      Password -{" "}
      <input type={"text"} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>
      <br />
      <br />
      New here? <a href="/register">Register</a>
    </div>
  );
}

export default Login;
