import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/ui/tubelight-navbar";

export const metadata: Metadata = {
  title: "Humusway Global Export - Premium Organic Products",
  description: "Leading exporter of Vermi Compost Organic Fertilizer and Turmeric Powder from India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
