'use client';
import React from "react";
import TeamMember from "./Member/Member";
import { motion } from "framer-motion";
import Styles from "./Team.module.css";

const teamMembers = [
  { name: "John Doe", position: "CEO & Founder", image: "/img/team-1.jpg" },
  { name: "Jessica Brown", position: "Web Designer", image: "/img/team-2.jpg" },
  { name: "Tony Johnson", position: "SEO Expert", image: "/img/team-3.jpg" },
  { name: "John Doe", position: "CEO & Founder", image: "/img/team-2.jpg" },
  { name: "Jessica Brown", position: "Web Designer", image: "/img/team-3.jpg" },
  { name: "Tony Johnson", position: "SEO Expert", image: "/img/team-1.jpg" },
];

const Team: React.FC = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container py-5 px-lg-5">
        <motion.div
          initial={{opacity: 0, y: 150}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <p className={`justify-content-center ${Styles.SectionTitle}`}>
            <span></span>Our Team<span></span>
          </p>
          <h1 className={`text-center mb-5 ${Styles.Title}`}>Our Team Members</h1>
        </motion.div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="col-lg-4 col-md-6"
              initial={{opacity: 0, y: 100}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
            >
              <TeamMember
                name={member.name}
                position={member.position}
                image={member.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
