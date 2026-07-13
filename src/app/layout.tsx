import type { Metadata, Viewport } from "next";
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
  title: "Nancy Verma | Portfolio",
  description:
    "Nancy Verma's treasure-hunt portfolio — AI & ML, remote sensing, projects, and experience mapped as an explorer's quest.",
  openGraph: {
    title: "Nancy Verma | Portfolio",
    description: "Every great journey starts with a quest.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nancy Verma | Portfolio",
    description: "Every great journey starts with a quest.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3e6c9" },
    { media: "(prefers-color-scheme: dark)", color: "#1a2233" },
  ],
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('treadure-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
      </head>
      <body className="min-h-full font-[family-name:var(--font-literata)]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
