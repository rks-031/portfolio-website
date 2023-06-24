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
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

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
        </div>
        <div className="col-md-4 text-white">
          <button className="btn tech-stacks1 text-left mb-4">
            Rajnish Kumar Singh
          </button>
          <br />
          <button className="btn tech-stacks1 mb-4 mr-3">Age: 21yrs</button>
          <button className="btn tech-stacks1 mb-4 mr-3">
            DOB: July 31, 2002
          </button>
          <button className="btn tech-stacks1 mb-4">Horoscope: Libra</button>
          <button className="btn tech-stacks1 mb-4">
            Location: Jamshedpur, IN
          </button>
          <button
            className="btn tech-stacks1 mb-4 text-left"
            style={{ width: "420px" }}
          >
            Schooling: DAV Bistupur, Jharkhand
          </button>
          <button
            className="btn tech-stacks1 mb-4 text-left"
            style={{ width: "380px" }}
          >
            College: IIIT Bhubaneswar'25
          </button>
          <button className="btn tech-stacks1 text-left mb-4">
            Tech-Domain: Web-Dev
          </button>
          <div className="buttons d-flex">
            <button
              className="btn resume-button my-3 mx-1"
              style={{ fontSize: "15px" }}
            >
              <a
                href="https://github.com/rks-031"
                target="_blank"
                rel="noreferrer"
              >
                Github&nbsp;
                <FaGithubSquare style={{ width: "25px", height: "25px" }} />
              </a>
            </button>
            <button
              className="btn resume-button my-3 mx-3"
              style={{ fontSize: "15px" }}
            >
              <a
                href="https://www.linkedin.com/in/rajnish-kumar-singh-2241b321b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn&nbsp;
                <FaLinkedin style={{ width: "25px", height: "25px" }} />
              </a>
            </button>
            <button
              className="btn resume-button my-3"
              style={{ fontSize: "15px" }}
            >
              <a
                href="https://youtube.com/playlist?list=PL5YUk3UMmna6K_Rk_8nfN3qE2NJeDrK9X"
                target="_blank"
                rel="noreferrer"
              >
                Youtube&nbsp;
                <FaYoutube style={{ width: " 25px", height: "25px" }} />
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-white" style={{ fontSize: "18px" }}>
        I'm a self-proclaimed workaholic with a passion for web development. I'm
        always seeking new opportunities to challenge myself and expand my
        skillset. For me, learning is a lifelong pursuit, and I enjoy staying
        up-to-date. <br />
        <br />
        Whether I'm working on a personal project or collaborating with a team,
        I'm always looking for ways to improve my skills and deliver the best
        possible product. <br />
        <br />
        I've found that my greatest passion lies in the intersection of
        opportunity and learning. There's nothing quite like the rush of
        excitement that comes with taking on a new project or tackling a new
        problem. And with every new experience, I've been able to deepen my
        understanding of the world around me and become a more well-rounded
        individual. <br />
        <br />
        Whether I'm working on a personal project or collaborating with a team,
        I'm always striving to do my best and create something truly
        exceptional.
      </p>
      <hr />
      <div className="d-flex justify-content-center">
        <button class="btn tech-stacks my-3">TECH SKILLS</button>
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
