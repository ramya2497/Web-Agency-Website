import React from "react";
import logo1 from "../../assets/LOGO_1.png";
import logo2 from "../../assets/LOGO_2.png";
import logo3 from "../../assets/LOGO_1.png";
import logo4 from "../../assets/LOGO_2.png";
import logo5 from "../../assets/LOGO_1.png";
import logo6 from "../../assets/LOGO_2.png";
import About_page_banner from "../../assets/About_page_banner.png";
import { motion } from "framer-motion";

const images = [
  { imgsrc: logo1, imgalt: "logo1" },
  { imgsrc: logo2, imgalt: "logo2" },
  { imgsrc: logo3, imgalt: "logo3" },
  { imgsrc: logo4, imgalt: "logo4" },
  { imgsrc: logo5, imgalt: "logo5" },
  { imgsrc: logo6, imgalt: "logo6" },
];

const marqueeVariants = {
  animate: {
    x: [0, -100],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
        ease: "easeInOut",
      },
    },
  },
};
const aboutimg = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
};
const readme = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
};

function About() {
  return (
    <>
      <div
        className="About"
        style={{ overflow: "hidden", whiteSpace: "nowrap" }}
      >
        <motion.div
          className="marquee"
          variants={marqueeVariants}
          animate="animate"
          style={{ display: "flex" }}
        >
          {images.map((img, index) => (
            <img src={img.imgsrc} alt={img.imgalt} key={index} />
          ))}
        </motion.div>
      </div>
      <motion.div className="About_para" id="about">
        <motion.img
          src={About_page_banner}
          alt={"About us"}
          variants={aboutimg}
          initial="hidden"
          whileInView="visible"
          transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
          viewport={{ once: true }}
        />
        <div>
          <h3>What is the Company?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer...
          </p>
          <motion.button
            className="read-more"
            variants={readme}
            initial="hidden"
            whileInView="visible"
            transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Read more ›
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

export default About;
