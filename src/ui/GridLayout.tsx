type GridLayoutType = {
  children: React.ReactNode;
  size?: string;
  additional_class?: string;
};

export default function GridLayout({
  children,
  size,
  additional_class,
}: GridLayoutType) {
  return (
    <div className={`w-[1280px] max-w-full m-auto ${additional_class}`}>
      {children}
    </div>
  );
}
