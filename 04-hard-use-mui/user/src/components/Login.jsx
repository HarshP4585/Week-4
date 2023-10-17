import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function login() {
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        username,
        password,
      },
    })
      .then((d) => d.json())
      .then((d) => {
        console.log(d);
        localStorage.setItem("users-token", d.token);

        // call purchased coursed and store in session storage
        fetch("http://localhost:3000/users/purchasedCourses", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("users-token")}`,
          },
        })
          .then((d) => d.json())
          .then((d) =>
            sessionStorage.setItem("purchased-courses", JSON.stringify(d))
          );

        navigate("/");
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
        <Button variant="contained" onClick={login}>
          Login
        </Button>
      </Box>
      New here? <a href="/register">Register</a>
    </>
  );
}

export default Login;
