import "../App.css";
import { useState, useCallback } from "react";

import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";

export default function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <h1 className="ml-0 mr-auto header-name">
          Douglas & Lisa Bröllop 2023
        </h1>
        <div className="carousel-item active">
          <img src={one} className="d-block imgSize" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={two} className="d-block imgSize" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={three} className="d-block imgSize" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>

        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          // style={{ color: "black" }}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// function Carousel({ children = [], height }) {
//   const [current, setCurrent] = useState(0);

//   const goToSlide = useCallback(
//     (index) => {
//       let newIndex = index;

//       if (index < 0) {
//         newIndex = children.length - 1;
//       } else if (index >= children.length) {
//         newIndex = 0;
//       }

//       setCurrent(newIndex);
//     },
//     [children.length]
//   );

//   const prevSlide = current - 1 < 0 ? children.length - 1 : current - 1;
//   const nextSlide = current + 1 > children.length - 1 ? 0 : current + 1;

//   return (
//     <div
//       className="carousel"
//       style={
//         height && {
//           "--carousel-height": `${height}px`,
//         }
//       }
//     >
//       <ul
//         className="carousel-slides"
//         style={{
//           "--current-slide": `${current}`,
//         }}
//       >
//         {children.map((slide, index) => (
//           <li
//             className={`carousel-slide ${
//               current === index ? "is-active" : ""
//             } ${index === prevSlide ? "is-left" : ""} ${
//               index === nextSlide ? "is-right" : ""
//             }`}
//             style={{ color: current === index ? "red" : "" }}
//             key={index}
//           >
//             {slide}
//           </li>
//         ))}
//       </ul>

//       <div className="carousel-controls">
//         <button
//           className="carousel-control is-prev"
//           onClick={() => goToSlide(current - 1)}
//         >
//           Prev
//         </button>

//         <button
//           className="carousel-control is-next"
//           onClick={() => goToSlide(current + 1)}
//         >
//           Next
//         </button>
//       </div>

//       <ul className="carousel-dots">
//         {children.map((slide, index) => (
//           <li
//             className={`carousel-dot ${current === index ? "is-active" : ""}`}
//             key={index}
//             style={{ color: current === index ? "red" : "" }}
//           >
//             <button onClick={() => goToSlide(index)} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default function Carousell() {
//   return (
//     <div className="App">
//       <Carousel>
//         <div className="divSize">
//           <img className="imgSize" src={one} alt="First" />
//         </div>
//         <div>
//           <button>Slide 2</button>
//         </div>
//         <div>
//           <button>Slide 3</button>
//         </div>
//         <div>
//           <button>Slide 4</button>
//         </div>
//       </Carousel>
//     </div>
//   );
// }
