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
            <h4 className="heart-position">💙</h4>

            <div className="card-body center">
              <h5 className="card-title">När</h5>
              <p className="card-text">Stenungsögården - 14 Juli, kl. 15</p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <h4 className="heart-position">💙</h4>
            <div className="card-body center">
              <h5 className="card-title">Var</h5>
              <p className="card-text">
                Vigseln kommer att äga rum i Stenungsögårdens kapell.
                <br />
                Efter vigseln blir det mingel, middag, musik och fest på
                Stenungsögårdens restaurang & festlokal.
                <br />
                <br />
                John Forsells väg 1, 444 48 Stenungsund
                <br />
                <a href="https://goo.gl/maps/qjdNH442BGXz7mS78">
                  Öppna i Google Maps
                </a>
              </p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <h4 className="heart-position">💙</h4>

            <div className="card-body center">
              <h5 className="card-title">Middag</h5>
              <p className="card-text">
                Det kommer bjudas på buffé, ät hur mycket ni vill och se till
                att bli mätta!
                <br />
                <br />
                Givetvis kommer det även att bjudas på tårta och kaffe
              </p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <h4 className="heart-position">💙</h4>

            <div className="card-body center">
              <h5 className="card-title ">Klädsel</h5>
              <p className="card-text">Sommarfin</p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <h4 className="heart-position">💙</h4>

            <div className="card-body center">
              <h5 className="card-title ">Önskelista</h5>
              <p className="card-text">Er närvaro är allt vi önskar.</p>
              <p className="card-text">
                Men vill ni ändå uppmärksamma vår dag med en gåva uppskattar vi
                ett bidrag till vår bröllopsresa
              </p>
            </div>
          </div>
        </div>
        <div className="f-right padding-right">
          <div className="card jc-center mb-5 width-fit">
            <h4 className="heart-position">💙</h4>

            <div className="card-body center">
              <h5 className="card-title">Sovplats</h5>
              <p className="card-text">
                Stugor finns att hyra på Stenungsögården, det erbjuds också
                ställplatser med el.
                <br />
                För att säkra en sovplats, måste ni meddela Stenungsögården. Ni
                kan nå dom på telefonnummer: 0303-77 00 80 eller mail:
                koket@stenungsogarden.se
                <br />
                <br />
                Meddela senast 14 april att ni vill boka en stuga till Lisa &
                Douglas bröllop.
                <br />
                Priser för stugor varierar från 900kr - 1400kr per natt.
                <br />
                Priser för ställplats varierar från 350kr - 400kr
              </p>
            </div>
          </div>

          <div className="card jc-center mb-5 width-fit">
            <h4 className="heart-position">💙</h4>

            <div className="card-body center">
              <h5 className="card-title ">Toastmaster</h5>
              <p className="card-text">
                Önskar man håll tal, sjunga, dansa eller arrangera en
                överraskning hör av er till vår Toastmaster Niklas på
                <br />
                <br />
                Email: niklas85wow@outlook.com
                <br />
                Eller smsa
                <br />
                Nummer: 076-170 65 78
              </p>
            </div>
          </div>
          <div className="card jc-center mb-5 width-fit">
            <h4 className="heart-position">💙</h4>

            <div className="card-body center">
              <h5 className="card-title ">Övrigt</h5>
              <p className="card-text">
                Vi tycker väldigt mycket om era barn, men en dag som denna tror
                vi att de har det roligare hos sina barnvakter
                <br />
                <br />
                OSA senast 23 juni
                <br />
                Till lisa: 0762229148 eller Douglas: 0721572271
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
