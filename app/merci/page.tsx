import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { Calendar, Mail, Monitor, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ta place est réservée · Formation IA pour investisseurs immobiliers · Kalio",
  description:
    "Inscription confirmée à la formation IA pour investisseurs immobiliers, du 10 au 13 août 2026.",
  robots: { index: false, follow: false },
};

export default function Merci() {
  return (
    <>
      {/* Le Purchase est envoyé côté serveur (n8n → Conversions API), seule source
          de vérité pour éviter le double comptage. Cette page ne trace que le PageView. */}
      <header className="nav">
        <div className="nav-inner">
          <a href="/" aria-label="Kalio · Formation IA Immobilier" className="inline-flex items-center">
            <Image
              src="/brand/kalio-logo.png"
              alt="Kalio"
              width={150}
              height={36}
              className="h-9 w-auto"
              priority
            />
          </a>
        </div>
      </header>

      <main>
        <section className="relative pt-[150px] pb-24 sm:pt-[170px] sm:pb-32">
          <div className="wrap-narrow">
            <div className="eyebrow-pill mb-8">
              <span className="eyebrow-badge">Inscription confirmée</span>
              10 au 13 août · 4 midis en direct
            </div>

            <h1 className="h1-display mb-7" style={{ maxWidth: "16ch" }}>
              Ta place est <span className="accent">réservée</span>.
            </h1>

            <p className="text-[19px] leading-[1.55] text-muted mb-12 max-w-[560px]">
              On se voit du 10 au 13 août, de 12 h à 13 h 30, en direct. Les
              rediffusions sont incluses si tu manques un midi.
            </p>

            <div className="card p-8 mb-10">
              <h2 className="text-[17px] font-semibold mb-6">
                Tes trois prochaines étapes
              </h2>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <Mail className="w-5 h-5 mt-[3px] shrink-0 text-kalio-blue" />
                  <div>
                    <strong className="block mb-1">Surveille tes courriels</strong>
                    <span className="text-muted">
                      Ton reçu arrive tout de suite, puis un courriel de
                      confirmation avec le lien de connexion et la checklist de
                      préparation. Rien reçu d&apos;ici demain? Regarde tes
                      indésirables.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Monitor className="w-5 h-5 mt-[3px] shrink-0 text-kalio-blue" />
                  <div>
                    <strong className="block mb-1">Prépare ton poste avant le premier midi</strong>
                    <span className="text-muted">
                      Il te faut un compte Claude Pro, l&apos;application Claude
                      sur ton ordinateur et ton Gmail à portée de main. La
                      checklist détaillée est dans le courriel de confirmation.
                    </span>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Calendar className="w-5 h-5 mt-[3px] shrink-0 text-kalio-blue" />
                  <div>
                    <strong className="block mb-1">Bloque tes midis</strong>
                    <span className="text-muted">
                      Lundi 10 au jeudi 13 août, 12 h à 13 h 30. Quatre rendez-vous,
                      six heures au total.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a href="/" className="btn-secondary">
                Retour au site <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[14.5px] text-muted flex items-center gap-2">
                <Check className="w-4 h-4 text-kalio-blue" />
                Une question? Réponds directement au courriel de confirmation.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
