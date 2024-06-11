import { Link } from "react-router-dom";
import React from "react";
import bg1 from "../img/bf3.jpg";

function Body() {
  return (
    <div className="body text-black">
      <img src={bg1} alt="background" className="background" />
      <div className="formfield">
        <h1 className="contacth1">Let's talk about your project</h1>
        <h2>Drop us a line through the form below and we'll get back to you</h2>
        <div className="form">
        <div className="names flex">
        <input type="text" placeholder="Firstname*" className="mr-10 bg-white"></input>
        <input type="text" placeholder="Lastname*" className=" bg-white ml-5"></input></div>
        </div>
        
        <div className="email mt-2 p-2 items-center flex content-center ">
            <input type="text" placeholder="Email Address*" className="emailfield text-center items-center rounded-xl flex content-center"></input>
        </div>
        <div className="Job mt-2 p-2 items-center flex content-center">
        <input type="text" placeholder="Job role*" className="text-center items-center rounded-xl flex content-center mr-4"></input>
        <input type="text" placeholder="Company domain*" className="text-center items-center rounded-xl flex content-center"></input></div>
        <div className="About mt-2 p-2 items-center  justify-center flex content-center">
        <textarea placeholder="Please tell us about your tech needs" className="aboutneed p-5 rounded-xl"></textarea>
        </div>
        <p className="p-5">We will store and process your personal data on terms defined <Link className="text-lime-600 " to="">Here</Link></p>
        <button className="submit p-5">Submit</button>
        </div>
        
      </div>
  );
}

export default Body;
