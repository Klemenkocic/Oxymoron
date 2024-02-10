import React from "react";
import "./credentials.css";

import META from "../../assets/META.png";
import AMERICAN from "../../assets/AMERICAN.png";
import SALES from "../../assets/SALES.png";
import GOOGLE from "../../assets/GOOGLE.png";
import YALE from "../../assets/YALE.png";
import GOTEL from "../../assets/GOTEL.png";

const Credentials = () => {
    return (
        <section id="credentials">
            <span className="credentialTitle">Credentials</span>
            <span className="credentialDesc">Embark on a tour through my Credentials section, where my professional qualifications and achievements are showcased, reflecting a steadfast commitment to excellence and a continuous pursuit of knowledge.</span>
            <div className="credentialBars">
                <div className="credentialBar">
                    <img src={META} alt="META" className="credentialBarImg"/>
                    <div className="credentialBarText">
                        <h2>BACKEND DEVELOPER PROFESSIONAL CERTIFICATE</h2>
                        <p className="date">December 2023</p>
                        <p className="university">META</p>
                        <p>Acquired essential technical skills to become a back-end developer. Worked with programming systems such as Python Syntax, Django Linux commands, Git, and SQL. Enhanced coding proficiency to confidently solve complex problems</p>
                        <a href="https://www.coursera.org/account/accomplishments/specialization/LYU3E7CM87H8" className="view-button">View Certificate</a>
                    </div>
                </div>
                <div className="credentialBar">
                    <img src={AMERICAN} alt="AMERICAN" className="credentialBarImg"/>
                    <div className="credentialBarText">
                        <h2>LEADING TEAMS: DEVELOPING AS A LEADER</h2>
                        <p className="date">November 2023</p>
                        <p className="university">University of Illinois at Urbana-Champaign</p>
                        <p>Gained expertise in leadership dynamics, ethical decision-making, trust-building, and continuous leadership growth.</p>
                        <a href="https://www.coursera.org/account/accomplishments/records/3Z43BYZGW3VJ" className="view-button">View Certificate</a>
                    </div>
                </div>
                <div className="credentialBar">
                    <img src={SALES} alt="SALES" className="credentialBarImg"/>
                    <div className="credentialBarText">
                        <h2>SALES AND CRM OVERVIEW</h2>
                        <p className="date">November 2023</p>
                        <p className="university">Salesforce</p>
                        <p>Mastered CRM's role in modern business, explored Salesforce's benefits, navigated Trailhead, gained knowledge of Salesforce Sales Cloud.</p>
                        <a href="https://www.coursera.org/account/accomplishments/records/F5BGB5BH7BRA" className="view-button">View Certificate</a>
                    </div>
                </div>
                <div className="credentialBar">
                    <img src={GOOGLE} alt="GOOGLE" className="credentialBarImg"/>
                    <div className="credentialBarText">
                        <h2>PROJECT MANAGEMENT PROFESSIONAL CERTIFICATE</h2>
                        <p className="date">October 2023</p>
                        <p className="university">GOOGLE</p>
                        <p>Completed six hands-on courses by Google. Equipped to initiate, plan, and manage both traditional and agile projects.</p>
                        <a href="https://www.coursera.org/account/accomplishments/specialization/ALHB7MAAXLSL" className="view-button">View Certificate</a>
                    </div>
                </div>
                <div className="credentialBar">
                    <img src={YALE} alt="YALE" className="credentialBarImg"/>
                    <div className="credentialBarText">
                        <h2>INTRODUCTION TO NEGOTIATION</h2>
                        <p className="date">October 2023</p>
                        <p className="university">Yale University</p>
                        <p>Acquired a structured framework for negotiation. Obtained the ability to make persuasive arguments, and effectively navigate competitive situations.</p>
                        <a href="https://www.coursera.org/account/accomplishments/records/8VDHV5DMYBX6" className="view-button">View Certificate</a>
                    </div>
                </div>
                <div className="credentialBar">
                    <img src={GOTEL} alt="GOTEL" className="credentialBarImg"/>
                    <div className="credentialBarText">
                        <h2>PROGRAMMMING USING PYTHON</h2>
                        <p className="date">November 2020</p>
                        <p className="university">GOTEL INSTRUCTIONS</p>
                        <p>Due to bordem and wanting to learn more I acquired basic understanding of python via a renoweved agency in Slovenia.</p>
                        <a href="https://www.go-tel.si/tecaji/programiranje-python/" className="view-button">View Certificate</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Credentials