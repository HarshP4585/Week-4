import { useEffect, useState } from "react";
import Courses from "./Courses";

function BuyCourse() {
  const [courses, setCourses] = useState([]);

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
      <a href="/">Home</a>
      <Courses courses={courses} />
    </>
  );
}

export default BuyCourse;
