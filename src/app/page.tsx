import Hero from "@/components/sections/home/Hero";
import Intro from "@/components/sections/home/Intro";
import ServicesHome from "@/components/sections/home/ServicesHome";
import Storytelling from "@/components/sections/home/Storytelling";
import Showcase from "@/components/sections/home/Showcase";
import ProjectsHome from "@/components/sections/home/ProjectsHome";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import StatsBand from "@/components/sections/StatsBand";
import Testimonials from "@/components/sections/Testimonials";
import ProcessSection from "@/components/sections/ProcessSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBand from "@/components/sections/CtaBand";

const trustWords = [
  "New Home Builds",
  "Renovations",
  "Extensions",
  "Custom Joinery",
  "Hardwood Decks",
  "Pergolas",
  "Roofing",
  "Flooring",
  "Heritage Restoration",
];

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip items={trustWords} />
      <Intro />
      <ServicesHome />
      <Storytelling />
      <Showcase />
      <StatsBand tone="light" />
      <ProjectsHome />
      <Testimonials />
      <ProcessSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
