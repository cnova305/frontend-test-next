export default function ParentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="center text-4xl font-bold">Our Speakers</h2>
      <h3 className="center text-center text-2xl">
        Meet our distinguished <br /> speakers
      </h3>

      {children}
    </div>
  );
}
