import { Button } from "@mui/material";

function Course({ title, buyCourse }) {
  return (
    <h3>
      {title}
      {"  "}
      {buyCourse ? (
        <Button variant="contained" onClick={buyCourse} disabled={(buyCourse === "disable")}>
          Buy
        </Button>
      ) : (
        <></>
      )}
    </h3>
  );
}

export default Course;
