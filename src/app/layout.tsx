import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/lib/store";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Digital Lab — Daffa Zidan Mahesta | Learning Technology, Creating Possibilities",
  description:
    "Personal Portfolio & Learning Documentation milik Daffa Zidan Mahesta (IT Enthusiast & Digital Creator dari Pondok Tholabie). Dokumentasi perjalanan pelatihan IDN SMSIT, My Projects, Learning Resources, dan Teaching & Learning Hub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${jakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f7fb] text-slate-900">
        <PortfolioProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
