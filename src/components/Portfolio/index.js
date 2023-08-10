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
      description: 'Javascript, CSS, RESTful APIs',
      link: "https://jtruehitt.github.io/Do_You_Even_Trivia_Bro/",
      repo: "https://github.com/JTruehitt/Do_You_Even_Trivia_Bro"
    },
    {
      name: 'Weather Dashboard',
      description: 'Javascript, RESTful APIs',
      link: "https://jmcconna.github.io/Weather-Dashboard/",
      repo: "https://github.com/jmcconna/Weather-Dashboard"
    },
    {
      name: 'SVG Logo Maker',
      description: 'Node, CLI',
      link: "https://github.com/jmcconna/SVG-Logo-Maker",
      repo: "https://github.com/jmcconna/SVG-Logo-Maker"
    },
    {
      name: 'Social Network API',
      description: 'MongoDb, Express',
      link: "https://github.com/jmcconna/Social-Network-API",
      repo: "https://github.com/jmcconna/Social-Network-API"
    },
    {
      name: 'Text Editor PWA',
      description: 'Progressive Web App',
      link: "https://github.com/jmcconna/Text-Editor-PWA",
      repo: "https://github.com/jmcconna/Text-Editor-PWA"
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
