import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function register() {
    fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "Application/json",
      },
    })
      .then(async (d) => {
        return { ok: d.ok, d: await d.json() };
      })
      .then(({ ok, d }) => {
        if (ok) {
          navigate("/");
        } else {
          console.log(d.data);
        }
      });
  }

  return (
    <div>
      <h1>Register to the website</h1>
      <br />
      Username -{" "}
      <input type={"text"} onChange={(e) => setUsername(e.target.value)} />
      <br />
      Password -{" "}
      <input type={"text"} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={register}>Register</button>
      <br />
      <br />
      Already a user? <a href="/login">Login</a>
    </div>
  );
}

export default Register;
