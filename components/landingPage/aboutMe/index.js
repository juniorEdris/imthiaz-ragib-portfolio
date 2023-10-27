import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings.js";
import { Github } from "lucide-react";
import Link from "next/link";
import { appTransitionClasses } from "@/lib/utils";

const AboutMe = () => {
  return (
    <section className="py-12" id="about-me">
      <Container>
        <LandingPageHeadings heading="About" headingClassName="" />

        <div className="md:max-w-5xl md:m-auto grid gap-4">
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

          <div className="py-4 flex space-x-3 items-center justify-center">
            <Link
              className={`inline-flex gap-2 border border-app-secondary-dark hover:bg-app-secondary-dark text-app-secondary-dark hover:text-app-light max-w-lg rounded-full drop-shadow-md py-2 px-4 ${appTransitionClasses}`}
              href={`https://github.com/juniorEdris`}
              target="_blank"
            >
              <Github /> Github Profile
            </Link>

            <Link
              className={`inline-flex gap-2 border border-app-secondary-dark hover:bg-app-secondary-dark text-app-secondary-dark hover:text-app-light max-w-lg rounded-full drop-shadow-md py-2 px-4 ${appTransitionClasses}`}
              href={`https://ragib-webdev.vercel.app/`}
              target="_blank"
            >
              See Resume
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
