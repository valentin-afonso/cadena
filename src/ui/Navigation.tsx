import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import NavigationLink from "@/ui/NavigationLink";

export default async function Navigation() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "navigation-menu");
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-8">
        {/* Renders top-level links */}
        {navigation.data.slices.map((slice) => (
          <li key={slice.id}>
            <NavigationLink link={slice.primary.link} />
            {/* Renders child links, if present */}
            {slice.items.length > 0 && (
              <ul>
                {slice.items.map((item) => (
                  <li
                    key={JSON.stringify(item)}
                    className="font-medium text-gray-tertiary"
                  >
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
