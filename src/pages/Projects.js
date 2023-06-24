import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../project.css";

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
      <div className="container1">
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-between">
            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/pattern.png" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">patternPrinting</h5>
                  <p className="card-text">
                    Java patterns: Solve pattern printing problems for
                    placements. Essential codes for various pattern types. #Java
                    #PlacementPreparation
                  </p>
                  <a
                    href="https://github.com/rks-031/patternPrinting.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/meme.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">memeGenerator</h5>
                  <p className="card-text">
                    reate hilarious memes on the fly with this dynamic ReactJS
                    meme generator. Add text captions to images for endless
                    customization. #ReactJS #MemeGenerator
                  </p>
                  <a
                    href="https://github.com/rks-031/memeGenerator.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/overview.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">rks-031</h5>
                  <p className="card-text">
                    Personalize your Github overview page with this special
                    repository. Raw code included for easy customization &
                    personalization. #Github #CodeSnippet
                  </p>
                  <a
                    href="https://github.com/rks-031/rks-031.git"
                    class="btn button-color"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="container1">
          <div className="row mb-5 mt-5">
            <div className="col d-flex justify-content-between">
              <div className="card1">
                <div className="image1 ml-1">
                  <img src="/assets/pattern.png" alt="" />
                  <div className="content1">
                    <h5 class="card-title font-weight-bold">SRJ-Jwellery</h5>
                    <p className="card-text">
                      Promote your jewelry shop with this captivating React demo
                      project. Showcase and describe your products to attract
                      customers. #ReactJS #JewelleryShop
                    </p>
                    <a
                      href="https://github.com/rks-031/SRJ-Jwellery.git"
                      class="btn button-color"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="image1 ml-1">
                  <img src="/assets/weather.jpg" alt="" />
                  <div className="content1">
                    <h5 class="card-title font-weight-bold">weatherApp</h5>
                    <p className="card-text">
                      Real-time weather app. Integrates with OpenWeatherMap API
                      to provide accurate weather information to users. #NodeJS
                      #WeatherApp
                    </p>
                    <a
                      href="https://github.com/rks-031/weatherApp.git"
                      class="btn button-color"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="image1 ml-1">
                  <img src="/assets/form.png" alt="" />
                  <div className="content1">
                    <h5 class="card-title font-weight-bold">dynamicForm</h5>
                    <p className="card-text">
                      Embed this dynamic ReactJS form demo into any website.
                      Versatile and customizable for various purposes. Easily
                      scalable. #ReactJS #DynamicForm
                    </p>
                    <a
                      href="https://github.com/rks-031/dynamicForm.git"
                      class="btn button-color"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
