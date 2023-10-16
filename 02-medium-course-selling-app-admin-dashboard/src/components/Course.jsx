import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Course() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [published, setPublished] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/admin/courses/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user-token")}`,
      },
    })
      .then((d) => d.json())
      .then((d) => {
        setTitle(d.title);
        setDescription(d.description);
        setPrice(d.price);
        setPublished(d.published);
      });
  }, [id]);
  return (
    <>
      {/* Add form with button to update the course */}
      <h2>{title}</h2>
      <h3>{description}</h3>
    </>
  );
}

export default Course;
