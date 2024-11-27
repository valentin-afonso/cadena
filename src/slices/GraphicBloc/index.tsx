import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import GridLayout from "@/ui/GridLayout";
import ButtonPrimary from "@/ui/ButtonPrimary";

/**
 * Props for `GraphicBloc`.
 */
export type GraphicBlocProps = SliceComponentProps<Content.GraphicBlocSlice>;

/**
 * Component for "GraphicBloc" Slices.
 */

const GraphicBloc = ({ slice }: GraphicBlocProps): JSX.Element => {
  console.log(slice.primary.button);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 bg-white"
    >
      <GridLayout additional_class="relative bg-bg-primary h-[670px] overflow-hidden">
        <div className="flex flex-col gap-[122px] absolute top-28 left-8 w-[476px] max-w-full">
          <div className="flex flex-col gap-6">
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.text} />
          </div>

          <ButtonPrimary link={slice.primary.button} />
        </div>
        <div className="absolute right-0 bottom-0 flex flex-col gap-8 rotate-[-30deg]">
          <div className="slide_cards flex">
            {slice.primary.images.map((item) => (
              <PrismicNextImage field={item.image} key={item.image_id} />
            ))}
          </div>
          <div className="slide_cards flex">
            {slice.primary.images_second_slide.map((item) => (
              <PrismicNextImage field={item.image} key={item.image_id} />
            ))}
          </div>
        </div>
      </GridLayout>
    </section>
  );
};

export default GraphicBloc;
