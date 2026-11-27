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
  title:
    "NEXORANESIA — Tim IT & Pusat Pengembangan Teknologi Pondok Tholabie | Indonesia's Next Era of Innovation",
  description:
    "NEXORANESIA adalah pusat pengembangan teknologi, robotika, coding, Artificial Intelligence (AI), dan inovasi digital yang dikelola oleh Tim IT Pondok Tholabie. Dokumentasi program pelatihan, riset karya, dan pusat pembelajaran teknologi terbuka.",
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
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-slate-900">
        <PortfolioProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
