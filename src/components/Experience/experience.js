import React from 'react';
import './experience.css';

const experiences = [
    {
      company: "MetaKing Studios",
      title: "PROJECT MANAGER",
      duration: "February 2022 - October 2023 (1 year 9 months)",
      location: "Stockholm, Stockholm County, Sweden",
      descriptions: [
        "In my role as the Project Manager for BLOCKLORDS, I harnessed data to prioritize development tasks, streamlining our release cycle from monthly to bi-weekly updates and demonstrating meticulous organizational skills by keeping transparent documentation. I expanded our network by establishing relationships with over 60 partners and seamlessly integrating third-party technologies, enhancing team collaboration and gameplay experience. Simultaneously, I supported our CEO, COO, and CTO with strategic planning, documentation, and investor communications, showcasing my adaptability and interpersonal skills in our project's dynamic setting."
      ],
    },
    {
      company: "Seascape Network",
      title: "PROGRAM MANAGER",
      duration: "January 2021 - February 2022 (1 year 2 months)",
      location: "Lisbon, Portugal",
      descriptions: [
        "My systematic approach to task prioritization involved condensing daily tasks into weekly sprints, crucially navigating multiple gaming projects to successful launches across various platforms without sacrificing quality or breaching deadlines. I devised and implemented a sophisticated algorithm on a tight schedule, identifying over 10,000 malevolent blockchain wallets, thereby reinforcing our security measures and fostering a secure environment for users. Moreover, I provided steadfast support to five specialized teams, each comprised of four seasoned professionals, in the successful debut of five games, with each achieving over 20,000 daily active users. My contributions ranged from offering strong organizational strategies to delivering developmental support and conducting thorough data analysis throughout the project's lifespan."
      ],
    },
    {
      company: "Seascape Network",
      title: "BUSINESS INTERN/ DATA ANALYST",
      duration: "March 2020 - January 2021 (11 months)",
      location: "Seoul, South Korea",
      descriptions: [
        "I showcased my aptitude for prioritization by interpreting intricate data from over 60 databases, which allowed for the transition to data-driven decision-making, significantly reducing decision times from one week to just a day. Utilizing skills in Python, Tableau, and Grafana that I had cultivated independently, I developed a bespoke data website dashboard, fostering data-centric dialogues across all levels of the organization. Additionally, my collaboration with veteran data analysts and developers from affiliate firms enabled the integration of broad industry insights, which augmented our weekly data collection by an impressive 80%."
      ],
    },
    {
      company: "Kaval Group",
      title: "ASSISTANT COOK",
      duration: "September 2018 - February 2020 (1 year 6 months)",
      location: "Ljubljana, Slovenia",
      descriptions: [
        "In the bustling atmosphere of a high-traffic restaurant, I upheld exceptional culinary standards, regularly receiving guests' commendations for culinary excellence. My role extended to collaborating with the head chef to craft seasonal menus that highlighted local and sustainable produce, reflecting our commitment to quality and eco-consciousness. I adeptly managed the kitchen staff, ensuring smooth operations through the busiest of hours. Additionally, I was responsible for meticulous inventory oversight to guarantee the freshness of ingredients, while also fostering strong relationships with suppliers to secure a steady supply of premium-quality ingredients."
      ],
    },
    {
      company: "Fetiche Bar Ljubljana",
      title: "BARTENDER",
      duration: "January 2017 - October 2018 (1 year 10 months)",
      location: "Ljubljana, Slovenia",
      descriptions: [
        "In the dynamic setting of a bustling bar, I adeptly managed a multitude of customer requests while maintaining a positive demeanor, earning a reputation for exceptional customer service that enhanced the bar's standing in the local community. My creative flair led to the invention of unique cocktail recipes, which quickly became customer favorites and significantly contributed to repeat business. Furthermore, I dedicated myself to the training and development of new bartenders and waitstaff, imparting essential skills and best practices to ensure the consistent quality of service that our patrons had come to expect."
      ],
    },
    {
      company: "Summit avto d.o.o.",
      title: "ASSISTANT MECHANIC",
      duration: "June 2015 - September 2016 (1 year 4 months)",
      location: "Ljubljana, Slovenia",
      descriptions: [
        "Working alongside senior mechanics, I honed my diagnostic abilities to swiftly address vehicle issues, thereby accelerating problem-solving and elevating customer satisfaction. My role allowed me to acquire hands-on expertise in essential vehicle maintenance tasks, such as oil changes, brake inspections, filter replacements, and tire rotations. I took charge of inventory management, meticulously organizing car parts to ensure availability and reduce customer wait times for repairs. Specializing in various car models, including FORD, RANGE ROVER, and JAGUAR, I offered customized maintenance guidance to car owners, further cementing the garage's reputation for reliability and technical proficiency."
      ],
    },
  ];
  

const Experience = () => {
    return (
        <section id="experience">
            <div className="experience-header">
                <h2 className="experience-title">Experience</h2>
                <p className="experience-intro">Here's an overview of my professional history and key accomplishments. </p>
            </div>
            <div className="experience-content">
                {experiences.map((exp, index) => (
                    <div className="experience-item" key={index}>
                        <h3>{exp.title} at {exp.company}</h3>
                        <p className="experience-duration">{exp.duration}</p>
                        <p className="experience-location">{exp.location}</p>
                        <p className="experience-descriptions">{exp.descriptions[0]}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;