import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";


const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do </span>
            <span className="skillDesc">Here to learn | Mastering Technology & Project Management | Sport Enthusiast</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>PROJECT MANAGEMENT</h2>
                        <p>I will make the project come to life. There will be problems but we will solve them!</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>DATA ANALYSIS</h2>
                        <p>A versitale data analyst with years of proven experince in the field of blockchain technology!</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>SPORT ENTHUSIAST</h2>
                        <p>This is what i will end up doing. Everything else is just money raising for me!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills