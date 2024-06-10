import React from "react";
import Hero from "@/components/Hero/Hero";
import TestimonialList from "@/components/Testimonial/Testimonial";
import Footer from "@/components/Footer/Footer";
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
