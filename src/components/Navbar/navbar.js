import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png"; 
import contactImg from "../../assets/contact.png"
import { Link } from "react-scroll"; 
import menu from "../../assets/menu.png";

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">

            <img src={logo} alt="Logo" className="logo" onClick={scrollToTop} />

            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Me</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Projects</Link>
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Education</Link>
                <Link activeClass="active" to="credentials" spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Credentials</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Experience</Link>

            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button>
            
            <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? "flex":"none"}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Me</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Education</Link>
                <Link activeClass="active" to="credentials" spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Credentials</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Experience</Link>
                <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar