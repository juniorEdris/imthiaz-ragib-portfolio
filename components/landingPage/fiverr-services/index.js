import { LandingPageHeadings } from "@/components/primary/app-headings.js";
import Container from "@/components/primary/container";
import ServicesCard from "@/components/primary/services-card";
import { fiverrServices } from "@/lib/utils/uiData";

const FiverrServicesSection = () => {
  return (
    <section className="py-12" id="fiverr-services">
      <Container>
        <LandingPageHeadings heading="Fiverr Services" headingClassName="" />
      </Container>

      <div className="max-w-3xl m-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 py-12">
          {fiverrServices?.map((item, _idx) => (
            <ServicesCard key={_idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FiverrServicesSection;
