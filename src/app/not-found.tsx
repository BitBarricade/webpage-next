import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import NotFound from "@/components/NotFound";
import Footer from "@/components/Footer";

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <NotFound />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
