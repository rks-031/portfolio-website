import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import github from "../images/github.json";
import git from "../images/git.json";
import html from "../images/html.json";
import css from "../images/css.json";
import mongodb from "../images/mongodb.json";
import node from "../images/node.json";
import react from "../images/react.json";
import JAVA from "../images/JAVA.json";
import c from "../images/c.json";
import CMS from "../images/CMS.json";
import Lottie from "lottie-react";
// import { FaJs } from "react-icons/fa";

export default function About() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ABOUT ME"],
      typeSpeed: 70,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="container">
      <h1 className="text-center projects my-2 pb-2 font-weight-bold fixed">
        <span ref={el} />
      </h1>
      <br />
      <div className="row justify-content-around">
        <div className="col-md-4">
          <div class="p-2 w-100 bd-highlight">
            <img src="/assets/bg2.jpg" alt="" className="bg1" />
          </div>
          <div class="p-2 flex-shrink-1 bd-highlight"></div>
        </div>
        <div className="col-md-4 text-white">
          <button className="btn tech-stacks text-left mb-4 mx-2">
            Rajnish Kumar Singh
          </button>
          <button className="btn tech-stacks mb-4">Age: 21yrs</button>
          <button className="btn tech-stacks mb-4">Horoscope: Libra</button>
          <button className="btn tech-stacks mb-4">
            Location: Jamshedpur, IN
          </button>
          <button
            className="btn tech-stacks mb-4 text-left"
            style={{ width: "500px" }}
          >
            Schooling: DAV Bistupur, Jharkhand
          </button>
          <button
            className="btn tech-stacks mb-4 text-left"
            style={{ width: "400px" }}
          >
            College: IIIT Bhubaneswar'25
          </button>
          <button className="btn tech-stacks text-left mb-4">
            Tech-Domain: Web-Dev
          </button>
          <button
            className="btn tech-stacks text-left mb-4"
            style={{ width: "500px" }}
          >
            Interests: Anchoring, Writing, Origami
          </button>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <button class="btn tech-stacks my-3">TECH STACKS</button>
      </div>
      <br />
      <div className="row justify-content-center d-flex">
        <div className="col-md-2">
          <Lottie animationData={github} alt="github" className="icons" />
          <Lottie animationData={git} alt="git" className="icons" />
        </div>

        <div className="col-md-2">
          <Lottie animationData={html} alt="html5" className="icons" />
          <Lottie animationData={css} alt="css3" className="icons" />
        </div>

        <div className="col-md-2">
          <Lottie animationData={mongodb} alt="mongodb" className="icons" />
          <Lottie animationData={node} alt="node" className="icons" />
        </div>

        <div className="col-md-2">
          <Lottie
            animationData={react}
            alt="react"
            className="icons mx-4"
            style={{ width: "100px" }}
          />
          <Lottie animationData={JAVA} alt="JAVA  " className="icons" />
        </div>

        <div className="col-md-2">
          <Lottie
            animationData={c}
            alt="c"
            className="icons mx-4"
            style={{ width: "100px" }}
          />
          <Lottie animationData={CMS} alt="CMS" className="icons" />
        </div>
      </div>
    </div>
  );
}
