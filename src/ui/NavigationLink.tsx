import Link from "next/link";

export default function NavigationLink({ link }: any) {
  if (link.uid === "sign-up") {
    return (
      <Link
        href={link.url}
        className="bg-dark text-white font-bold rounded-[10px] py-[10px] px-[18px]"
      >
        {link.text}
      </Link>
    );
  }
  return (
    <>
      <Link href={link.url} className="text-gray-tertiary font-medium">
        {link.text}
      </Link>
    </>
  );
}
