import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";

/**
 * Props for `CustomerBrand`.
 */
export type CustomerBrandProps =
  SliceComponentProps<Content.CustomerBrandSlice>;

/**
 * Component for "CustomerBrand" Slices.
 */

const CustomerBrand = ({ slice }: CustomerBrandProps): JSX.Element => {
  console.log(slice.primary.logo);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    ></section>
  );
};

export default CustomerBrand;
