function Course({ title, buyCourse }) {
  return (
    <h3>
      {title}
      {buyCourse ? <button onClick={buyCourse}>Buy</button> : <></>}
    </h3>
  );
}

export default Course;
