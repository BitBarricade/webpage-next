import React from "react";
import TeamMember from "./Member/Member";
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
        <div className="animate">
          <p className={`justify-content-center ${Styles.SectionTitle}`}>
            <span></span>Our Team<span></span>
          </p>
          <h1 className={`text-center mb-5 ${Styles.Title}`}>Our Team Members</h1>
        </div>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 col-md-6 animate">
              <TeamMember
                name={member.name}
                position={member.position}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
