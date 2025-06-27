import { personalData } from "@/utils/data/personal-data";
import Projects from "../../components/homepage/projects";
import Reviews from "../../components/homepage/reviews";
import TechStack from "./components/tech-stack";
import ProcessSection from "./components/process-section";
import MobileHeroSection from "./components/mobile-hero";

export default function MobileDevelopment() {
  return (
    <>
      <MobileHeroSection />
      <TechStack />
      <ProcessSection />
      <Projects filter="mobile" /> {/* Assuming projects can be filtered */}
      <Reviews filter="mobile" /> {/* Assuming reviews can be filtered */}
    </>
  );
}
