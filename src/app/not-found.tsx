import React from "react";
import NotFound from "@/components/NotFound";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

const NotFoundPage: React.FC = () => {
  return (
    <div className="theme-color-bg">
      <Navbar />
      <NotFound />
      <Footer />
    </div>
  );
};

export default NotFoundPage;
