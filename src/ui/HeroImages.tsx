import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import BlocHeroPrice from "@/ui/BlocHeroPrice";
import BlocHeroVisaTransac from "@/ui/BlocHeroVisaTransac";
import IconCheckedXl from "@/ui/svg/IconCheckedXl";
import Image from "next/image";

export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

export default function HeroImages({ slice }: any) {
  return (
    <div className="relative max-w-[335px] lg:max-w-[400px] xl:max-w-none">
      <div className="flex flex-col items-end gap-[78px]">
        <BlocHeroVisaTransac />
        <div className="floating_spotify">
          <PrismicNextImage field={slice.primary.image_spotify} />
        </div>
      </div>

      <div className="absolute left-0 top-[110px] translate-x-[-59px] w-max floating_card">
        <div className="shadow_hero_card">
          <Image
            src={slice.primary.image_card.url}
            width={slice.primary.image_card.dimensions.width}
            height={slice.primary.image_card.dimensions.height}
            alt={slice.primary.image_card.alt}
            className="max-w-full w-40 lg:w-52 xl:w-[289px]"
          />
        </div>
        <IconCheckedXl />
      </div>
      <BlocHeroPrice />
    </div>
  );
}
