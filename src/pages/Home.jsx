import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import MePhoto from "../assets/home.png";
import Lottie, { useLottie } from "lottie-react";
import programmer from "./../assets/devloper.json";
import { Typewriter } from "react-simple-typewriter";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "./../components/ThemeProvider";

const Home = () => {
  const { lightMode, toggleTheme } = useTheme();
  const options = {
    animationData: programmer,
    loop: true,
  };
  const { View } = useLottie(options);
  const array = [
    " Web Devloper",
    " Front End  Devloper",
    " Back End Devloper",
    " Full Stack Devloper",
  ];

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [lightMode]);
  return (
    <>
      <div className="mode">
        <button onClick={toggleTheme}>
          {!lightMode ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>
      </div>
      <div className="container">
        <div className="home">
          <div className="image">{View}</div>
          <div className="content">
            <h1 className="long">
              Hi,
              <br />
              I'm Mensour,
              <br />
              I'm a
              <span className="auto_text">
                <Typewriter
                  className=""
                  words={array}
                  loop={20}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <div className="btns">
              <Link to={'/contact'} className="btn">
              <button className="hire">Hire me</button>
              </Link>
              <a href="mailto:mensour.fekhar@univ-constantine2.dz " className="btn"><button className="talk">Let's Talk</button></a>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Home;
