export default function MainTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="text-4xl font-bold">{children}</div>;
}
