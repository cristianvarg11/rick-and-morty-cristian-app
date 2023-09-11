import Navbar from "@/shared/navbar/Navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "1536px", width: "100%", margin: "0 auto" }}>
        <div>{children}</div>
      </div>
    </div>
  );
}
