// app/page.tsx
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import Facts from "@/components/Facts";
import Service from "@/components/Service";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <Hero />
      <Feature />
      <Facts />
      <Service />
      <Newsletter />
      <Footer />
    </div>
  );
}
