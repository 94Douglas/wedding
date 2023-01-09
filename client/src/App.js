import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Carousel from "./components/Carousel";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login.js";
import Home from "./pages/Home";
import Info from "./pages/Information";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ImageBg from "./components/ImageBg";

import bg1 from "./images/1.jpg";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <Router>
        {/* <div> */}
        {user ? <NavBar /> : <></>}

        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/info" element={<PrivateRoute />}>
            <Route path="/info" element={<Info />} />
          </Route>
        </Routes>
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
