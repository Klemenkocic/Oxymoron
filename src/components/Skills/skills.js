import React from "react";
import "./skills.css";
import AppDesign from "../../assets/app-design.png";
import PM from "../../assets/PM.png";
import data from "../../assets/data.png";
import block from "../../assets/block.png"


const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do?</span>
            <span className="skillDesc">Navigating the digital landscape, I strike a delicate balance between a methodical planner and the spontaneous problem-solver. I’ve learned that while algorithms and data structures bend to your will, projects... well, they have a mind of their own. Here, I blend logic with a touch of improvisation, ensuring that every step forward is as calculated as it is bold. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={PM} alt="PM" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>PROJECT MANAGEMENT</h2>
                        <p>I bring a results-oriented approach to deliver high-quality outcomes. My expertise lies in managing full project lifecycles with a focus on innovation, integrating best practices, and mitigating risks to exceed performance benchmarks.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={data} alt="data" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>DATA ANALYSIS</h2>
                        <p>My proficiency in data analysis is rooted in a solid track record of interpreting vast datasets to inform strategic decision-making. By leveraging business intelligence and analytical tools, I transform data into actionable insights that drive continuous improvement.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={block} alt="block" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>BLOCKCHAIN TECHNOLOGY</h2>
                        <p>In the dynamic field of blockchain technology, my experience encompasses enhancing project architecture, security, and functionality. I possess a thorough understanding of blockchain infrastructure, which allows me to develop and implement innovative solutions within this cutting-edge domain.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>BEING NICE!</h2>
                        <p>My professional repertoire extends beyond technical skills to include a genuine commitment to empathy and human connection. With a history of mentoring and fostering team growth, I prioritize creating an environment where collaboration and understanding are as fundamental as the technology we build upon.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills