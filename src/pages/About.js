import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import github from "../github.json";
import git from "../git.json";
import html from "../html.json";
import css from "../css.json";
import mongodb from "../mongodb.json";
import node from "../node.json";
import react from "../react.json";
import JAVA from "../JAVA.json";
import c from "../c.json";
import CMS from "../CMS.json";
import Lottie from "lottie-react";
// import { FaJs } from "react-icons/fa";

export default function About() {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["ABOUT ME"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <h1 className="text-center projects my-2 pb-2 font-weight-bold fixed">
        <span ref={el} />
      </h1>
      <div class="d-flex bd-highlight text-white my-4">
        <div class="p-2 w-100 bd-highlight">
          <img src="/assets/bg2.jpg" alt="" className="bg1" />
        </div>
        <div class="p-2 flex-shrink-1 bd-highlight"></div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <button class="btn tech-stacks my-3">TECH STACKS</button>
      </div>
      <br />
      <div className="row justify-content-center">
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
    </>
  );
}
