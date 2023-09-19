import { AppHeader } from "@/components/primary/app-header";
import { TWMaterialComponents } from "@/lib/twMaterialAssets";
import "./globals.css";

const getYear = new Date().getFullYear();

export const metadata = {
  title: `Imthiaz Ragib | Fiverr Portfolio - ${getYear}`,
  description:
    "I am a passionate full-stack web application developer with extensive experience in creating MERN applications. I am dedicated to writing clean and efficient code, constantly striving to enhance my skills and incorporate new technologies into my projects. I possess the expertise to assist you with all aspects of your project, ranging from developing responsive frontend code to creating robust APIs. By leveraging my skills, I can effectively contribute to the growth and sustainability of your business and ideas. Let's collaborate and bring your vision to life.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden pb-12">
        <section className="relative max-w-[1480px] m-auto">
          <TWMaterialComponents>
            <AppHeader />
            <section className="overflow-x-hidden sm:pt-7">{children}</section>
          </TWMaterialComponents>
        </section>
      </body>
    </html>
  );
}
