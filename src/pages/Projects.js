import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Projects() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["My Projects"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div>
      <h1 className="text-center projects my-2 pb-2">
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
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn button-color">
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
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn button-color">
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
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn button-color">
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
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn button-color">
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
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn button-color">
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
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a href="#" class="btn button-color">
                Github Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
