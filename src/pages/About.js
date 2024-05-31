import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  FaGithubSquare,
  FaLinkedin,
  FaYoutube,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";

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
        <div className="col-md-6">
          <div className="p-2 w-100 bd-highlight">
            <img
              src="/assets/rajnish_photo.png"
              alt=""
              className="bg1"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        </div>

        <div className="d-flex" style={{ height: "200px" }}>
          <div className="vr"></div>
        </div>

        <div className="col-md-6 text-white">
          <button className="btn tech-stacks1 text-left mb-4">
            Rajnish Kumar Singh
          </button>
          <br />
          <button className="btn tech-stacks1 mb-4">Jamshedpur, IN</button>
          <button
            className="btn tech-stacks1 mb-4 text-left"
            style={{ width: "420px" }}
          >
            DAV Bistupur, Jharkhand
            <br /> 10th: 94% | 12th: 95.2%
          </button>
          <button
            className="btn tech-stacks1 mb-4 text-left"
            style={{ width: "380px" }}
          >
            CSE, IIIT Bhubaneswar'25 <br /> 8.67 CGPA (5th sem)
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
                <FaGithubSquare style={{ width: "20px", height: "20px" }} />
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
                <FaLinkedin style={{ width: "20px", height: "20px" }} />
              </a>
            </button>
            <button
              className="btn resume-button my-3 mr-3"
              style={{ fontSize: "15px" }}
            >
              <a
                href="https://youtube.com/playlist?list=PL5YUk3UMmna6K_Rk_8nfN3qE2NJeDrK9X"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube style={{ width: "20px", height: "20px" }} />
              </a>
            </button>
            <button
              className="btn resume-button my-3 "
              style={{ fontSize: "15px" }}
            >
              <a
                href="https://leetcode.com/u/rajnish31july/"
                target="_blank"
                rel="noreferrer"
              >
                <FaCode style={{ width: "20px", height: "20px" }} />
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
        Whether I'm engaged in personal projects or team collaborations, I
        consistently aim to deliver my utmost and produce remarkable outcomes.
      </p>
      <hr />
      <div className="d-flex justify-content-center">
        <button className="btn tech-stacks my-3">TECHNICAL SKILLS</button>
      </div>
      <br />
      <div className="row text-white">
        <table className="table text-white table-striped">
          <thead>
            <tr>
              <th>Category</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programming Languages</td>
              <td>
                <SiCplusplus style={{ width: "20px", height: "20px" }} />{" "}
                <FaHtml5 style={{ width: "20px", height: "20px" }} />{" "}
                <FaCss3Alt style={{ width: "20px", height: "20px" }} />{" "}
                <FaJsSquare style={{ width: "20px", height: "20px" }} />
              </td>
            </tr>
            <tr>
              <td>Libraries/Frameworks/Version Control Systems</td>
              <td>
                <FaBootstrap style={{ width: "20px", height: "20px" }} />{" "}
                <FaReact style={{ width: "20px", height: "20px" }} />{" "}
                <SiNextdotjs style={{ width: "20px", height: "20px" }} />{" "}
                <FaNodeJs style={{ width: "20px", height: "20px" }} />{" "}
                <SiExpress style={{ width: "20px", height: "20px" }} />{" "}
                <FaGithubSquare style={{ width: "20px", height: "20px" }} />{" "}
                <FaDocker style={{ width: "20px", height: "20px" }} />
              </td>
            </tr>
            <tr>
              <td>Database</td>
              <td>
                <SiMysql style={{ width: "20px", height: "20px" }} />{" "}
                <SiMongodb style={{ width: "20px", height: "20px" }} />
              </td>
            </tr>
            <tr>
              <td>Architectural Style</td>
              <td>
                <FaCode style={{ width: "20px", height: "20px" }} /> RESTful API
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
