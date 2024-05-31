import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Lottie, { useLottie } from "lottie-react";
import {
  MdDarkMode,
  MdOutlineLightMode,
  MdSimCardDownload,
} from "react-icons/md";
import user from "./../assets/user.json";
import { useTheme } from "./../components/ThemeProvider";
const About = () => {
  const { lightMode, toggleTheme } = useTheme();

  const options = {
    animationData: user,
    loop: true,
  };
  const { View } = useLottie(options);
  const onButtonClick = () => {
    const pdfUrl = "steve-Cv.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
            <div className="text">
              <h1 className="til">Mensour Fekhar</h1>
              <p>
                Holding a bachelor's degree in computer science with a
                specialization in IT. Passionate about web development,
                particularly back-end development. Enjoys creating efficient and
                robust web solutions
              </p>
            </div>
            <div className="btns">
              <button
                className="hire"
                style={{ display: "flex", alignItems: "center" }}
                onClick={onButtonClick}
              >
                <MdSimCardDownload
                  style={{ fontSize: "20px", marginRight: "5px" }}
                />{" "}
                Download Cv
                
              </button>
              
              <button className="talk">Let's Talk</button>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default About;
