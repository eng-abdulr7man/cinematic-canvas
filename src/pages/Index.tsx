import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowreelGallery from "@/components/ShowreelGallery";
import SkillsTimeline from "@/components/SkillsTimeline";
import WorkProcess from "@/components/WorkProcess";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <ShowreelGallery />
      <SkillsTimeline />
      <WorkProcess />
      <Footer />
    </div>
  );
};

export default Index;
