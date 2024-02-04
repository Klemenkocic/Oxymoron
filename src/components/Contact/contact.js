import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Facebook from "../../assets/facebook.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import InstagramIcon from "../../assets/instagram.png";
import YoutubeIcon from "../../assets/youtube.png";


const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">My cluients are based all over the world. Honestly I can hardly imagine how they would make it work withouth me. They should be thanking god everyday i arrived on their doorstep!</p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg"/>
                    <img src={Adobe} alt="Client" className="clientImg"/>
                    <img src={Microsoft} alt="Client" className="clientImg"/>
                    <img src={Facebook} alt="Client" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="email" className="email" placeholder="Your Email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="sumbit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        <img src={TwitterIcon} alt="Twitter" className="link"/>
                        <img src={YoutubeIcon} alt="Youtube" className="link"/>
                        <img src={InstagramIcon} alt="Instagram" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact