import { useNavigate } from "react-router-dom";
import Course from "./Course";
import { useEffect, useState } from "react";

function Courses({ courses, hasBuy = true }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

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
      {courses.map((c) => {
        return (
          <Course
            title={c.title}
            buyCourse={hasBuy ? () => buyCourse(c.id) : null}
          ></Course>
        );
      })}
    </>
  );
}

export default Courses;
