import LandingPageHero from "@/components/landingPage/hero";
import LandingPageBio from "@/components/landingPage/my-bio";
import AboutMe from "@/components/landingPage/aboutMe";
import AllProjects from "@/components/landingPage/projects";
import LandingPageSkills from "@/components/landingPage/skills";
import FiverrServicesSection from "@/components/landingPage/fiverr-services";

export default function Home() {
  return (
    <main className="">
      <LandingPageBio />
      <AboutMe />
      <LandingPageSkills />
      <LandingPageHero />
      <FiverrServicesSection />
      <AllProjects />
    </main>
  );
}
