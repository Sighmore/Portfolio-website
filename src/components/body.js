import { Link } from 'react-router-dom';
import React from "react";
import bg1 from "../img/bg6.jpg";
import profile from "../img/Simon1.png";

function Body() {
  return (
    <div className="body">
      <img src={bg1} alt="background" className="background" />
      <div className="intro"><h1 className="mb-5">Is my business about technology? Yes, <br/>but it’s also about you and your needs." </h1>
      <h2 className="text-sm">Meet Simon Kuria, a Certified Full-Stack Developer.  
      <Link className="text-emerald-400" to="/about">Learn More </Link>
      about his expertise and<br/> How he can help you achieve your Tech Goals.</h2></div>
      <div className="profile-container">
        <img class="img" id="profile" src={profile} alt="profile" />
      </div>
    </div>
  );
}

export default Body;