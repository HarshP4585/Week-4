import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import PurchasedCourses from "./components/PurchasedCourses";
import BuyCourse from "./components/BuyCourse";
// import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/purchased-courses" element={<PurchasedCourses />}></Route>
        <Route path="/buy-course" element={<BuyCourse />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
