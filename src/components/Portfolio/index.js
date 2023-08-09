import React, { useState } from 'react';
import Projects from "../Projects";

function Portfolio() {

  
  const [projects] = useState([
    {
      name: 'daily-dungeon',
      description: 'MERN Stack',
      link: "https://fathomless-brook-62747-69ac2fbd8802.herokuapp.com/",
      repo: "https://github.com/jmcconna/Daily-Dungeon"
    },
    {
      name: 'trivia-game', //trivia game
      description: 'Javascript, RESTful APIs',
      link: "https://jtruehitt.github.io/Do_You_Even_Trivia_Bro/",
      repo: "https://github.com/JTruehitt/Do_You_Even_Trivia_Bro"
    },
    {
      name: 'run-buddy',
      description: 'HTML/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'led-wall',
      description: 'Node/IoT',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'calculator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
          <Projects/>
      </div>
    </div>
  );
};

export default Portfolio;
