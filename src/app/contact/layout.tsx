import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Contact Page",
  description: "Contact page using Next.js and Tailwind CSS",
};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
