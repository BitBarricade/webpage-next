import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Contact Page",
  description: "Contact page using Next.js and Tailwind CSS",
};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="theme-color-bg">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
