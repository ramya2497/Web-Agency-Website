import { useState } from "react";
import logo from "../../assets/LOGO.png";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
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
  const [show, setShow] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const handleClick = (id) => {
    setActiveNav(id);
    setShow(!show);
  };
 

  return (
    <>
      <div className="nav">
        <nav className="navbar">
          <div>
            <img
              src={logo}
              alt="Company"
            />
          </div>
          <div className="ph-menu">
            {!show && <IoMenuSharp onClick={() => setShow(!show)} />}
            {show && <IoMdClose onClick={() => setShow(!show)} />}

            {show && (
              <div>
                <ul>
                  {navLists.map((item) => (
                    <li key={item.id}>
                      <AnchorLink
                        offset="52"
                        href={item.URL}
                        onClick={() => handleClick(item.id)}
                        className={`${
                          !activeNav === item.id ? "activeNav" : ""
                        }`}
                      >
                        {item.title}
                      </AnchorLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="nav-container">
            <ul
              className="nav-list"
            >
              {navLists.map((item) => (
                <li key={item.id}>
                  <AnchorLink
                    offset="52"
                    href={item.URL}
                    onClick={() => handleClick(item.id)}
                    className={`${activeNav === item.id ? "activeNav" : ""}`}
                  >
                    {item.title}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
