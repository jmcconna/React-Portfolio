import React from 'react';
import dungeonPic from "../../assets/projects/daily-dungeon.jpg";
import triviaPic from "../../assets/projects/trivia-game.png";
import shortStoriesPic from "../../assets/projects/led-wall.jpg";
import WeatherPic from "../../assets/projects/pastel-puzzels.jpg";
import EmployeeTrackerPic from "../../assets/projects/run-buddy.jpg";
import socialAPIPic from "../../assets/projects/surf-report.jpg";

function Projects({ project }) {

 // const { name, repo, link, description } = project;

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
          <p>'Javascript, RESTful APIs'</p>
        </div>
      </div>

      <div className="project" key="Short Story Library">
        <img
          src={shortStoriesPic}
          alt="Post Lit, Get Lit"
          className="project-bg"
        />
        <div className="project-text">
          <h3>
            <a href="https://github.com/jmcconna/Short-Story-Library">Short Story Library</a>{' '}
            <a href="https://github.com/jmcconna/Short-Story-Library">
              <i className="fab fa-github"></i>
            </a>
          </h3>
          <p>'MERN Stack'</p>
        </div>
      </div>

      <div className="project" key="Daily Dungeon">
        <img
          src={WeatherPic}
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

      <div className="project" key="Daily Dungeon">
        <img
          src={EmployeeTrackerPic}
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

      <div className="project" key="Daily Dungeon">
        <img
          src={socialAPIPic}
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
     
    </div>
  );
}

export default Projects;
