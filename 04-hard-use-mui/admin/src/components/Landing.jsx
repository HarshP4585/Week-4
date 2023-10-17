import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import ShowCourses from "./ShowCourses";

/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
function Landing() {
  const token = useRef(localStorage.getItem("user-token"));
  const navigate = useNavigate();

  function logout() {
    token.current = null;
    localStorage.removeItem("user-token");
    console.log(localStorage);
    navigate("/");
  }

  return (
    <>
      {token.current ? (
        <div>
          <h1>Welcome admin</h1>
          <button onClick={logout}>Logout</button>
          <br />
          <br />
          <a href="/create-course">Create Course</a>
          <br />
          <ShowCourses></ShowCourses>
        </div>
      ) : (
        <div>
          <h1>Welcome to course selling website!</h1>
          <a href="/register">Register</a>
          <br />
          <a href="/login">Login</a>
        </div>
      )}
    </>
  );
}

export default Landing;
