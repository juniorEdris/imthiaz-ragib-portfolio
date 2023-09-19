import Container from "@/components/primary/container";
import { routes } from "@/lib/utils/uiData";
import Link from "next/link";
import { appTransitionClasses } from "@/lib/utils";
// import { AppLogo } from "@/components/primary/app-logo";

export const AppHeader = () => {
  return (
    <section className="py-3 w-full h-fit z-20 fixed top-0 left-0 bg-blue-0 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hidden sm:block">
      <Container>
        <div className="flex items-center justify-center">
          {/* <AppLogo className="" /> */}
          <ul className="flex items-center gap-4 font-fjalla">
            {routes?.map((item, _idx) => (
              <li key={_idx}>
                <Link
                  href={item?.href}
                  className={`text-sm md:text-lg text-app-secondary-dark capitalize hover:text-app-theme ${appTransitionClasses}`}
                >
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
