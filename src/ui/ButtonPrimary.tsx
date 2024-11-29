import Link from "next/link";
import ChevronRight from "@/ui/svg/ChevronRight";

export default function ButtonPrimary({ link }: any) {
  return (
    <Link
      href={link.url}
      className="group flex items-center gap-5 bg-dark dark:bg-white dark:text-dark text-white py-4 px-[26px] rounded-full w-max"
    >
      {link.text} <ChevronRight />
    </Link>
  );
}
