import React from "react";

function Footer(){
    return(
        <div className="Cont p-15 mt-0  ">
        <div id="icons" className="mr-40 m-3 items-center p-5 justify-center">
        <h1>Get In Touch</h1>
        <p>Simon is a tech expert: Deals with tech related<br/> stuff day in and day out</p>
        <div>
            <ul>
            <a href="https://www.linkedin.com/in/simon-githongo-4562301a6"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Sighmore"><i class="fa-brands fa-github"></i></a>
                <i class="fa-brands fa-x-twitter"></i>
                <i class="fa-brands fa-facebook"></i>
            </ul>
        </div>
        </div>
        <div id="icons1" className="txt=sm m-3 items-center pt-10 mt-10 justify-center bg-gray-50">
        <i class="fa-solid fa-envelope mb-10"></i>
        <p className="pt-8">simonkuriah7@gmail.com</p>
        </div>
        <div id="icons2" className="items-center pt-10 justify-center mt-10 bg-gray-50">
        <i class="fa-solid fa-location-dot flex text-lg mb-10"></i>
        <p>P.O BOX 44, Kericho-Kenya</p>
        </div>
        </div>
    );
}

export default Footer;