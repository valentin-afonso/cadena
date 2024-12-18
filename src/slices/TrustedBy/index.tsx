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
      className="bg-bg-primary dark:bg-bg-primary-dark py-12"
    >
      <GridLayout additional_class="flex flex-col items-center gap-6">
        <p className="text-sm font-medium text-[#797B89] dark:text-gray-secondary-dark">
          {slice.primary.text}
        </p>
        <ul className="flex items-center justify-center md:justify-between flex-wrap gap-14 md:gap-0 w-full">
          {slice.primary.logo.map((item) => (
            <li
              key={item.image.id}
              className="hover:brightness-0 dark:hover:brightness-100 dark:opacity-80 dark:hover:opacity-100 transition-all"
            >
              <PrismicNextImage field={item.image} />
            </li>
          ))}
        </ul>
      </GridLayout>
    </section>
  );
};

export default TrustedBy;
