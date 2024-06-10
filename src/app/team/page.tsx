import React from "react";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

const TeamPage: React.FC = () => {
  return (
    <div className="theme-color-bg">
      <Navbar />
      <Hero />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
