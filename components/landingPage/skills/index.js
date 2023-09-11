import Container from "@/components/primary/container";
import { LandingPageHeadings } from "@/components/primary/app-headings.js";

const Javascript = [
  "ES6",
  "React JS",
  "Next JS",
  "TypeScript",
  "Apollo GraphQL",
  "Leaflet",
  "Redux",
  "Swiper JS Slider",
];

const css = [
  "Responsive websites",
  "Tailwind CSS",
  "CSS-in-JS (Emotion, styled-components, Material UI)",
  "SASS",
  "Tailwind Material",
  "Bootstrap",
];

const LandingPageSkills = () => {
  return (
    <section className="py-12" id="skills">
      <Container>
        <LandingPageHeadings heading="skills" />

        <div className="">
          {/* <div className="">grid md:grid-cols-[auto_1fr]
            <LandingPageHeadings subheading="Front-End" />
          </div> */}

          <div className="md:max-w-xl md:m-auto grid gap-y-2">
            <div className="">
              <h3 className="text-app-theme font-fjalla text-lg md:text-2xl">
                JavaScript
              </h3>
              <div className="py-6">
                <ul class="flex flex-wrap gap-3 text-app-secondary-dark list-disc list-inside pl-4 mb-8">
                  {Javascript?.map((item, _idx) => (
                    <li key={_idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <h3 className="text-app-theme font-fjalla text-lg md:text-2xl">
                HTML & CSS
              </h3>
              <div className="py-6">
                <ul class="flex flex-wrap gap-3 text-app-secondary-dark list-disc list-inside pl-4 mb-8">
                  {css?.map((item, _idx) => (
                    <li key={_idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingPageSkills;
