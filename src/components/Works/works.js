import React from "react";
import "./works.css";
import BLOCKLORDS from "../../assets/BLOCKLORDS.png";
import MINIMINERS from "../../assets/MINIMINERS.png";
import MOONSCAPE from "../../assets/MOONSCAPE.png";
import SEASCAPE from "../../assets/SEASCAPE.png";
import SAFE from "../../assets/SAFE.png";
import SEADEX from "../../assets/SEADEX.png";



const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">Previous Projects</h2>
            <span className="worksDesc">I take pride in my work. These are some of the porjects I worked on</span>
            <div className="worksImgs">
                <img src={BLOCKLORDS} alt="BLOCKLORDS" className="worksImg"/>
                <img src={MINIMINERS} alt="MINIMINERS" className="worksImg"/>
                <img src={MOONSCAPE} alt="MOONSCAPE" className="worksImg"/>
                <img src={SEASCAPE} alt="SEASCAPE" className="worksImg"/>
                <img src={SAFE} alt="SAFE" className="worksImg"/>
                <img src={SEADEX} alt="SEADEX" className="worksImg"/>
            </div>
        </section>
    );
}

export default Works