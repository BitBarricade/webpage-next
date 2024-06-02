import React from "react";
import Hero from "@/components/Hero";
import TestimonialList from "@/components/TestimonialList";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar/NavBar";

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
