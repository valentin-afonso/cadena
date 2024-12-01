import { createClient } from "@/prismicio";
import Link from "next/link";
import IconFacebook from "@/ui/svg/IconFacebook";
import IconX from "@/ui/svg/IconX";
import IconLinkedin from "@/ui/svg/IconLinkedin";

export default async function Socials() {
  const client = createClient();
  const footer = await client.getByUID("footer", "footer-main");

  const techIconMap: Record<string, React.ComponentType> = {
    facebook: IconFacebook,
    iconx: IconX,
    linkedin: IconLinkedin,
  };
  return (
    <>
      {footer.data.slices.map((slice) => (
        <ul className="flex gap-5" key={JSON.stringify(slice)}>
          {slice.primary.social.map((item) => {
            const idBloc = item.social_id || "";
            const IconComponent = techIconMap[idBloc];
            return (
              <li key={item.social_id} className="h-[24px]">
                <Link href={`${item.link}`} target="_blank">
                  {IconComponent && <IconComponent />}
                </Link>
              </li>
            );
          })}
        </ul>
      ))}
    </>
  );
}
