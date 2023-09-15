import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Main() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Open Source Contributor"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <div className="how-section1">
        <div className="row">
          <div className="col-md-6">
            <br />
            <br />
            <div>
              <h4>Hi, I am Rajnish</h4>
              <h2>
                and I am a Passionate <br />
              </h2>
              <h2>
                <span ref={el} />
              </h2>
              <div className="buttons">
                <button
                  className="btn resume-button my-3"
                  style={{ fontSize: "18px" }}
                >
                  <a
                    href="https://drive.google.com/file/d/1Q_2IhIduJUxeUaBOtUonzCQNA14OiOGn/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
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
                    src="/assets/1667554831238.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/1667554831238.jpg"
                    className="w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="/assets/1667554831238.jpg"
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
      <hr />
    </div>
  );
}
