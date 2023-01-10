import React from "react";
import { render } from "react-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="div-container">
      <div className="img-bg">
        <Header />
        <div className="header">
          <div className="main-container">
            <div className="main-inner-container">
              <h1>INFORMATION</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
