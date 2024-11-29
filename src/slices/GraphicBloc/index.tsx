import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Rect from "@/ui/svg/Rect";
import ReactDark from "@/ui/svg/ReactDark";
import SvgShadowCard from "@/ui/svg/SvgShadowCard";
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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 bg-white dark:bg-bg-primary-dark"
    >
      <GridLayout additional_class="relative bg-bg-primary dark:bg-bg-secondary-dark h-[670px] overflow-hidden rounded-3xl">
        <Rect />
        <ReactDark />
        <div className="flex flex-col gap-[122px] absolute top-28 left-8 w-[476px] max-w-full">
          <div className="flex flex-col gap-6 dark:text-gray-tertiary-dark">
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.text} />
          </div>

          <ButtonPrimary link={slice.primary.button} />
        </div>
        <div className="absolute right-[-7px] bottom-[46px] flex flex-col gap-8 rotate-[-30deg]">
          <div className="slide_cards flex">
            {slice.primary.images.map((item) => (
              <div key={item.image_id} className="relative">
                <PrismicNextImage field={item.image} />
              </div>
            ))}
          </div>
          <div className="slide_cards flex">
            {slice.primary.images_second_slide.map((item) => (
              <div key={item.image_id} className="relative">
                <SvgShadowCard />
                <PrismicNextImage field={item.image} />
              </div>
            ))}
          </div>
        </div>
      </GridLayout>
    </section>
  );
};

export default GraphicBloc;
