import React from "react";
// import { useEffect, useRef } from "react";
// import Typed from "typed.js";

export default function Main() {
  //   useEffect(() => {
  //     const typed = new Typed(el.current, {
  //       strings: ["hello", "mellow"],
  //       typeSpeed: 50,
  //       loop: true,
  //     });

  //     return () => {
  //       typed.destroy(); // Cleanup Typed.js instance when the component unmounts
  //     };
  //   }, []);
  return (
    <div>
      <span id="element"></span>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6">
            <h4>Hi, I am Rajnish</h4>
            <h3>and I am a Passionate</h3>
          </div>
          <div className="col-md-6 how-img">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./public/assets/1667554831238.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./public/assets/photo_2023-06-21_11-01-32.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./public/assets/photo_2023-06-21_11-02-18.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-target="#carouselExampleIndicators"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
