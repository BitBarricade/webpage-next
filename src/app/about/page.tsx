import React from "react";
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Feature/Feature";
import Facts from "@/components/Facts/Facts";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
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
