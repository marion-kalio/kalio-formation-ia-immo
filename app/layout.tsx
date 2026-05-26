import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Formation IA pour investisseurs immobiliers · 19 juin 2026, Brossard · Kalio",
  description:
    "Une journée à Brossard pour automatiser ta gestion immobilière avec l'IA. Donnée par Marion Verschaeve, fondatrice de Kalio. Garantie 5h/semaine récupérées ou remboursé.",
  keywords: [
    "IA immobilier",
    "formation IA Québec",
    "Claude immobilier",
    "automatisation gestion immobilière",
    "Kalio",
    "Marion Verschaeve",
    "investisseur immobilier Québec",
    "formation Brossard",
  ],
  authors: [{ name: "Marion Verschaeve", url: "https://kalio.ca" }],
  metadataBase: new URL("https://formation.kalio.ca"),
  openGraph: {
    title:
      "Formation IA pour investisseurs immobiliers · 19 juin 2026 à Brossard",
    description:
      "Récupère 10h/semaine dans la gestion de tes immeubles grâce à l'IA. Une journée. 500 $. Garanti remboursé.",
    locale: "fr_CA",
    type: "website",
    siteName: "Kalio",
    images: [
      {
        url: "/team/marion.png",
        width: 1200,
        height: 630,
        alt: "Marion Verschaeve, fondatrice de Kalio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation IA pour investisseurs immobiliers · 19 juin à Brossard",
    description:
      "Récupère 10h/semaine grâce à l'IA. Une journée. 500 $. Garanti.",
    images: ["/team/marion.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr-CA"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="antialiased min-h-screen">
        <div className="ambient" aria-hidden="true">
          <div className="ambient-warm" />
          <div className="ambient-grid" />
        </div>
        {children}
      </body>
    </html>
  );
}
