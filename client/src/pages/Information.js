import React from "react";
import Header from "../components/Header";
function Information() {
  return (
    <div className="img-bg">
      <Header />
      <div className="mb">
        <div className="card jc-center mb-5 width-fit">
          <div className="card-body center">
            <h5 className="card-title">När</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div className="card jc-center mb-5 width-fit">
          <div className="card-body center">
            <h5 className="card-title">Var</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div className="card jc-center mb-5 width-fit">
          <div className="card-body center">
            <h5 className="card-title">Hur</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
        <div className="card jc-center mb-5 width-fit">
          <div className="card-body center">
            <h5 className="card-title ">Klädsel</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
