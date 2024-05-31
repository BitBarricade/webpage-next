import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestimonialList from "@/components/TestimonialList";
import Footer from "@/components/Footer";

const TestimonialPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TestimonialList />
      <Footer />
    </div>
  );
};

export default TestimonialPage;
