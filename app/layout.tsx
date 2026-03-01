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
      <body className="min-h-screen bg-background text-foreground antialiased">
        <NavBar />
        <main className="pt-32 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
