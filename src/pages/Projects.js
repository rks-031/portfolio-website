import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Projects() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["MY PROJECTS"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h1 className="text-center projects my-2 pb-2 font-weight-bold">
        <span ref={el} />
      </h1>
      <br />
      <br />
      <div class="row row-cols-3 g-4">
        <div class="col">
          <div class="card my-3 card-hover">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              class="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">memeGenerator</h5>
              <p class="card-text">
                This is a funny and dynamic meme generator created solely using
                ReactJS which allows users to generate and customize memes by
                adding text captions to images.
              </p>
              <a
                href="https://github.com/rks-031/memeGenerator.git"
                class="btn button-color"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card my-3 card-hover">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
              class="card-img-top"
              alt="Palm Springs Road"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">patternPrinting</h5>
              <p class="card-text">
                Contains problems and codes on various kinds of pattern printing
                which can be very essential for placements. The tech stack used
                for programming here is Java.
              </p>
              <a
                href="https://github.com/rks-031/patternPrinting.git"
                class="btn button-color"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card my-3 card-hover">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
              class="card-img-top"
              alt="Los Angeles Skyscrapers"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">rks-031</h5>
              <p class="card-text">
                It's a special Repository which contains raw code for designing
                a user's Github overview page. You can just simply copy down the
                code and personalize it with your own data.
              </p>
              <a
                href="https://github.com/rks-031/rks-031.git"
                class="btn button-color"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card my-3 card-hover">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
              class="card-img-top"
              alt="Skyscrapers"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">SRJ-Jwellery</h5>
              <p class="card-text">
                This is a small demo project created using react made for a
                jwellery shop/firm which can be used for advertising/promoting
                its products to the customers and giving them a brief idea and
                description about the product.
              </p>
              <a
                href="https://github.com/rks-031/SRJ-Jwellery.git"
                class="btn button-color"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card my-3 card-hover">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/046.webp"
              class="card-img-top"
              alt="Skyscrapers"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">weatherApp</h5>
              <p class="card-text">
                A weather app created using Node.js is a web application that
                provides real-time weather information to users.The app
                integrates with a weather data provider's API: OpenWeatherMap.
                Tech Stack used here is Node.js
              </p>
              <a href="#" class="btn button-color" target="_blank">
                Github Repository
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card my-3 card-hover">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/050.webp"
              class="card-img-top"
              alt="Skyscrapers"
            />
            <div class="card-body">
              <h5 class="card-title font-weight-bold">dynamicForm</h5>
              <p class="card-text">
                This is a demo of a basic dynamic form created using ReactJs
                which can be embedded/used directly into various kind of
                websites irrespective of the purpose and can be modified as per
                required. It's a very basic app and can be scaled.
              </p>
              <a
                href="https://github.com/rks-031/dynamicForm.git"
                class="btn button-color"
                target="_blank"
              >
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
