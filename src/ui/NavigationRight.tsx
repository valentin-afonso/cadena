import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import NavigationLink from "@/ui/NavigationLink";
import ToogleDarkMode from "@/ui/ToogleDarkMode";

export default async function NavigationRight() {
  const client = createClient();
  const navigation = await client.getByUID("navigation", "navigation-right");
  return (
    <div className="flex items-center gap-4">
      <ToogleDarkMode />
      <nav>
        <ul className="flex items-center gap-3">
          {navigation.data.slices.map((slice) => (
            <li key={slice.id}>
              <NavigationLink link={slice.primary.link} />
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
    </div>
  );
}
