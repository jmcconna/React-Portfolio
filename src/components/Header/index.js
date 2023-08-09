import React from 'react';
import coverImage from '../../assets/cover/Brisbane skyline.JPG';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>James McConnaughey</h1>
      <img src={coverImage} alt="Brisbane Skyline"></img>
      {props.children}
    </header>
  );
}

export default Header;
