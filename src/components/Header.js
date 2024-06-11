import { Link } from 'react-router-dom';
import React from "react";
import logo from '../img/Screenshot Capture - 2024-06-10 - 12-35-04.png';

function Header(){
    return(
        <div id="Header">
            <ul className="p-5 justify-center flex items-center">
            <Link to="/" id="logo"><img  src={logo} alt="Logo" /></Link>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Skills">Skills</Link></li>
                <li><Link to="/Education">Education</Link></li>
                <li><Link to="/Work">Work</Link></li>
                <li><Link to="Experience">Experience</Link></li>
                <li><Link to="Contact">Contact</Link></li>
            </ul>
        </div>
    );

}

export default Header;