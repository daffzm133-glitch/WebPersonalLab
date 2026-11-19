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
  title: "Daffa STEAM Lab — Catatan, Tutorial & Portofolio Pelatihan 4 Hari",
  description:
    "Website catatan belajar, penyimpanan project, tutorial siap ajar, dan portofolio karya Pelatihan Intensif SMS STEAM (Robotika, 3D Tinkercad, Scratch, Tiny:bit, Micro:bit IoT, Minecraft, WebAR, AI PictoBlox, Roblox, Canva, CapCut, Thunkable).",
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
      <body className="min-h-full flex flex-col bg-[#fafaf7] text-slate-900">
        <PortfolioProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
