import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Tag, TagStatus, TagText } from "@/ui/Tag";
import GridLayout from "@/ui/GridLayout";
import SvgAppStore from "@/ui/svg/SvgAppStore";
import SvgPlayStore from "@/ui/svg/SvgPlayStore";
import BlocHeroPrice from "@/ui/BlocHeroPrice";
import BlocHeroVisaTransac from "@/ui/BlocHeroVisaTransac";
import IconCheckedXl from "@/ui/svg/IconCheckedXl";
/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice>;

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice }: HeroSectionProps): JSX.Element => {
  if (!slice.primary.image.alt) {
    slice.primary.image.alt = "default alt";
  }
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-bg-primary dark:bg-bg-primary-dark pb-32 pt-16"
    >
      <GridLayout>
        <div className="flex items-center justify-between">
          <div className="w-[490px] max-w-full flex flex-col gap-6">
            <div className=" flex flex-col gap-4">
              <Tag>
                <TagStatus>{slice.primary.tag_status}</TagStatus>
                <TagText>{slice.primary.tag}</TagText>
              </Tag>
              <PrismicRichText field={slice.primary.custom_title} />
            </div>
            <div className="flex flex-col gap-7 text-xl text-gray-secondary dark:text-gray-secondary-dark">
              <PrismicRichText field={slice.primary.text} />
              <div className="flex gap-4">
                <SvgPlayStore />
                <SvgAppStore />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col items-end gap-[78px]">
              <BlocHeroVisaTransac />
              <PrismicNextImage field={slice.primary.image_spotify} />
            </div>

            <div className="absolute left-0 top-[110px] translate-x-[-59px] w-max">
              <div className="shadow_hero_card">
                <PrismicNextImage field={slice.primary.image_card} />
              </div>
              <IconCheckedXl />
            </div>
            <BlocHeroPrice />
          </div>
        </div>
      </GridLayout>
    </section>
  );
};

export default HeroSection;
