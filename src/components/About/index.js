import React from 'react';
import profilePic from '../../assets/images/profile.jpg'

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={profilePic} alt="James McConnaughey Profile"></img>
        </div>
        <p>
        I am a customer-focused full-stack engineer. Product management experience has taught me to question all my assumptions: go to the customer first and last, and make every decision based on evidence. Build the "wrong thing" fast in order to build the right thing well. My philosophy is heavily influenced by Marty Cagan: discovery and delivery should be simultaneous, on-going, and collaborative activities on a modern product team.
        </p>
        <p>
        From healthcare to education to entertainment, I am motivated by creative challenges in the industries that lift people up.
        </p>
      </div>
    </section>
  );
}

export default About;
