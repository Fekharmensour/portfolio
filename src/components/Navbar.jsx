import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { MdDesignServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaNetworkWired } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import "../App.css";
const Navbar = () => {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [service, setService] = useState(false);
  const [contact, setContact] = useState(false);  
  const [project, setProject] = useState(false);  
  const [skill, setSkill] = useState(false);  

  const handelAllFalse = () => {
    setHome(false);
    setAbout(false);
    setContact(false);
    setService(false);
    setProject(false);
    setSkill(false);
  };
  const handleHome = () => {
    handelAllFalse();
    setHome(true);
  };
  const handleAbout = () => {
    handelAllFalse();
    setAbout(true);
  };
  const handleService = () => {
    handelAllFalse();
    setService(true);
  };
  const handleContact = () => {
    handelAllFalse();
    setContact(true);
  };
  const handleSkill = () => {
    handelAllFalse();
    setSkill(true);
  };
  const handleProject = () => {
    handelAllFalse();
    setProject(true);
  };
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === "/") handleHome();
    else if (pathname === "/about") handleAbout();
    else if (pathname === "/services") handleService();
    else if (pathname === "/contact") handleContact();
    else if (pathname === "/project") handleProject();
    else if (pathname === "/skill") handleSkill();
  }, [location.pathname]);
  return (
    <>
      <div className="sidebar">
        <div className="menu">
          <div className="item ">
            <Link to={"/"}>
              <div
                className={home ? "icon active" : "icon"}
                onClick={handleHome}
              >
                <FaHome />
              </div>
            </Link>
            <p className="title">Home</p>
          </div>
          <div className="item">
            <Link to={"/about"}>
              <div
                className={about ? "icon active" : "icon"}
                onClick={handleAbout}
              >
                <FaUserTie />
              </div>
            </Link>
            <p className="title">About</p>
          </div>
          <div className="item">
            <Link to={"/services"}>
              <div
                className={service ? "icon active" : "icon"}
                onClick={handleService}
              >
                <MdDesignServices />
              </div>
            </Link>
            <p className="title">Services</p>
          </div>
          <div className="item">
            <Link to={"/project"}>
              <div
                className={project ? "icon active" : "icon"}
                onClick={handleProject}
              >
                <FaNetworkWired />
              </div>
            </Link>
            <p className="title">Projects</p>
          </div>
          <div className="item">
            <Link to={"/skill"}>
              <div
                className={skill ? "icon active" : "icon"}
                onClick={handleSkill}
              >
                <BsStars />
              </div>
            </Link>
            <p className="title">Skills</p>
          </div>
          <div className="item">
            <Link to={"/contact"}>
              <div
                className={contact ? "icon active" : "icon"}
                onClick={handleContact}
              >
                <MdContactPhone />
              </div>
            </Link>
            <p className="title">Contact</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
