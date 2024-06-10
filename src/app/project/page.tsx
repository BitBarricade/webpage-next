import React from "react";

import Hero from "@/components/Hero/Hero";
import ProjectList from "@/components/Project/ProjectList";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

const ProjectPage: React.FC = () => {
  return (
    <div style={{backgroundColor: "var(--background-color) !important"}}>
      <Navbar />
      <Hero />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default ProjectPage;
