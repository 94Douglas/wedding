import React from "react";
import Header from "../components/Header";

import NoteOne from "../components/NoteComp";

function Information() {
  return (
    <div>
      <div className="img-bg">
        {/* <div className="div-container"> */}
        <Header />
        {/* <div className="mb"></div> */}
        <div className="f-left padding-left">
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
        </div>
        <div className="f-right padding-right">
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
      {/* </div> */}
    </div>
  );
}

export default Information;
