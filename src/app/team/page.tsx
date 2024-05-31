import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const TeamPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Team />
      <Footer />
    </div>
  );
};

export default TeamPage;
