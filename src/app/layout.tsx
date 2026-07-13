import type { Metadata } from "next";
import { Caveat, Cinzel, Literata } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TREADURE — Nancy Verma | Quest to Create",
  description:
    "Nancy Verma's treasure-hunt portfolio — AI & ML, remote sensing, projects, and experience mapped as an explorer's quest.",
  openGraph: {
    title: "TREADURE — Nancy Verma",
    description: "Every great journey starts with a quest.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${literata.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-[family-name:var(--font-literata)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
