import React, { useEffect } from "react";
import { useTheme } from "./../components/ThemeProvider";
import Navbar from "../components/Navbar";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import './../components/fixed.css'
const Skill = () => {
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
      <div className="container fixed_sidbar">
        <div className="skills-box">
          <h1>Languages & framework</h1>
          <div className="skills">
            <div className="skill" data-width="95%">
              <h3>
                HTML <span>95%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="80%">
              <h3>
                CSS <span>80%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="70%">
              <h3>
                JavaScript <span>70%</span>
              </h3>
              <div className="prog" data-width="70%">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="65%">
              <h3>
                Python <span>65%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="75%">
              <h3>
                PHP <span>75%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="80%">
              <h3>
                Laravel <span>80%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="35%">
              <h3>
              Django <span>35%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="85%">
              <h3>
              React <span>85%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="90%">
              <h3>
              Bootsrap <span>90%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="40%">
              <h3>
              Tailwind <span>40%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
          </div>
          <h1>Relational Databases</h1>
          <div className="skills">
            <div className="skill" data-width="95%">
              <h3>
                MySql <span>95%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="80%">
              <h3>
              PostgreSQL <span>80%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
          </div>
          <h1>Other Skills</h1>
          <div className="skills">
            <div className="skill" data-width="85%">
              <h3>
              Restful APIs <span>85%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="70%">
              <h3>
              Git/GitHub <span>70%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="85%">
              <h3>
              Data Structures & Algorithms <span>85%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
            <div className="skill" data-width="65%">
              <h3>
              Deployment <span>65%</span>
              </h3>
              <div className="prog">
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <Navbar />
      </div>
    </>
  );
};

export default Skill;
