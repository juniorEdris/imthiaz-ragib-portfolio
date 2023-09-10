import Container from "@/components/primary/container";
import ImageWithCustomSize from "../../primary/free-size-image";

const LandingPageBio = () => {
  return (
    <section className="py-12" id="#my-bio">
      <Container>
        <div className="grid md:grid-cols-2 gap-2">
          <div className="grid place-content-center">
            <h1 className="text-lg md:text-2xl text-gray-600 mb-1">
              Hi, my name is Imthiaz Ragib
            </h1>

            <h1 className="text-xl md:text-4xl text-app-secondary-dark font-fjalla leading-relaxed">
              A Passionate front-end developer having experience in building web
              applications with JavaScript, Reactjs, Nodejs, and some other cool
              libraries and frameworks with JS.
            </h1>
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
