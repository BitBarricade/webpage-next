import React from "react";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar/NavBar";

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
