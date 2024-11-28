import type { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import GridLayout from "@/ui/GridLayout";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";
import styles from "./index.module.css";

const components: JSXMapSerializer = {
  hyperlink: ({ node, children }) => {
    return <PrismicNextLink field={node.data}>{children}</PrismicNextLink>;
  },
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};

/**
 * Props for `RichText`.
 */
type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichText = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <section className={styles.richtext}>
      <GridLayout additional_class="flex flex-col gap-4 py-24">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </GridLayout>
    </section>
  );
};

export default RichText;
