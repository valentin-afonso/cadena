import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import GridLayout from "@/ui/GridLayout";
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `TrustedBy`.
 */
export type TrustedByProps = SliceComponentProps<Content.TrustedBySlice>;

/**
 * Component for "TrustedBy" Slices.
 */
const TrustedBy = ({ slice }: TrustedByProps): JSX.Element => {
  slice.primary.logo.map((item) => {
    if (!item.image.alt) {
      item.image.alt = "default alt";
    }
  });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-bg-primary py-12"
    >
      <GridLayout additional_class="flex flex-col items-center gap-6">
        <p className="text-sm font-medium text-[#797B89]">
          {slice.primary.text}
        </p>
        <ul className="flex items-center justify-between w-full">
          {slice.primary.logo.map((item) => (
            <li>
              <PrismicNextImage field={item.image} />
            </li>
          ))}
        </ul>
      </GridLayout>
    </section>
  );
};

export default TrustedBy;
