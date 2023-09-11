import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/free-size-image";
import Link from "next/link";
import { appTransitionClasses } from "@/lib/utils";

const SingleProject = ({
  image = "",
  title = "",
  description = "",
  href = "/",
  fiverrhref = "https://www.fiverr.com/mohammedweb91",
  order = "rtl",
}) => {
  return (
    <section
      className="py-12 border-b border-b-app-secondary-dark last:!border-b-0"
      id="landing-banner"
    >
      <Container>
        <div className="grid sm:grid-cols-2 gap-3">
          <div
            className={`grid place-items-center order-2 ${
              order === "rtl" ? "md:order-1" : "md:order-2"
            }`}
          >
            <ImageWithCustomSize
              parentClassName="h-[645px] rounded-md"
              className="rounded-md"
              image={image}
              alt={title}
            />
          </div>
          <div
            className={`grid pt-12 order-1 ${
              order === "rtl" ? "md:order-2" : "md:order-1"
            }`}
          >
            <div className="flex flex-col gap-y-2.5 p-4">
              <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
              {/* <h1 className="text-xl md:text-4xl italic font-serif leading-tight">
                {title}
              </h1> */}
              <p className="text-gray-600">{description}</p>

              <div className="py-6 flex flex-wrap gap-3">
                <Link
                  className={`bg-app-theme text-app-light hover:opacity-75 font-fjalla max-w-lg rounded-full drop-shadow-md py-2 px-4 ${appTransitionClasses}`}
                  href={href}
                  target="_blank"
                >
                  Full View
                </Link>
                <Link
                  className={`bg-green-600 text-app-light font-fjalla hover:opacity-75 max-w-lg rounded-full drop-shadow-md py-2 px-4 ${appTransitionClasses}`}
                  href={fiverrhref}
                  target="_blank"
                >
                  Go to Fiverr
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleProject;
