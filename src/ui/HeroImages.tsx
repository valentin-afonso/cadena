import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import BlocHeroPrice from "@/ui/BlocHeroPrice";
import BlocHeroVisaTransac from "@/ui/BlocHeroVisaTransac";
import IconCheckedXl from "@/ui/svg/IconCheckedXl";

export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

export default function HeroImages({ slice }: any) {
  if (!slice.primary.image.alt) {
    slice.primary.image.alt = "default alt";
  }
  return (
    <div className="relative">
      <div className="flex flex-col items-end gap-[78px]">
        <BlocHeroVisaTransac />
        <div className="floating_spotify">
          <PrismicNextImage field={slice.primary.image_spotify} />
        </div>
      </div>

      <div className="absolute left-0 top-[110px] translate-x-[-59px] w-max floating_card">
        <div className="shadow_hero_card">
          <PrismicNextImage field={slice.primary.image_card} />
        </div>
        <IconCheckedXl />
      </div>
      <BlocHeroPrice />
    </div>
  );
}
