import "./App.css";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import LandingPage from "./LandingPage";
import Create from "./Create";

function App() {
  const isAuthenticated = localStorage.getItem("accessToken") !== null;
  return (
    <Router>
      <Navbar />
      {!isAuthenticated && <LandingPage />}
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
