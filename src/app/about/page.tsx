import React from "react";
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Feature/Feature";
import Facts from "@/components/Facts/Facts";
import Team from "@/components/Team/Team";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Facts />
      <Team />
    </div>
  );
};

export default AboutPage;
