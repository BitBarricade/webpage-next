import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Newsletter />
      <Footer />
    </>
  );
}
