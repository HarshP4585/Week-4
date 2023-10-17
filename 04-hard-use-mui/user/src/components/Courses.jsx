import { useNavigate } from "react-router-dom";
import Course from "./Course";
import { useEffect, useState } from "react";

function Courses({
  courses,
  purchasedCourses = {},
  setPC = null,
  hasBuy = true,
}) {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [message]);

  function buyCourse(c) {
    fetch(`http://localhost:3000/users/courses/${c.id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("users-token")}`,
      },
    }).then(async (d) => {
      if (d.ok) {
        purchasedCourses[c.id] = c
        setPC({ ...purchasedCourses});
        // navigate("/buy-course", { state: { courses: purchasedCourses } });
      }
      let json = await d.json();
      setMessage(json.data);
    });
  }

  return (
    <>
      <div>{message ? <>{message}</> : <></>}</div>
      {courses.map((c) => {
        return (
          <Course
            title={c.title}
            buyCourse={
              hasBuy
                ? purchasedCourses[c.id]
                  ? "disable"
                  : () => buyCourse(c)
                : null
            }
          ></Course>
        );
      })}
    </>
  );
}

export default Courses;
