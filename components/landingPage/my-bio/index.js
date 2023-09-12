import Container from "@/components/primary/container";
import ImageWithCustomSize from "@/components/primary/free-size-image";
import Link from "next/link";

const LandingPageBio = () => {
  return (
    <section className="py-12" id="#my-bio">
      <Container>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="grid place-content-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-lg md:text-2xl text-gray-600 mb-1">
                Hi, my name is Imthiaz Ragib
              </h1>

              <h1 className="text-xl md:text-4xl text-app-secondary-dark font-fjalla leading-relaxed">
                A Passionate front-end developer having experience in building
                web applications with JavaScript/Typescript, Reactjs, Nodejs,
                and some other cool libraries and frameworks with JS.
              </h1>

              <div className="">
                <Link
                  href={`#about-me`}
                  className="flex justify-center items-center sm:inline-block py-3 px-6 border border-app-secondary-dark text-app-secondary-dark font-nunito font-light hover:opacity-80"
                >
                  Find Out More
                </Link>
              </div>
            </div>
          </div>

          <div className="grid place-content-center">
            <ImageWithCustomSize
              parentClassName="h-60 w-60"
              image="/images/landing-page/bio/my-profile.png"
              alt="bio_me"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingPageBio;
