import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const token = useRef(localStorage.getItem("users-token"));
  const navigate = useNavigate()

  function logout() {
    token.current = null;
    localStorage.removeItem("users-token");
    navigate("/")
  }

  return (
    <>
      {token.current ? (
        <>
          <h1>Welcome user</h1>
          <a href="/purchased-courses" >View Purchased Courses</a>
          <br />
          <a href="/buy-course" >Buy a course</a>
          <br />
          <br />
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Welcome to course selling website {":)"}</h1>
          <a href="/login">Login</a>
          <br />
          <a href="/register">Register</a>
          <br />
        </>
      )}
    </>
  );
}

export default Home;
