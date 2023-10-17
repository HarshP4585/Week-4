import { TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

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
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button variant="contained" onClick={register}>
          Register
        </Button>
      </Box>
      Already have an account? <a href="/login">Login</a>
    </>
  );
}

export default Register;
