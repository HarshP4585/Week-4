import { useEffect, useState } from "react";
import Courses from "./Courses";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function BuyCourse() {
  const [courses, setCourses] = useState([]);
  let state = useLocation();
  const [purchasedCourses, setPurchasedCourses] = useState(state.state.courses);

  useEffect(() => {
    fetch("http://localhost:3000/users/courses", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("users-token")}`,
      },
    })
      .then(async (d) => {
        return { ok: d.ok, d: await d.json() };
      })
      .then(({ ok, d }) => {
        setCourses(
          Object.entries(d).map((c) => {
            return { id: c[0], ...c[1] };
          })
        );
      });
  }, []);

  return (
    <>
      <Link to={"/"}>
        <Button variant="contained">Home</Button>
      </Link>
      <Courses
        courses={courses}
        purchasedCourses={purchasedCourses}
        setPC={setPurchasedCourses}
      />
    </>
  );
}

export default BuyCourse;
