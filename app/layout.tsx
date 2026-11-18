import "./globals.css";
import type { Metadata } from "next";
import { sail, satoshi } from "./fonts";
import Navbar from "@/src/components/Navbar/Navbar";
import PixelScripts from "./PixelScripts";

export const metadata: Metadata = {
  title: "CargolandFood – Delicious Meals, One Click",
  description:
    "Order delicious meals from top restaurants and get fast delivery with CargolandFood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} ${sail.variable}`}>
      <head>
        <PixelScripts />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
