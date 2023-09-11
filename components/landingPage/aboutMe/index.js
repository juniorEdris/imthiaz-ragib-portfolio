import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings.js";

const AboutMe = () => {
  return (
    <section className="py-12" id="about-me">
      <Container>
        <LandingPageHeadings heading="About" headingClassName="" />

        <div className="md:max-w-5xl md:m-auto">
          <p className="text-lg md:text-2xl">
            I am a JavaScript/TypeScript frontend developer with 3+ years of
            experience. I am proficient in React js, Next js, and CSS libraries
            like Material UI, Styled Components, Bootstrap, Tailwind CSS, React
            Bootstrap and other popular CSS libraries. I am also experienced in
            working with APIs, databases, and other back-end technologies. I am
            a highly motivated and detail-oriented individual with a passion for
            creating beautiful and functional user interfaces. I am also a quick
            learner and I am always up for a challenge. I am confident that I
            can help you build the perfect frontend for your website or
            application. I am available for both freelance and full-time work.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
