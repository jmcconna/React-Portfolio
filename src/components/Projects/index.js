import React from 'react';
import dungeonPic from "../../assets/projects/daily-dungeon.jpg";
import triviaPic from "../../assets/projects/trivia-game.png";
import SVGGeneratorPic from "../../assets/projects/circle.svg";
import WeatherPic from "../../assets/projects/weather-dashboard.jpg";
import textEditorPic from "../../assets/projects/JATE Screenshot.png";
import socialAPIPic from "../../assets/projects/Social-Media-API.png";

function Projects() {



  return (
    <div>

      <div className="project" key="Daily Dungeon">
        <img
          src={dungeonPic}
          alt="Daily Dungeon RPG"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://fathomless-brook-62747-69ac2fbd8802.herokuapp.com/">Daily Dungeon</a>{' '}
            <a href="https://github.com/jmcconna/Daily-Dungeon">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>'MERN Stack'</p>
        </div>
      </div>

      <div className="project" key="Trivia Game">
        <img
          src={triviaPic}
          alt="Do You Even Trivia, Bro?"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://jtruehitt.github.io/Do_You_Even_Trivia_Bro/">Trivia Game</a>{' '}
            <a href="https://github.com/JTruehitt/Do_You_Even_Trivia_Bro">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>'Javascript, RESTful APIs, CSS'</p>
        </div>
      </div>

      <div className="project" key="Weather Dashboard">
        <img
          src={WeatherPic}
          alt="Weather Dashboard"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://jmcconna.github.io/Weather-Dashboard/">Weather Dashboard</a>{' '}
            <a href="https://github.com/jmcconna/Weather-Dashboard">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>'Javascript, RESTful APIs'</p>
        </div>
      </div>

      <div className="project" key="SVG Logo Maker">
        <img
          src={SVGGeneratorPic}
          alt="SVG Logo Maker"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://github.com/jmcconna/SVG-Logo-Maker">SVG Logo Maker</a>{' '}
            <a href="https://github.com/jmcconna/SVG-Logo-Maker">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>'Node, CLI''</p>
        </div>
      </div>

      <div className="project" key="Social Network API">
        <img
          src={socialAPIPic}
          alt="Social Network API"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://github.com/jmcconna/Social-Network-API">Social Network API</a>{' '}
            <a href="https://github.com/jmcconna/Social-Network-API">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>'MongoDb, Express'</p>
        </div>
      </div>

      <div className="project" key="Text Editor PWA">
        <img
          src={textEditorPic}
          alt="Progressive Web App"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://github.com/jmcconna/Text-Editor-PWA">Text Editor PWA</a>{' '}
            <a href="https://github.com/jmcconna/Text-Editor-PWA">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>'Progressive Web App'</p>
        </div>
      </div>
     
    </div>
  );
}

export default Projects;
