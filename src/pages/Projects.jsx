import React, { useEffect, useState } from "react";
import { useTheme } from "./../components/ThemeProvider";
import Navbar from "../components/Navbar";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import "./../components/fixed.css";
import image from "./../assets/project-5.jpg";
import bootsrap from "./../assets/bootsrap.png";
import bottom_sheet from "./../assets/bottom_sheet.png";
import chatbot from "./../assets/chatbot.png";
import game_memoir from "./../assets/game_memoir.png";
import gradiant_color from "./../assets/gradiant.png";
import portfolio from "./../assets/portfolio.png";
import scroll_review from "./../assets/scroll_review.png";
import snak_game from "./../assets/snak_game.png";
import tajir from "./../assets/tajir.png";
import template_3 from "./../assets/template_3.png";
import template_2 from "./../assets/template_2.png";
import template_1 from "./../assets/template_1.png";
import tic_tac_toc from "./../assets/tic-tac-toc.png";
import what_up from "./../assets/what_up.png";
import Admin_tajir from "./../assets/Admin_tajir.png";
import laravel from "./../assets/laravel.jpg";

import { FaArrowRight } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { Html } from "@mui/icons-material";

const Projects = () => {
  const { lightMode, toggleTheme } = useTheme();
  const [HTML_CSS_JS, SetHTML_CSS_JS] = useState(true);
  const [HTML_Bootsrap, SetHTML_Bootsrap] = useState(false);
  const [react, Setreact] = useState(false);
  const [back, Setback] = useState(false);
  const [game, Setgame] = useState(false);

  const handleAllFalse = () => {
    SetHTML_CSS_JS(false);
    SetHTML_Bootsrap(false);
    Setreact(false);
    Setback(false);
    Setgame(false);
  };

  const handelchange = (nbr) => {
    if (nbr == 1) {
      handleAllFalse();
      SetHTML_CSS_JS(true);
    } else if (nbr == 2) {
      handleAllFalse();
      SetHTML_Bootsrap(true);
    } else if (nbr == 3) {
      handleAllFalse();
      Setreact(true);
    } else if (nbr == 4) {
      handleAllFalse();
      Setback(true);
    } else if (nbr == 5) {
      handleAllFalse();
      Setgame(true);
    }
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
      <div className="container fixed_sidbar">
        <div className="skills-box">
          <div className="main-head">
            <ul>
              <li
                className={HTML_CSS_JS ? "active" : ""}
                onClick={() => handelchange(1)}
              >
                Html-Css-Js
              </li>
              <li
                className={HTML_Bootsrap ? "active" : ""}
                onClick={() => handelchange(2)}
              >
                Html-bootsrap
              </li>
              <li
                className={react ? "active" : ""}
                onClick={() => handelchange(3)}
              >
                React js
              </li>
              <li
                className={back ? "active" : ""}
                onClick={() => handelchange(4)}
              >
                Back end
              </li>
              <li
                className={game ? "active" : ""}
                onClick={() => handelchange(5)}
              >
                Game
              </li>
            </ul>
          </div>
          <div class="projects">
            {HTML_CSS_JS && (
              <>
                <div class="box">
                  <img src={template_1} alt="" />
                  <div class="text">
                    <h3>Template One</h3>
                    <p>
                      This is the first project I have, I worked on this with
                      see video Elzero , using HTML and CSS
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/HTML-And-CSS-Template-1">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={template_2} alt="" />
                  <div class="text">
                    <h3>Template Two</h3>
                    <p>
                      This is the second project I have, I worked on this with
                      see video Elzero , using HTML and CSS
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/HTML-And-CSS-Template-2">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={template_3} alt="" />
                  <div class="text">
                    <h3>Template Three</h3>
                    <p>
                      This is the Third project I have, I worked on this with
                      see video Elzero , using HTML and CSS
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/HTML-And-CSS-Template-3">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={scroll_review} alt="" />
                  <div class="text">
                    <h3>Scroll Reviews</h3>
                    <p>
                      A Static review display interface built using HTML, CSS,
                      and JavaScript for seamless scrolling.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/Scroll_reviews">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={bottom_sheet} alt="" />
                  <div class="text">
                    <h3>Bottom Sheet</h3>
                    <p>
                      A sleek, interactive bottom sheet component created with
                      HTML, CSS, and JavaScript
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/bottom-sheet">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={chatbot} alt="" />
                  <div class="text">
                    <h3>Chatbot</h3>
                    <p>
                      An interactive chatbot utilizing API integration for
                      dynamic, real-time conversations.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/ChatBot_html_js_css">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={what_up} alt="" />
                  <div class="text">
                    <h3>What Up</h3>
                    <p>
                      A front-end application using HTML, CSS, and JavaScript
                      for static content.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/what_Up-project">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={gradiant_color} alt="" />
                  <div class="text">
                    <h3>Gradient Color</h3>
                    <p>
                      A partially completed project using HTML, CSS, and
                      JavaScript to create gradient color effects.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/bulid_grediant_color">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
              </>
            )}
            {HTML_Bootsrap && (
              <>
                <div class="box">
                  <img src={bootsrap} alt="" />
                  <div class="text">
                    <h3>Template Test</h3>
                    <p>
                      A Bootstrap-based template utilizing HTML and CSS for
                      layout and styling.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/bootsrap-template">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
              </>
            )}
            {react && (
              <>
                <div class="box">
                  <img src={tajir} alt="" />
                  <div class="text">
                    <h3>Tajir</h3>
                    <p>
                      An e-commerce platform built with React, Tailwind CSS, and
                      Material UI for project Bacaloria degree.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/tajir_e-commerc_paltform">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={Admin_tajir} alt="" />
                  <div class="text">
                    <h3>Tajir Admin</h3>
                    <p>
                      An admin interface for the Tajir project, built with
                      React, Bootstrap, and <br /> Material UI.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/tajir_admin">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={portfolio} alt="" />
                  <div class="text">
                    <h3>Portfolio</h3>
                    <p>
                      My portfolio showcases all the information. it was built
                      with React, Vite ,EmailJs, and CSS.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/portfolio">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
              </>
            )}
            {back && (
              <>
                <div class="box">
                  <img src={laravel} alt="" />
                  <div class="text">
                    <h3>Back_end Tajir</h3>
                    <p>
                      The backend for Tajir and Tajir Admin, using Laravel 11
                      with Sanctum auth, SMTP email, and MySQL.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/E-commerce">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
              </>
            )}
            {game && (
              <>
                <div class="box">
                  <img src={game_memoir} alt="" />
                  <div class="text">
                    <h3>Game Memoire</h3>
                    <p>
                      Game Memoire A memory game developed <br /> with HTML , CSS, and
                      JavaScript.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/Game-Memoire">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={tic_tac_toc} alt="" />
                  <div class="text">
                    <h3>Tic Tac Toe</h3>
                    <p>
                    Incomplete : HTML, CSS, JavaScript; feature to play against computer under development.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/Tic-Tac-Toc_Game">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
                <div class="box">
                  <img src={snak_game} alt="" />
                  <div class="text">
                    <h3>Snake Game</h3>
                    <p>
                      An interactive game developed using HTML, CSS, and
                      JavaScript for a classic gaming experience.
                    </p>
                  </div>
                  <div class="info">
                    <a href="https://github.com/Fekharmensour/Snak_Game">
                      {" "}
                      <FaGithub className="icons" /> Read More
                    </a>
                    <FaArrowRight className="icon" />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <Navbar />
      </div>
    </>
  );
};

export default Projects;
