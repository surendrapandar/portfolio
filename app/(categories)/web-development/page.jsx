import { personalData } from "@/utils/data/personal-data";
import Projects from "../../components/homepage/projects";
import Reviews from "../../components/homepage/reviews";
import TechStack from "./components/tech-stack";
import ProcessSection from "./components/process-section";
import WebHeroSection from "./components/web-hero";

export default function WebDevelopment() {
  return (
    <>
      <WebHeroSection />
      <TechStack />
      <ProcessSection />
      <Projects filter="web" />
      <Reviews filter="web" />
    </>
  );
}
