import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  const navLists = [
    {
      id: 1,
      title: "Home",
      URL: "#home",
    },
    {
      id: 2,
      title: "About",
      URL: "#about",
    },
    {
      id: 3,
      title: "Projects",
      URL: "#projects",
    },
    {
      id: 4,
      title: "Services",
      URL: "#services",
    },
    {
      id: 5,
      title: "Contact us",
      URL: "#contact",
    },
  ];

  return (
    <div>
      <div className="footer">
        <div className="footer-link">
          <h4>Company?</h4>
          <ul>
            {navLists.map((item) => (
              <li key={item.id}>
                <AnchorLink offset="52" href={item.URL} style={{color: 'white'}}>
                  {item.title}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-links">
          <h4>Follow on</h4>
          <ul>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Want to see the Company in action?</p>
          <button>
            <AnchorLink href="#contact" offset="50">
              Get Demo
            </AnchorLink>
          </button>
        </div>
      </div>
      <div className="copyrights">
        <ul>
          <li>Copyrights © {currentYear}</li>
          <li>|</li>
          <li>Privacy policy</li>
          <li>|</li>
          <li>Cookie policy</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
