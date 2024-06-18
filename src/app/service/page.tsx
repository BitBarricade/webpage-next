import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";

export const metadata: Metadata = {
  title: "Services",
  openGraph: {
    title: "Services",
  }
};

export default function ServicePage() {
  return (
    <div>
      <Hero />
      <Service />
    </div>
  );
}
