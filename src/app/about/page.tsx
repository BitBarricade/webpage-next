import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Feature/Feature";
import Facts from "@/components/Facts/Facts";
import Team from "@/components/Team/Team";

export const metadata: Metadata = {
  title: "About Us",
  description: "Know more about our us",
  openGraph: {
    title: "About Us",
    description: "Know more about our us",
  }
};

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
