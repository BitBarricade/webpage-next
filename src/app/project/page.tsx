import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import ProjectList from "@/components/Project/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  openGraph: {
    title: "Projects",
  }
};

const ProjectPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProjectList />
    </div>
  );
};

export default ProjectPage;
