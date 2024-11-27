import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Tag, TagStatus, TagText } from "@/ui/Tag";
import GridLayout from "@/ui/GridLayout";
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
      className="bg-bg-primary pb-24"
    >
      <GridLayout>
        <div className="flex items-center">
          <div className="w-[490px] max-w-full flex flex-col gap-6">
            <div className=" flex flex-col gap-4">
              <Tag>
                <TagStatus>{slice.primary.tag_status}</TagStatus>
                <TagText>{slice.primary.tag}</TagText>
              </Tag>
              <PrismicRichText field={slice.primary.custom_title} />
            </div>
            <div className="text-xl text-gray-secondary">
              <PrismicRichText field={slice.primary.text} />
            </div>
          </div>

          <PrismicNextImage field={slice.primary.image} />
        </div>
      </GridLayout>
    </section>
  );
};

export default HeroSection;
