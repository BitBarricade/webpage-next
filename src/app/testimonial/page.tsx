import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import TestimonialList from "@/components/Testimonial/Testimonial";

export const metadata: Metadata = {
  title: "Testimonial",
  openGraph: {
    title: "Testimonial",
  }
};


const TestimonialPage: React.FC = () => {
  return (
    <div>
      <Hero />
      <TestimonialList />
    </div>
  );
};

export default TestimonialPage;
