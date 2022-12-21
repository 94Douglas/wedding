import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Carousel from "./components/Carousel";

import Login from "./pages/Login.js";
import Home from "./pages/Home";

function App() {
  return (
    <div className="header">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
