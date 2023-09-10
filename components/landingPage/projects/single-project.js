import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/free-size-image";
import Link from "next/link";
import { appTransitionClasses } from "../../../lib/utils";

const SingleProject = ({
  image = "",
  title = "",
  description = "",
  href = "/",
}) => {
  return (
    <section className="py-12" id="landing-banner">
      <Container>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="grid place-items-center">
            <ImageWithCustomSize
              parentClassName="h-[645px] rounded-md"
              className="rounded-md"
              image={image}
              alt={title}
            />
          </div>
          <div className="grid pt-12">
            <div className="flex flex-col gap-y-2.5 p-4">
              <h1 className="text-2xl md:text-4xl font-medium">{title}</h1>
              {/* <h1 className="text-xl md:text-4xl italic font-serif leading-tight">
                {title}
              </h1> */}
              <p className="text-gray-600">{description}</p>

              <div className="py-6">
                <Link
                  className={`bg-app-theme text-app-light hover:opacity-75 text-lg font-normal max-w-lg rounded-full drop-shadow-sm leading-relaxed py-2 px-4 ${appTransitionClasses}`}
                  href={href}
                >
                  Go to Link
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
