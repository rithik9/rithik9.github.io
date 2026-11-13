import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rithik Kishen Saride",
  description: "Full stack software engineer in Hyderabad, India. React, Node.js, Python.",
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
