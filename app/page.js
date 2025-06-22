import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import WhyMe from "./components/homepage/why-me";
import Reviews from "./components/homepage/reviews";
import OurServices from "./components/homepage/services";
import ProcessSteps from "./components/homepage/Process of our work";
import AnalyticsSection from "./components/homepage/analytics-section";

async function getData() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${personalData.devUsername}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const filtered = data
    .filter((item) => item?.cover_image)
    .sort(() => Math.random() - 0.5);

  return filtered;
}

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <HeroSection />
      <AnalyticsSection />

      <WhyMe />
      <Reviews />
      {/* <AboutSection /> */}
      {/* <Experience /> */}
      <Projects />
      <ProcessSteps />
      <Skills />
      <OurServices />
      {/* <Education /> */}
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </>
  );
}
