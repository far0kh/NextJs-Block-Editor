import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Block Editor",
  description: "Block editor in Next.js using BlockNote and UploadThing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
