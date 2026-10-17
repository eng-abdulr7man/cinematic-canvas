import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ScrollHud from "@/components/ScrollHud";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ShowreelGallery from "@/components/ShowreelGallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  // Arriving from another route (e.g. "/#work"): jump to that section once.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <div className="relative">
      <ScrollHud />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ShowreelGallery />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
