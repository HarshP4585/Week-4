import { useNavigate } from "react-router-dom";
import Course from "./Course";
import { useEffect, useRef, useState } from "react";

function Courses({ courses, hasBuy = true }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  // disable buy button if already purchased
  const purchasedCourses = useRef(
    JSON.parse(sessionStorage.getItem("purchased-courses"))
  );

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [message]);

  function buyCourse(id) {
    fetch(`http://localhost:3000/users/courses/${id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("users-token")}`,
      },
    }).then(async (d) => {
      console.log(d);
      if (d.ok) {
        navigate("/buy-course");
      }
      let json = await d.json();
      setMessage(json.data);
    });
  }

  return (
    <>
      <div>{message ? <>{message}</> : <></>}</div>
      {Object.entries(courses).map((c) => {
        console.log(c);
        console.log(purchasedCourses);
        return (
          <Course
            title={c[1].title}
            buyCourse={
              hasBuy
                ? purchasedCourses.current[c[0]]
                  ? null
                  : () => buyCourse(c[0])
                : null
            }
          ></Course>
        );
      })}
    </>
  );
}

export default Courses;
