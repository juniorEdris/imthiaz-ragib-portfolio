import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings.js";

const AboutMe = () => {
  return (
    <section className="py-12" id="about-me">
      <Container>
        <LandingPageHeadings heading="About" headingClassName="" />

        <div className="md:max-w-5xl md:m-auto">
          <p className="text-lg md:text-2xl">
            I am a passionate full-stack web application developer with
            extensive experience in creating MERN applications. I am dedicated
            to writing clean and efficient code, constantly striving to enhance
            my skills and incorporate new technologies into my projects. I
            possess the expertise to assist you with all aspects of your
            project, ranging from developing responsive frontend code to
            creating robust APIs. By leveraging my skills, I can effectively
            contribute to the growth and sustainability of your business and
            ideas. Let&apos;s collaborate and bring your vision to life.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
