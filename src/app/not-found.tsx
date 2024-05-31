import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NotFound from "@/components/NotFound";
import Footer from "@/components/Footer";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <NotFound />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
