import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rithik's Portfolio",
  description: "Software engineer based in Hyderabad, India.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
