import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import GridLayout from "@/ui/GridLayout";
/**
 * Props for `BentoGrid`.
 */
export type BentoGridProps = SliceComponentProps<Content.BentoGridSlice>;

/**
 * Component for "BentoGrid" Slices.
 */
const BentoGrid = ({ slice }: BentoGridProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GridLayout>
        <PrismicRichText field={slice.primary.title} />
        {slice.primary.bentobloc.map((item) => (
          <div key={item.id_bloc}>
            <PrismicRichText field={item.title} />
            <PrismicRichText field={item.text} />
          </div>
        ))}
      </GridLayout>
    </section>
  );
};

export default BentoGrid;
