import { useEffect, useState } from "react";
import Courses from "./Courses";

function PurchasedCourses() {
  const [courses, setCourses] = useState(
    JSON.parse(sessionStorage.getItem("purchased-courses"))
  );

  // useEffect(() => {
  //   fetch("http://localhost:3000/users/purchasedCourses", {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("users-token")}`,
  //     },
  //   })
  //     .then((d) => d.json())
  //     .then((d) => setCourses(d));
  // }, []);

  return (
    <>
      <a href="/">Home</a>
      <Courses courses={courses} hasBuy={false} />
    </>
  );
}

export default PurchasedCourses;
