import { Link } from 'react-router-dom';
import React from "react";
import bg1 from "../img/bg6.jpg";
import profile from "../img/Simon1.png";

function Body() {
  return (
    <div className="body">
      <img src={bg1} alt="background" className="background" />
      <div className="intro"><h1>Bridging the Gap Between Design<br/> and Functionality: A Full-Stack Approach</h1>
      <h2 className="text-sm">Meet Simon Kuria, a Certified Full-Stack Developer.  
      <Link className="text-emerald-400" to="/about">Learn More</Link>
      About his expertise and<br/> How he can help you achieve your Tech Goals.</h2></div>
      <div className="profile-container">
        <img class="img" id="profile" src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Body;