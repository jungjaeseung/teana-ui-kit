export default function NoPaddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" w-full h-full overflow-x-auto">{children}</div>;
}
