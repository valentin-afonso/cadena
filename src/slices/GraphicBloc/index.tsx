import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import GridLayout from "@/ui/GridLayout";

/**
 * Props for `GraphicBloc`.
 */
export type GraphicBlocProps = SliceComponentProps<Content.GraphicBlocSlice>;

/**
 * Component for "GraphicBloc" Slices.
 */
const GraphicBloc = ({ slice }: GraphicBlocProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GridLayout>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.text} />
        <PrismicNextLink field={slice.primary.button} />
      </GridLayout>
    </section>
  );
};

export default GraphicBloc;
