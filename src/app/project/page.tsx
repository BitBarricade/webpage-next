import React from "react";

import Hero from "@/components/Hero";
import ProjectList from "@/components/ProjectList";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar/NavBar";

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
