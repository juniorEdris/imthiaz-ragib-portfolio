import { LandingPageHeadings } from "@/components/primary/app-headings.js";
import SingleProject from "@/components/landingPage/projects/single-project";
import { projects } from "@/lib/utils/uiData";

const AllProjects = () => {
  return (
    <section className="py-12" id="projects">
      <LandingPageHeadings heading="projects" />

      <div className="grid gap-y-1">
        {projects?.map((item, _idx) => (
          <SingleProject
            key={_idx}
            order={_idx % 2 === 0 ? "" : "rtl"}
            title={item?.title}
            image={item?.image}
            href={item?.href}
            description={item?.description}
            fiverrhref={item?.fiverrhref}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
