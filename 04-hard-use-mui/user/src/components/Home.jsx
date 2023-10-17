import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Home() {
  const token = useRef(localStorage.getItem("users-token"));
  const navigate = useNavigate();
  const [purchasedCourses, setPurchasedCourses] = useState(null);

  useEffect(() => {
    if (token.current) {
      fetch("http://localhost:3000/users/purchasedCourses", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("users-token")}`,
        },
      })
        .then((d) => d.json())
        .then((d) => setPurchasedCourses(d));
    }
  }, []);

  function logout() {
    token.current = null;
    localStorage.removeItem("users-token");
    navigate("/");
  }

  return (
    <>
      {token.current ? (
        <>
          <h1>Welcome user</h1>
          <Stack spacing={2} direction="row">
            <Link
              to={"/purchased-courses"}
              state={{ courses: purchasedCourses }}
            >
              <Button variant="contained">View Purchased Courses</Button>
            </Link>
            <Link
              to={"/buy-course"}
              // cannot pass "setPurchasedCourses", as function are not json serializable
              state={{ courses: purchasedCourses }}
            >
              <Button variant="contained">Buy a course</Button>
            </Link>
            <Button variant="contained" onClick={logout}>
              Logout
            </Button>
          </Stack>
        </>
      ) : (
        <>
          <h1>Welcome to course selling website {":)"}</h1>
          <Stack spacing={2} direction="row">
            <Button variant="contained" href="/login">
              Login
            </Button>
            <Button variant="contained" href="/register">
              Register
            </Button>
          </Stack>
        </>
      )}
    </>
  );
}

export default Home;
