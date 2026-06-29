import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { LanguageProvider } from "@/i18n/context";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Festival Mbois! — Malang Menyala 2026",
  description:
    "Join the ultimate creative festival in Malang. Music, art, technology, and culture — all in one spectacular event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${onest.variable} h-full font-sans antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-white">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
