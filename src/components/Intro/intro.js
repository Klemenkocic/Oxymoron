import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import resumeFile from "../../assets/Klemen Kocic CV.pdf"; 


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello there, </span>
                <span className="introText">My name is <span className="introName">Klemen</span> <br />Dedicated Student</span>
                <p className="introPara">Welcome to my corner of the internet,<br/>birthed from sheer necessity and a dash of stubborn will. Enjoy your stay!</p>
                {/* Button for downloading the resume */}
                <a href={resumeFile} download="Klemen Kocic Resume.pdf" className="btn">
                    Download Resume
                </a>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    );
}

export default Intro;
