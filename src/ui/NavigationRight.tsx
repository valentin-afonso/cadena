import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function NavigationRight() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "navigation-right");
  return (
    <nav>
      <ul className="flex items-center gap-3">
        {/* Renders top-level links */}
        {navigation.data.slices.map((slice) => (
          <li key={slice.id}>
            <PrismicNextLink field={slice.primary.link} />
            {/* Renders child links, if present */}
            {slice.items.length > 0 && (
              <ul>
                {slice.items.map((item) => (
                  <li key={JSON.stringify(item)}>
                    <PrismicNextLink field={slice.primary.child_link} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
