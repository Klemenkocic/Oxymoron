import React, { useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

import TwitterIcon from "../../assets/twitter.png";
import GithubIcon from "../../assets/git.png";
import LinkedInIcon from "../../assets/linkedin.png";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_t8vmwih', 'template_86bco38', form.current, 'vcropGLpTix63_9af')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                alert("Email Sent!");
                e.target.reset();
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/klemen-kocic/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="link"/>
                        </a>
                        <a href="https://twitter.com/koci_kocic" target="_blank" rel="noopener noreferrer">
                            <img src={TwitterIcon} alt="Twitter" className="link"/>
                        </a>
                        <a href="https://github.com/Klemenkocic" target="_blank" rel="noopener noreferrer">
                            <img src={GithubIcon} alt="GitHub" className="link"/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact