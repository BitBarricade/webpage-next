import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import Footer from "@/components/Footer";

const ProjectPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default ProjectPage;
