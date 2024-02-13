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
                <img src="/assets/MLSA.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold mt-2">
                    MLSA-IIIT-Bh-Chapter
                  </h5>
                  <p className="card-text">
                    MLSA @ IIIT-Bh is a tech hub for students of IIIT-Bh,
                    fostering collaboration, skill enhancement, and community
                    impact.
                  </p>
                  <a
                    href="https://github.com/rks-031/MLSA_IIITBH.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
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
                    customization.
                  </p>
                  <a
                    href="https://github.com/rks-031/memeGenerator.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/text.png" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">textUtils</h5>
                  <p className="card-text">
                    User-friendly website with text manipulation tools.
                    Word/Character counter,replace, and more.
                  </p>
                  <a
                    href="https://github.com/rks-031/textUtils.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-between">
            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/jwellery.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">SRJ-Jwellery</h5>
                  <p className="card-text">
                    Promote your jewelry shop with this captivating React demo
                    project. Showcase and describe your products to attract
                    customers.
                  </p>
                  <a
                    href="https://github.com/rks-031/SRJ-Jwellery.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
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
                    Real-time weather app. Integrates with OpenWeatherMap API to
                    provide accurate weather information to users.
                  </p>
                  <a
                    href="https://github.com/rks-031/weatherApp.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/2048.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">2048-animated</h5>
                  <p className="card-text">
                    A nostalgic and visually appealing ReactJS version of the
                    classic 2048 game. Engaging gameplay for all ages.
                  </p>
                  <a
                    href="https://github.com/rks-031/2048-animated.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-between">
            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/overview.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">rks-031</h5>
                  <p className="card-text">
                    Personalize your Github overview page with this special
                    repository. Raw code included for easy customization &
                    personalization.
                  </p>
                  <a
                    href="https://github.com/rks-031/rks-031.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <br />
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/jokes.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">jokesGenerator</h5>
                  <p className="card-text">
                    Enjoy hilarious jokes with this ReactJS mini app. Dynamic
                    display of jokes and punchlines with toggle option for
                    showing/hiding punchlines.
                  </p>
                  <a
                    href="https://github.com/rks-031/jokesGenerator.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/medibox.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">mediBOX</h5>
                  <p className="card-text">
                    Discover mediBOX: a virtual hospital offering seamless
                    access to medical services. Consult doctors, schedule
                    appointments, and receive prescriptions from anywhere.
                  </p>
                  <a
                    href="https://github.com/rks-031/mediBOX.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="row mb-5 mt-5">
          <div className="col d-flex justify-content-between">
            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/bookmark.jpg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold mt-2">
                    yt-bookmark-googleExtension
                  </h5>
                  <p className="card-text">
                    Enables users to effortlessly add bookmarks to specific
                    timestamps within YTvideos, enabling quick navigation to
                    important moments.
                  </p>
                  <a
                    href="https://github.com/rks-031/yt-bookmark-googleExtension.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div className="card1">
              <div className="image1 ml-1">
                <img src="/assets/browser-locker.jpeg" alt="" />
                <div className="content1">
                  <h5 class="card-title font-weight-bold">
                    Browser-Locker-Extension
                  </h5>
                  <p className="card-text">
                    A productivity solution that enhances security. Proactively
                    prevents 3rd-party access, boosts productivity with
                    auto-lock, password authentication.
                  </p>
                  <a
                    href="https://github.com/rks-031/Browser-Locker.git"
                    class="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
