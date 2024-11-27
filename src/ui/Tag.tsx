import ArrowRight from "@/ui/svg/ArrowRight";

export function Tag({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center gap-3 py-1 pl-1 pr-[10px] bg-purple-light text-purple font-medium text-sm rounded-full w-max">
      {children}
    </div>
  );
}

export function TagStatus({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white rounded-full py-[2px] px-[10px]">{children}</div>
  );
}

export function TagText({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-center gap-1">
      {children} <ArrowRight />
    </div>
  );
}