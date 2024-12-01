import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Rect from "@/ui/svg/Rect";
import ReactDark from "@/ui/svg/ReactDark";
import SvgShadowCard from "@/ui/svg/SvgShadowCard";
import GridLayout from "@/ui/GridLayout";
import ButtonPrimary from "@/ui/ButtonPrimary";
import AnimateSlideCards from "@/ui/AnimateSlideCards";
import AnimateTitle from "@/ui/AnimateTitle";
import AnimateText from "@/ui/AnimateText";

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
      <GridLayout additional_class="relative bg-bg-primary dark:bg-bg-secondary-dark h-[805px] lg:h-[670px] overflow-hidden rounded-3xl">
        <Rect />
        <ReactDark />
        <div className="absolute right-[-7px] bottom-[46px] flex flex-col gap-8 rotate-[-30deg]">
          <AnimateSlideCards directionStart="0px" directionEnd="-180px">
            {slice.primary.images.map((item) => (
              <div key={item.image_id} className="relative">
                <PrismicNextImage field={item.image} />
              </div>
            ))}
          </AnimateSlideCards>
          <AnimateSlideCards directionStart="0px" directionEnd="180px">
            {slice.primary.images_second_slide.map((item) => (
              <div key={item.image_id} className="relative">
                <SvgShadowCard />
                <PrismicNextImage field={item.image} />
              </div>
            ))}
          </AnimateSlideCards>
        </div>
        <div className="flex flex-col gap-[122px] absolute top-28 left-8 w-[476px] max-w-[300px] md:max-w-full">
          <div className="graphic_bloc_animated flex flex-col gap-6 dark:text-gray-tertiary-dark">
            <AnimateTitle>
              <PrismicRichText field={slice.primary.title} />
            </AnimateTitle>
            <AnimateText>
              <PrismicRichText field={slice.primary.text} />
            </AnimateText>
          </div>

          <ButtonPrimary link={slice.primary.button} />
        </div>
      </GridLayout>
    </section>
  );
};

export default GraphicBloc;
