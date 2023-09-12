import Link from "next/link";
import ImageWithCustomSize from "@/components/primary/free-size-image";
import { appTransitionClasses } from "@/lib/utils";
import { Pointer } from "lucide-react";

const ServicesCard = ({ item }) => {
  return (
    <div className="">
      <Link href={item?.href} target="_blank">
        <div className="relative cursor-pointer group/service-item">
          <div
            className={`w-full h-full absolute top-0 left-0 text-app-light bg-app-dark bg-opacity-20 hidden group-hover/service-item:flex group-hover/service-item:z-20 items-center justify-center ${appTransitionClasses}`}
          >
            <div className="bg-app-light bg-opacity-20 rounded-full p-3">
              <Pointer
                className={`h-6 w-6 text-app-light ${appTransitionClasses} animate-jump-in animate-once animate-ease-linear animate-normal animate-fill-forwards`}
              />
            </div>
          </div>
          <ImageWithCustomSize
            parentClassName="group-hover/service-item:z-10"
            image={item?.image}
            alt={item?.title}
          />
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
