import React, { useEffect, useState } from "react";
import webdev from "../../assets/Webdev.png";
import SASS from "../../assets/SASS.png";
import Data from "../../assets/Data.png";
import code from "../../assets/code.mp4";
import { motion } from "framer-motion";

function Services() {
  const serviceLists = [
    {
      title: "Software Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: webdev,
      detailedvideo: code,
    },
    {
      title: "SASS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: SASS,
      detailedvideo: code,
    },
    {
      title: "Data Analyst & ML",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: Data,
      detailedvideo: code,
    },
    {
      title: "Software Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: webdev,
      detailedvideo: code,
    },
    {
      title: "SASS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: SASS,
      detailedvideo: code,
    },
    {
      title: "Data Analyst & ML",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: Data,
      detailedvideo: code,
    },
  ];

  const [serviceClick, setServiceClick] = useState(false);
  const [serviceValue, setServiceValue] = useState();
  const [servicemodaltrue, setServicemodaltrue] = useState("");

  const cardClickfn = (index) => {
    setServiceClick(true);
    setServiceValue(index);
    setServicemodaltrue("serviceModal-open");
    document.body.classList.add("hide-scrollbar");
  };

  const modalColse = () => {
    setServiceClick(false);
    document.body.classList.remove("hide-scrollbar");
  };

  const heading1 = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { delay: 0.3, duration: 1 } },
  };

  return (
    <div className="service">
      <div className={serviceClick ? "serviceClick" : " "}>
        <div>
          <span className="service-head" id="services">
            <motion.h3
              variants={heading1}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              Service
            </motion.h3>
          </span>
        </div>
        <div className="service-conatiner">
          <div className="service-card">
            {serviceLists.map((service, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span
                  onClick={() => cardClickfn(index)}
                  className="service-mini-card"
                >
                  <img src={service.image} alt={service.title} />
                  <h6>{service.title}</h6>
                  <span>→</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {serviceClick && (
        <div className="service-modal">
          {serviceLists.map((serviceitem, index) => (
            <div key={index} className="service-details">
              {serviceValue === index && (
                <>
                  <h2>{serviceitem.title}</h2>
                  <button onClick={modalColse} className="close">
                    ×
                  </button>
                  <video
                    src={serviceitem.detailedvideo}
                    autoPlay
                    muted
                    className="service-video"
                  />
                  <p>{serviceitem.description}</p>
                  <span>
                    <button className="talk-btn">Connect Expert</button>
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;
