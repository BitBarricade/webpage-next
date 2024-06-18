import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import Team from "@/components/Team/Team";

export const metadata: Metadata = {
  title: "Our Team",
  openGraph: {
    title: "Our Team",
  }
};

const TeamPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Team />
    </div>
  );
};

export default TeamPage;
