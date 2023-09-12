import { heroSlides } from "@/lib/utils/uiData";
import HeroSlider from "@/components/landingPage/hero/hero-slider";
import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings.js";

const LandingPageHero = () => {
  return (
    <section className="py-12" id="landing-hero">
      <Container>
        <LandingPageHeadings heading="My Services" headingClassName="" />
      </Container>
      <div className="">
        <HeroSlider items={heroSlides} />
      </div>
    </section>
  );
};

export default LandingPageHero;
