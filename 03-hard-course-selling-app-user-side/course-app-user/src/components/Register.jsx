import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function register() {
    fetch("http://localhost:3000/users/signup", {
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
    <>
      Username -{" "}
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <br />
      Password -{" "}
      <input type="text" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={register}>register</button>
      <br />
      <br />
      Already have an account? <a href="/login">Login</a>
    </>
  );
}

export default Register;
