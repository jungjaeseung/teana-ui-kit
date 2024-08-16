export default function PaddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full h-full overflow-x-auto md:px-9 px-6 py-6">
      {children}
    </div>
  );
}
