import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Tag, TagStatus, TagText } from "@/ui/Tag";
import GridLayout from "@/ui/GridLayout";
import SvgAppStore from "@/ui/svg/SvgAppStore";
import SvgPlayStore from "@/ui/svg/SvgPlayStore";
import HeroImages from "@/ui/HeroImages";
import AnimateTitle from "@/ui/AnimateTitle";
import AnimateText from "@/ui/AnimateText";

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
        <div className="flex flex-col lg:flex-row gap-[70px] lg:gap-0 items-center justify-between">
          <div className="w-[490px] max-w-full flex flex-col gap-6">
            <div className=" flex flex-col gap-4">
              <Tag>
                <TagStatus>{slice.primary.tag_status}</TagStatus>
                <TagText>{slice.primary.tag}</TagText>
              </Tag>
              <AnimateTitle>
                <PrismicRichText field={slice.primary.custom_title} />
              </AnimateTitle>
            </div>
            <div className="flex flex-col gap-7 text-base md:text-xl text-gray-secondary dark:text-gray-secondary-dark">
              <AnimateText>
                <PrismicRichText field={slice.primary.text} />
              </AnimateText>
              <div className="flex gap-4">
                <SvgPlayStore />
                <SvgAppStore />
              </div>
            </div>
          </div>
          <HeroImages slice={slice} />
        </div>
      </GridLayout>
    </section>
  );
};

export default HeroSection;
