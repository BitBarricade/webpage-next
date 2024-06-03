import React from "react";
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Feature";
import Facts from "@/components/Facts";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar/NavBar";

const AboutPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <Facts />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutPage;
