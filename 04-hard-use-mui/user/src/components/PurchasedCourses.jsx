import Courses from "./Courses";
import { Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

function PurchasedCourses() {
  let state = useLocation();

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
      <Link to={"/"}>
        <Button variant="contained">Home</Button>
      </Link>
      <Courses
        courses={Object.entries(state.state.courses).map((c) => {
          return { id: c[0], ...c[1] };
        })}
        hasBuy={false}
      />
    </>
  );
}

export default PurchasedCourses;
