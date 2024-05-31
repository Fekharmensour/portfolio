import React, { useEffect } from "react";
import { useTheme } from "./../components/ThemeProvider";
import Navbar from "../components/Navbar";
import { MdOutlineSecurity } from "react-icons/md";
import { GrDeploy } from "react-icons/gr";
import { BsDatabaseFillGear } from "react-icons/bs";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { TbApi } from "react-icons/tb";
import { TbMailCode } from "react-icons/tb";
import {
  MdDarkMode,
  MdOutlineLightMode,
  MdSimCardDownload,
} from "react-icons/md";
const Services = () => {
  const { lightMode, toggleTheme } = useTheme();
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
        <div className="serv">
          <div class="box">
          <MdOutlineSecurity className="icon"/>
            <h3>Authertication</h3>
            <div class="info">
              <a href="#">Detaile</a>
            </div>
          </div>
          <div class="box">
          <GrDeploy className="icon"/>
            <h3>Deployment</h3>
            <div class="info">
              <a href="#">Detaile</a>
            </div>
          </div>
          <div class="box">
            <BsDatabaseFillGear className="icon"/>
            <h3>Database Management</h3>
            <div class="info">
              <a href="#">Detaile</a>
            </div>
          </div>
          <div class="box">
          <MdOutlineScreenshotMonitor className="icon" />
            <h3>Responsive Web Design</h3>
            <div class="info">
              <a href="#">Detaile</a>
            </div>
          </div>
          <div class="box">
            <div className="icon" style={{fontSize:"25px " , fontWeight:"bold"}}>API</div>
            <h3>API Development</h3>
            <div class="info">
              <a href="#">Detaile</a>
            </div>
          </div>
          <div class="box">
          <TbMailCode className="icon"/>
            <h3>SMTP Service</h3>
            <div class="info">
              <a href="#">Detaile</a>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Services;
