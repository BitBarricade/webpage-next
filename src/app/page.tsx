// app/page.tsx
import Hero from "@/components/Hero/Hero";
import Feature from "@/components/Feature/Feature";
import Facts from "@/components/Facts/Facts";
import Service from "@/components/Service/Service";
import Newsletter from "@/components/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="container-xxl p-0">
      <Hero />
      <Feature />
      <Facts />
      <Service />
      <Newsletter />
    </div>
  );
}
