import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function FooterCopyright() {
  const client = createClient();
  const footer = await client.getByUID("footer", "footer-main");
  return (
    <p className="dark:text-gray-tertiary-dark flex gap-4 text-xs sm:text-base">
      {footer.data.copyright}
      <PrismicNextLink field={footer.data.link_design} />
    </p>
  );
}
