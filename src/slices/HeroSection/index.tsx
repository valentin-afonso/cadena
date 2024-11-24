import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
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
    >
      <div className="flex">
        <div>
          {slice.primary.tag_status}
          {slice.primary.tag}

          <PrismicRichText field={slice.primary.custom_title} />
          <PrismicRichText field={slice.primary.text} />
        </div>

        <PrismicNextImage field={slice.primary.image} />
      </div>
    </section>
  );
};

export default HeroSection;
