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
      className="py-24"
    >
      <GridLayout additional_class="flex flex-col gap-12 text-center">
        <PrismicRichText field={slice.primary.title} />
        <div className="bento_grid grid grid-cols-3 grid-rows-2 gap-7">
          {slice.primary.bentobloc.map((item) => (
            <div
              key={item.id_bloc}
              className="flex flex-col justify-center items-center gap-7 bg-white rounded-3xl text-center px-14 py-10 bento-shadow"
            >
              <PrismicRichText field={item.title} />
              <PrismicRichText field={item.text} />
              <PrismicNextImage field={item.image} />
            </div>
          ))}
        </div>
      </GridLayout>
    </section>
  );
};

export default BentoGrid;
