import Container from "@/components/primary/container";
import { AppLogo } from "@/components/primary/app-logo";

export const AppHeader = () => {
  return (
    <section className="py-2 w-full h-fit z-20 bg-blue-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
      <Container>
        <div className="flex items-center justify-center">
          <AppLogo className="" />
        </div>
      </Container>
    </section>
  );
};
