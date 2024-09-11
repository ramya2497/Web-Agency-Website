import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import homeBanner from "../../assets/HomeBanner.png";
import { BsFileArrowDownFill } from "react-icons/bs";
import { motion } from "framer-motion";

function Home() {
  const originalNumbers = [
    { value: 10, label: "Happy Clients" },
    { value: 20, label: "Projects Completed" },
    { value: 80, label: "Creative ideas" },
    { value: 10, label: "Certificate" },
  ];

  const [numbers, setNumbers] = useState(originalNumbers);
  const [isRandomizing, setIsRandomizing] = useState(true);

  useEffect(() => {
    const randomizeNumbers = () => {
      setNumbers(
        numbers.map((number) => ({
          ...number,
          value: Math.floor(Math.random() * 100),
        }))
      );
    };

    if (isRandomizing) {
      const interval = setInterval(randomizeNumbers, 50);
      const timeout = setTimeout(() => {
        clearInterval(interval);
        setNumbers(originalNumbers);
        setIsRandomizing(false);
      }, 2000);
      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isRandomizing]);

  const heading1 = {
    hidden: { opacity: 0, y: "10vw" },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 1 } },
  };

  const button = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
  };

  return (
    <motion.div className="home">
      <main className="home-content" id="home">
        <div className="home-d-flex">
          <div>
            <div className="hm-text-content">
              <motion.h2
                variants={heading1}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 50 }}
              >
                We utilize technology to
              </motion.h2>
              <motion.h2
                variants={heading1}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
              >
                energize your business.
              </motion.h2>
            </div>
            <div className="achive-number">
              <ul>
                {numbers.map((item, index) => (
                  <li key={index}>
                    <h5>
                      {item.value}
                      <span className="plus">+</span>
                    </h5>
                    <p>{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="brochure-btn">
              <motion.button
                variants={button}
                initial="hidden"
                animate="visible"
                transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
              >
                <AnchorLink
                  href="#contact"
                  offset="50"
                  style={{ color: "white" }}
                >
                  Get Free brochure
                </AnchorLink>
              </motion.button>
            </div>
          </div>
          <div className="home-image">
            <motion.img
              src={homeBanner}
              alt="home"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </main>
      <div className="down-arrow-div">
        <BsFileArrowDownFill className="down-arrow" />
      </div>
    </motion.div>
  );
}

export default Home;
