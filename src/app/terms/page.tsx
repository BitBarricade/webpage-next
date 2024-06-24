import React from "react";
import type { Metadata } from "next";
import CommingSoon from "@/components/ComingSoon/ComingSoon";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Page Not yet ready",
  openGraph: {
    title: "Coming Soon",
    description: "Page Not yet ready",
  }
};

const Terms: React.FC = () => {
  return (
    <CommingSoon title="Terms of Services" />
  );
};

export default Terms;