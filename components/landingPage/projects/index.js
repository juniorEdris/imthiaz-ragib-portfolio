import { LandingPageHeadings } from "@/components/primary/app-headings.js";
import SingleProject from "@/components/landingPage/projects/single-project";

const AllProjects = () => {
  return (
    <section className="py-12">
      <LandingPageHeadings heading="projects" />

      <div className="grid gap-y-1">
        <SingleProject
          title="Vite React Inventory Dashboard"
          image="/images/landing-page/projects/inventory-ui.png"
          href="https://frontend-inventory-app.vercel.app/"
          description="This project is created during a coding test. This was a good experience as I used Vite js as the front-end tool for the APP for the first time, and turned out to be the best and fastest tool I have worked on. In no time I got my updated changes on the browser.
          This repository has a hosted version of the application click the anchor button above."
        />

        <SingleProject
          title="Typescript Next Js Tailwind CSS Web Application"
          image="/images/landing-page/projects/walmat-fiverr.png"
          href="https://www.pinterest.com/pin/772437773614525142/"
          description="This project was developed as part of a Fiverr order, providing me with a valuable experience in utilizing TypeScript and Next.js as the front-end tools for the application. In addition, I employed Tailwind CSS to design the components, including the implementation of Shadcn UI. Shadcn UI is a powerful framework built on top of Tailwind CSS and Radix UI, which is a comprehensive library offering a wide range of user interface components. The primary focus of Shadcn UI is to ensure accessibility, customization, and an enhanced developer experience."
        />
      </div>
    </section>
  );
};

export default AllProjects;
