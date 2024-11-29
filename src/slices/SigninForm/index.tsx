import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import GridLayout from "@/ui/GridLayout";
import SignInForm from "@/ui/SignInForm";
/**
 * Props for `SigninForm`.
 */
export type SigninFormProps = SliceComponentProps<Content.SigninFormSlice>;

/**
 * Component for "SigninForm" Slices.
 */
const SigninForm = ({ slice }: SigninFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 text-center"
    >
      <GridLayout additional_class="flex flex-col items-center justify-center gap-8">
        <PrismicRichText field={slice.primary.title} />
        <SignInForm />
      </GridLayout>
    </section>
  );
};

export default SigninForm;
