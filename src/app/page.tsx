// app/page.tsx
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Feature/Feature";
import Facts from "@/components/Facts/Facts";
import Service from "@/components/Service/Service";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

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
