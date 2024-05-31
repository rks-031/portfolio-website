import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../project.css";

const ProjectCard = ({ image, title, description, githubLink }) => (
  <div className="col-sm-6 mb-4">
    <div className="card1">
      <div className="image1 ml-1">
        <img src={image} alt={title} />
        <div className="content1">
          <h5 className="card-title font-weight-bold mt-3 ">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            href={githubLink}
            className="btn button-color d-block mx-auto"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
);

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

  const projects = [
    {
      image: "/assets/promptopedia.png",
      title: "Promptopedia",
      description: `Open-source AI tool for creating and sharing prompts.`,
      githubLink: "https://github.com/rks-031/Promptopedia.git",
    },
    {
      image: "/assets/megaheartz.jpg",
      title: "MegaHeartz-IIIT-Bh",
      description: `Official website for IIIT MegaHeartz Society.`,
      githubLink: "https://github.com/rks-031/MegaHeartz-IIIT-BBSR",
    },
    {
      image: "/assets/mlsa-iiit.jpg",
      title: "MLSA-IIIT-Bh",
      description: `Official website for Microsoft Learn Student Ambassador Chapter - IIIT-Bh.`,
      githubLink: "https://github.com/SumitPanda03/MLSA_IIITBH",
    },
    {
      image: "/assets/browser-locker.jpeg",
      title: "Browser-Locker Extension",
      description: `Chrome extension to auto lock browser after inactivity with password authentication.`,
      githubLink: "https://github.com/rks-031/Browser-Locker.git",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center projects font-weight-bold">
        <span ref={el} />
      </h1>
      <br />
      <br />
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-sm-6 mb-4" key={index}>
            <div className="card1">
              <div className="image1 ml-1">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "250px" }}
                />
                <div className="content1">
                  <h5 className="card-title font-weight-bold mt-3 ">
                    {project.title}
                  </h5>
                  <p className="card-text">{project.description}</p>
                  <a
                    href={project.githubLink}
                    className="btn button-color d-block mx-auto"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
