import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Ahmad Hamdi Azzam | Consultant of Orthopedic Surgery",
  description: "Professional orthopedic care, trauma management, and joint surgery. Affiliated with Kasr Al-Ainy, Cairo University. Clinics located in Giza, 6th of October, and Sheikh Zayed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}