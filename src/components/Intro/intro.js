import React from "react";
import "./intro.css";
import bg from "../../assets/image.png"
import btnImg from "../../assets/hireme.png"
import { Link } from "react-scroll"; 

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello, </span>
                <span className="introText">I am <span className="introName">Klemen</span> <br />Website Builder</span>
                <p className="introPara">I am a skilled web builder and this is a good little exercise.<br/>I hope I dont stumble upon any bugs in my future endevours.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro