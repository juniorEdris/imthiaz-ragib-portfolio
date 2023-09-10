import LandingPageHero from "@/components/landingPage/hero";
import LandingPageBio from "@/components/landingPage/my-bio";
import AboutMe from "@/components/landingPage/aboutMe";
import AllProjects from "@/components/landingPage/projects";

export default function Home() {
  return (
    <main className="">
      <LandingPageBio />
      <AboutMe />
      <LandingPageHero />
      <AllProjects />
    </main>
  );
}
