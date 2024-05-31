import React from "react";
import TeamMember from "./TeamMember";

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
        <div className="animate-slideInDown">
          <p className="section-title text-secondary justify-content-center">
            <span></span>Our Team<span></span>
          </p>
          <h1 className="text-center mb-5">Our Team Members</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="animate-zoomIn">
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
