import React from "react";
import "./education.css";
import SEB from "../../assets/SEB.png" ;
import SEOUL from "../../assets/SEOUL.png";
import ISCTE from "../../assets/ISCTE.png";
import POLJANE from "../../assets/POLJANE.png";

const Education = () => {
    return (
        <section id="education">
            <span className="educationTitle">Education</span>
            <span className="educationlDesc">Welcome to the Education section, where you'll discover the academic journey that has shaped my expertise and fueled my passion for innovation.</span>
            <div className="educationBars">
                <div className="educationBar">
                    <img src={SEB} alt="SEB" className="educationBarImg"/>
                    <div className="educationBarText">
                        <h2>Masters in Business Intelligence</h2>
                        <p className="date">Currently Enrolled</p>
                        <p className="university">University of Ljubljana</p>
                        <p>Pursuing a Master's in Business Intelligence and Business/Office Automation/Technology to harness the power of IT for strategic decision-making and operational efficiency.</p>
                    </div>
                </div>
                <div className="educationBar">
                    <img src={SEB} alt="SEB" className="educationBarImg"/>
                    <div className="educationBarText">
                        <h2>BACHELOR OF INTERNATIONAL BUSINESS</h2>
                        <p className="date">Graduated 30.08.2023</p>
                        <p className="university">University of Ljubljana</p>
                        <p>From gaining international education and demonstrating resilience by balancing work and studies, to fostering cultural exchange through the SEBLU Buddies Initiative and standing out in the Beta Gamma Sigma, my journey is marked by a steadfast dedication to data analysis and academic excellence.</p>
                    </div>
                </div>
                <div className="educationBar">
                    <img src={SEOUL} alt="SEOUL" className="educationBarImg"/>
                    <div className="educationBarText">
                        <h2>BILATERAL EXCHANGE</h2>
                        <p className="date">August 2021 to January 2022</p>
                        <p className="university">University of Seoul</p>
                        <p>Specializing in International Business with a focus on Korean culture, I've gained unique academic and cultural insights, delved into global operations from a Korean perspective, and demonstrated adaptability and resilience, enhancing my cross-cultural leadership and collaboration skills.</p>
                    </div>
                </div>
                <div className="educationBar">
                    <img src={ISCTE} alt="ISCTE" className="educationBarImg"/>
                    <div className="educationBarText">
                        <h2>ERASMUS EXCHANGE</h2>
                        <p className="date">January 2022 to August 2022</p>
                        <p className="university">ISCTE - Instituto Universitário de Lisboa</p>
                        <p>Delving deep into European business operations, especially in Portugal, I've fortified my knowledge and network, demonstrated adaptability and cultural sensitivity amidst variances, and gained in-depth understanding of the market's unique landscape for strategic growth.</p>
                    </div>
                </div>
                <div className="educationBar">
                    <img src={POLJANE} alt="POLJANE" className="educationBarImg"/>
                    <div className="educationBarText">
                        <h2>HIGH SCHOOL</h2>
                        <p className="date">September 2015 to June 2019</p>
                        <p className="university">Gimansium Poljane</p>
                        <p>A dynamic high school environment where I achieved my C1 English certification and dedicated my final years to exploring the realms of science, laying a foundational knowledge base for my future academic and professional endeavors.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education