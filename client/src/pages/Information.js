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
              <h5 className="card-title">❤️ När ❤️</h5>
              <p className="card-text">
                Vigseln kommer äga rum - 14/7 2023 kl 14 i kappellet.
              </p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <div className="card-body center">
              <h5 className="card-title">❤️ Var ❤️</h5>
              <p className="card-text">
                Vigseln kommer vara på Stenungsögården.
                <br />
                Adress: John Forsells väg 1, 444 48 Stenungsund
              </p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <div className="card-body center">
              <h5 className="card-title">❤️ Middag ❤️</h5>
              <p className="card-text">
                Det bjuds på middag, tårta och kaffe efter ceremoni.
                <br />
                <br />
                För den som önska alkohol så finns även detta. Eftersom det är
                <br />
                en resraurang i lokalen så kommer även ni gäster att behöva
                betala drickan själv.
                <br />
                <br />
                <h5>Meny</h5>
                Det kommer bjudas på buffé, ät hur mycket ni vill och se till
                att bli mätta!
                <br />
                <br />
                Givetvis kommer även efterrätt, att ingå.
              </p>
            </div>
          </div>
        </div>
        <div className="f-right padding-right">
          <div className="card jc-center mb-5 width-fit">
            <div className="card-body center">
              <h5 className="card-title">❤️ Sovplats ❤️</h5>
              <p className="card-text">
                Sovplats finns på plats. Vigsel, lokal och stuga är på en och
                samma plats. Ställplats med el finns också.
                <br />
                För att säkra en sovplats, så MÅSTE ni meddela Stenungsögården.
                Ni kan nå dom på telefonnummer: 0303-77 00 80
                <br />
                Säg att ni vill boka en stuga till Douglas & Lisas bröllop.
                Kostnad ligger omkring 250 kr per natt.
              </p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <div className="card-body center">
              <h5 className="card-title ">❤️ Klädsel ❤️</h5>
              <p className="card-text">
                Det kommer vara fri klädsel, kom gärna fint sommarklädda.
                <br />
                Det kommer vara strålande sol hela dagen!
              </p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <div className="card-body center">
              <h5 className="card-title ">❤️ Toastmaster ❤️</h5>
              <p className="card-text">
                Önskar man håll tal, hör av er till får Toastmaster Niklas på
                <br />
                <br />
                Email: niklas85wow@outlook.com
                <br />
                <br />
                Eller smsa
                <br />
                <br />
                Nummer: 076-170 65 78
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
