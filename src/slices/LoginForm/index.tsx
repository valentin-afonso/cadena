import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import GridLayout from "@/ui/GridLayout";
import LognFormComponent from "@/ui/LognFormComponent";
/**
 * Props for `LoginForm`.
 */
export type LoginFormProps = SliceComponentProps<Content.LoginFormSlice>;

/**
 * Component for "LoginForm" Slices.
 */
const LoginForm = ({ slice }: LoginFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 text-center"
    >
      <GridLayout additional_class="flex flex-col items-center justify-center gap-8">
        <PrismicRichText field={slice.primary.title} />
        <LognFormComponent />
      </GridLayout>
    </section>
  );
};

export default LoginForm;
