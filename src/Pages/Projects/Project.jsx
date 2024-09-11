import React, { useState } from "react";
import Desktop from "../../assets/Desktop.png";
import Mobile from "../../assets/Mobile.png";
import Project_screen from "../../assets/Project_screen.png";
import vector from "../../assets/Vector.svg";
import Wave from "../../assets/wave-pattern-1.svg";
import { motion } from "framer-motion";

const ProjectLists = [
  {
    title: "Lorem Ipsum is simply dummy 1",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s,`,
    url: "dummy-url-1",
  },
  {
    title: "Lorem Ipsum is simply dummy 2",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s,`,
    url: "dummy-url-2",
  },
  {
    title: "Lorem Ipsum is simply dummy 3",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s,`,
    url: "dummy-url-3",
  },
  {
    title: "Lorem Ipsum is simply dummy 4",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s,`,
    url: "dummy-url-4",
  },
  {
    title: "Lorem Ipsum is simply dummy 5",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s,`,
    url: "dummy-url-5",
  },
  {
    title: "Lorem Ipsum is simply dummy 6",
    summary: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s,`,
    url: "dummy-url-6",
  },
];

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, ProjectLists.length - 1)
    );
  };
  const nextButtonOpacity =
    currentIndex === ProjectLists.length - 1
      ? { opacity: 0.3, cursor: "none" }
      : {};
  const previousButtonOpacity =
    currentIndex === 0 ? { opacity: 0.3, cursor: "none" } : {};
  const aboutimg = {
    hidden: { opacity: 0, y: "10vw" },
    visible: { opacity: 0.2, y: 0, transition: { delay: 0.3, duration: 1 } },
  };
  const container = {
    hidden: { opacity: 0, y: "10vw" },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1 } },
  };

  return (
    <>
      <div className="projects">
        <span className="project-head" id="projects">
          <h3>Projects</h3>
          <motion.img
            src={Wave}
            alt="wave pattern"
            variants={aboutimg}
            initial="hidden"
            whileInView="visible"
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            viewport={{ once: true }}
          />
        </span>
        <div className="project-container">
          <div className="demoproject">
            {/* <img src={Desktop} alt="desktop" />
            <img src={Mobile} alt="mobile" /> */}
            <div>
              <motion.img
                src={Project_screen}
                alt="Project"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
            <div>
              <a href={ProjectLists[currentIndex].url} target="_blank">
                <button className="demo">Live Demo</button>
              </a>
            </div>
          </div>
          <div className="card-container">
            <img src={vector} alt="vector" />
            <div className="project-card">
              <div>
                <motion.h6
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {ProjectLists[currentIndex].title}
                </motion.h6>
                <p>{ProjectLists[currentIndex].summary}</p>

                <span className="card-footer">
                  <p>
                    {currentIndex + 1} / {ProjectLists.length}
                  </p>
                  <span className="btn-grp">
                    <button
                      onClick={goToPrevious}
                      style={previousButtonOpacity}
                    >
                      ‹
                    </button>
                    <button onClick={goToNext} style={nextButtonOpacity}>
                      ›
                    </button>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
