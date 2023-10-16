import React, { useEffect, useState } from "react";
/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [published, setPublished] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  }, [message]);

  function createCourse() {
    fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      body: JSON.stringify({ title, description, price, published }),
      headers: {
        "content-type": "Application/json",
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((d) => d.json())
      .then((d) => setMessage(d.data));
  }

  return (
    <div>
      <div>
        <a href="/">Home</a>
      </div>
      <h1>Create Course Page</h1>
      Title - <input type={"text"} onChange={(e) => setTitle(e.target.value)} />
      <br />
      Description -{" "}
      <input type={"text"} onChange={(e) => setDescription(e.target.value)} />
      <br />
      Price -{" "}
      <input
        type={"number"}
        min={0}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      Published -{" "}
      <input
        type={"checkbox"}
        onChange={(e) => setPublished(e.target.checked)}
      />
      <br />
      <br />
      <button onClick={createCourse}>Create Course</button>
      {message ? <h3>{message}</h3> : <></>}
    </div>
  );
}
export default CreateCourse;
