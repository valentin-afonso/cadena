import { createClient } from "@/prismicio";

export default async function FooterCopyright() {
  const client = createClient();
  const footer = await client.getByUID("footer", "footer-main");
  return <p>{footer.data.copyright}</p>;
}
