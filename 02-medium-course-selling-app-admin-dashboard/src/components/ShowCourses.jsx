import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then(async (d) => {
        return { ok: d.ok, d: await d.json() };
      })
      .then(({ ok, d }) => {
        if (ok) {
          setCourses(
            Object.entries(d).map((c) => {
              return { id: c[0], ...c[1] };
            })
          );
        } else {
          console.log(d.data);
        }
      });
  }, []);

  return (
    <div>
      {courses.map((c) => (
        <div key={c.id}>
          <h2>
            {c.title}{" "}
            <button onClick={() => navigate(`/course/${c.id}`)}>Edit</button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ShowCourses;
