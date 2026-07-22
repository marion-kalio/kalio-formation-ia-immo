import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Script from "next/script";
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
    "Formation IA pour investisseurs immobiliers · 10 au 13 août 2026, en ligne · Kalio",
  description:
    "4 midis en ligne pour structurer tes opérations et automatiser ta gestion immobilière avec l'IA. Donnée par Marion Verschaeve, fondatrice de Kalio. Replay inclus. Garantie 5h/semaine récupérées ou remboursé.",
  keywords: [
    "IA immobilier",
    "formation IA Québec",
    "Claude immobilier",
    "automatisation gestion immobilière",
    "Kalio",
    "Marion Verschaeve",
    "investisseur immobilier Québec",
    "formation IA en ligne",
  ],
  authors: [{ name: "Marion Verschaeve", url: "https://kalio.ca" }],
  metadataBase: new URL("https://formation.kalio.ca"),
  openGraph: {
    title:
      "Formation IA pour investisseurs immobiliers · 10 au 13 août 2026, en ligne",
    description:
      "Récupère 10h/semaine dans la gestion de tes immeubles grâce à l'IA. 4 midis en ligne. 399 $ au lieu de 499 $ pour la 1ère cohorte. Replay inclus. Garanti remboursé.",
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
    title: "Formation IA pour investisseurs immobiliers · 10 au 13 août, en ligne",
    description:
      "Récupère 10h/semaine grâce à l'IA. 4 midis en ligne. 399 $. Replay inclus. Garanti.",
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
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1589844458973402');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          id="checkout-attribution"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var PAYMENT_URL = 'https://link.fastpaydirect.com/payment-link/6a4dc0f6c981f3feae6e7ff5';
                var KEYS = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term','fbclid'];
                var STORE = 'kalio_attribution';

                // La pub d'origine se perd entre l'atterrissage et la page de paiement (domaine
                // GHL distinct). On la retient au premier chargement et on la rattache au lien
                // de paiement au moment du clic, pour que l'acheteur arrive attribué.
                function capture() {
                  var params = new URLSearchParams(window.location.search);
                  var found = {};
                  var any = false;
                  KEYS.forEach(function (k) {
                    var v = params.get(k);
                    if (v) { found[k] = v; any = true; }
                  });
                  if (any) {
                    try { sessionStorage.setItem(STORE, JSON.stringify(found)); } catch (e) {}
                    return found;
                  }
                  try { return JSON.parse(sessionStorage.getItem(STORE) || '{}'); } catch (e) { return {}; }
                }

                var attribution = capture();

                document.addEventListener('click', function (event) {
                  var link = event.target.closest && event.target.closest('a');
                  if (!link || !link.href) return;
                  if (link.href.indexOf(PAYMENT_URL) !== 0) return;

                  var keys = Object.keys(attribution);
                  if (keys.length) {
                    try {
                      var url = new URL(link.href);
                      keys.forEach(function (k) {
                        if (!url.searchParams.has(k)) url.searchParams.set(k, attribution[k]);
                      });
                      link.href = url.toString();
                    } catch (e) {}
                  }

                  if (typeof window.fbq === 'function') {
                    window.fbq('track', 'InitiateCheckout', { value: 399, currency: 'CAD' });
                  }
                });
              })();
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1589844458973402&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <div className="ambient" aria-hidden="true">
          <div className="ambient-warm" />
          <div className="ambient-grid" />
        </div>
        {children}
      </body>
    </html>
  );
}
