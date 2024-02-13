import React, { useEffect, useRef } from "react";
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
      <h1 className="text-center projects font-weight-bold">
        <span ref={el} />
      </h1>
      <br />
      <br />
      <div className="container1">
        {/* Row 1 */}
        <div className="row mb-5 mt-5">
          <ProjectCard
            image="/assets/MLSA.jpg"
            title="MLSA-IIIT-Bh-Chapter"
            description="MLSA @ IIIT-Bh is a tech hub for students of IIIT-Bh, fostering collaboration, skill enhancement, and community impact."
            githubLink="https://github.com/rks-031/MLSA_IIITBH.git"
          />
          <ProjectCard
            image="/assets/meme.jpg"
            title="memeGenerator"
            description="Create hilarious memes on the fly with this dynamic ReactJS meme generator. Add text captions to images for endless customization."
            githubLink="https://github.com/rks-031/memeGenerator.git"
          />
        </div>
        {/* Row 2 */}
        <div className="row mb-5 mt-5">
          <ProjectCard
            image="/assets/text.png"
            title="textUtils"
            description="User-friendly website with text manipulation tools. Word/Character counter, replace, and more."
            githubLink="https://github.com/rks-031/textUtils.git"
          />
          <ProjectCard
            image="/assets/jwellery.jpg"
            title="SRJ-Jwellery"
            description="Promote your jewelry shop with this captivating React demo project. Showcase and describe your products to attract customers."
            githubLink="https://github.com/rks-031/SRJ-Jwellery.git"
          />
        </div>
        {/* Row 3 */}
        <div className="row mb-5 mt-5">
          <ProjectCard
            image="/assets/weather.jpg"
            title="weatherApp"
            description="Real-time weather app. Integrates with OpenWeatherMap API to provide accurate weather information to users."
            githubLink="https://github.com/rks-031/weatherApp.git"
          />
          <ProjectCard
            image="/assets/2048.jpg"
            title="2048-animated"
            description="A nostalgic and visually appealing ReactJS version of the classic 2048 game. Engaging gameplay for all ages."
            githubLink="https://github.com/rks-031/2048-animated.git"
          />
        </div>
        {/* Row 4 */}
        <div className="row mb-5 mt-5">
          <ProjectCard
            image="/assets/overview.jpg"
            title="rks-031"
            description="Personalize your Github overview page with this special repository. Raw code included for easy customization & personalization."
            githubLink="https://github.com/rks-031/rks-031.git"
          />
          <ProjectCard
            image="/assets/jokes.jpg"
            title="jokesGenerator"
            description="Enjoy hilarious jokes with this ReactJS mini app. Dynamic display of jokes and punchlines with toggle option for showing/hiding punchlines."
            githubLink="https://github.com/rks-031/jokesGenerator.git"
          />
        </div>
        {/* Row 5 */}
        <div className="row mb-5 mt-5">
          <ProjectCard
            image="/assets/medibox.jpg"
            title="mediBOX"
            description="Discover mediBOX: a virtual hospital offering seamless access to medical services. Consult doctors, schedule appointments, and receive prescriptions from anywhere."
            githubLink="https://github.com/rks-031/mediBOX.git"
          />
          <ProjectCard
            image="/assets/bookmark.jpg"
            title="yt-bookmark-googleExtension"
            description="Enables users to effortlessly add bookmarks to specific timestamps within YT videos, enabling quick navigation to important moments."
            githubLink="https://github.com/rks-031/yt-bookmark-googleExtension.git"
          />
        </div>
        {/* Row 6 */}
        <div className="row mb-5 mt-5">
          <ProjectCard
            image="/assets/browser-locker.jpeg"
            title="Browser-Locker-Extension"
            description="A productivity solution that enhances security. Proactively prevents 3rd-party access, boosts productivity with auto-lock, password authentication."
            githubLink="https://github.com/rks-031/Browser-Locker.git"
          />
          <ProjectCard
            image="/assets/dsa.png"
            title="DSA-CodeHelp-LB"
            description="Data Structures and Algorithms (DSA) are crucial in computer science. Topics covered include arrays, strings, linked lists, stacks, queues, etc. each with various operations and algorithms for efficient problem-solving."
            githubLink="https://github.com/rks-031/DSA-codehelp-LB.git"
          />
        </div>
      </div>
    </div>
  );
}

// ProjectCard component
function ProjectCard({ image, title, description, githubLink }) {
  return (
    <div className="col-sm-6 mb-4">
      <div className="card1">
        <div className="image1 ml-1">
          <img src={image} alt="" />
          <div className="content1">
            <h5 className="card-title font-weight-bold mt-3 ">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={githubLink}
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
  );
}
