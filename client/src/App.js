import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Carousel from "./components/Carousel";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login.js";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <Router>
      <div className="header">
        <Header />
        {/* {user ? <Carousel /> : <></>} */}
        {/* {user ? <Header /> : <></>} */}
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
