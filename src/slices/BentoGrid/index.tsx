import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import GridLayout from "@/ui/GridLayout";
import AnimateTitle from "@/ui/AnimateTitle";
import BentoBloc from "@/ui/BentoBloc";

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
        <AnimateTitle>
          <PrismicRichText field={slice.primary.title} />
        </AnimateTitle>
        <div className="bento_grid grid grid-cols-3 grid-rows-2 gap-7">
          {slice.primary.bentobloc.map((item) => (
            <BentoBloc item={item} key={item.id_bloc} />
          ))}
        </div>
      </GridLayout>
    </section>
  );
};

export default BentoGrid;
