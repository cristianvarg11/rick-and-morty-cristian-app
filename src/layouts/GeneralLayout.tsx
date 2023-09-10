import Navbar from "@/shared/navbar/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <div>{children}</div>
    </>
  );
}
