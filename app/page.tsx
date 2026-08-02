import Image from "next/image";
import type { ReactNode } from "react";
import {
  Mail,
  FileText,
  Image as ImageIcon,
  BarChart3,
  Clock,
  Calendar,
  Video,
  Users,
  ShieldCheck,
  Bot,
  Building2,
  Receipt,
  Calculator,
  FileCheck,
  ArrowRight,
  ChevronDown,
  Coffee,
  GraduationCap,
  Quote,
  PiggyBank,
  ClipboardList,
  FileSearch,
  Send,
  Wand2,
  Phone,
  Search,
  Sparkles,
  Home as HomeIcon,
  MessageCircle,
  Monitor,
  UserCheck,
  Check,
} from "lucide-react";
import { Reveal } from "./components/Reveal";
import { Countdown } from "./components/Countdown";

const STRIPE_CHECKOUT_URL = "https://link.fastpaydirect.com/payment-link/6a4dc0f6c981f3feae6e7ff5";

// Urgence : le 399 $ expire le vendredi 8 août 23 h 59 (ensuite 499 $, changer
// aussi le lien de paiement GHL à ce moment-là), cohorte affichée à 40 places.
const PRICE_DEADLINE = "vendredi 8 août, 23 h 59";
const PLACES = "40 places";

// VSL du hero : mettre l'URL du mp4 monté (ex. "/video/vsl.mp4") dès le tournage.
// Tant que null, un cadre réservé s'affiche — À REMPLACER OU RETIRER avant la prod.
const VSL_URL: string | null = null;

function HeroVideo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "mb-8" : ""} style={{ width: "100%", maxWidth: compact ? 540 : 380 }}>
      <div
        className="relative rounded-[20px] overflow-hidden border border-line-strong"
        style={{ aspectRatio: "16 / 9", background: "var(--ink)", boxShadow: "0 20px 60px rgba(10,15,30,0.18)" }}
      >
        {VSL_URL ? (
          <video src={VSL_URL} controls playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white" style={{ background: "radial-gradient(ellipse at 70% 20%, rgba(0,229,204,0.25) 0%, transparent 55%), radial-gradient(ellipse at 20% 90%, rgba(0,119,255,0.25) 0%, transparent 55%), var(--ink)" }}>
            <div className="size-14 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-signature)", boxShadow: "0 8px 24px rgba(0,119,255,0.4)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden><path d="M8 5v14l11-7z" /></svg>
            </div>
            <div className="text-[13px] font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
              Vidéo de Marion · 2 min 30
            </div>
          </div>
        )}
      </div>
      <p className="text-[12.5px] text-muted mt-2 text-center">
        2 min 30 pour voir ce que tes immeubles cachent.
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientStrip />
        <Pain />
        <LeCalcul />
        <Retournement />
        <Outcomes />
        <TonEquipe />
        <Agenda />
        <KalioFuture />
        <MidCta text="La formation commence lundi midi." />
        <Trainer />
        <Testimonials />
        <MidCta text="Rejoins-les. Le prix de lancement finit vendredi soir." />
        <Guarantee />
        <Logistics />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

/* ============================================================
   MID CTA · rappel d'achat entre les sections longues
   ============================================================ */
function MidCta({ text }: { text: string }) {
  return (
    <section className="border-y border-line" style={{ background: "var(--paper-warm)" }}>
      <div className="wrap py-8 flex flex-col sm:flex-row items-center justify-center gap-5 text-center sm:text-left">
        <p className="text-[15.5px] text-ink-soft leading-snug max-w-[48ch]">
          <strong className="text-ink font-semibold">{text}</strong>{" "}
          399 $ jusqu&apos;au {PRICE_DEADLINE}, ensuite 499 $ · {PLACES}.
        </p>
        <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
          <span className="inline-flex items-center gap-2">
            Réserve ta place · 399 $
            <ArrowRight className="size-[14px]" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </section>
  );
}

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" aria-label="Kalio · Formation IA Immobilier" className="inline-flex items-center">
          <Image
            src="/brand/kalio-logo.png"
            alt="Kalio"
            width={150}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </a>
        <div className="hidden md:flex items-center gap-7 text-[14.5px] font-medium">
          <a href="#programme" className="text-ink hover:text-kalio-blue transition">Programme</a>
          <a href="#trainer" className="text-ink hover:text-kalio-blue transition">Formatrice</a>
          <a href="#reserver" className="text-ink hover:text-kalio-blue transition">Inscription</a>
        </div>
        <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
          Réserver · 399 $
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="relative pt-[140px] pb-20 sm:pt-[160px] sm:pb-28">
      <div className="wrap grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-20 items-center relative">
        {/* LEFT: copy */}
        <div>
          <Reveal>
            <div className="eyebrow-pill mb-8">
              <span className="eyebrow-badge">10 au 13 août</span>
              1ère cohorte en ligne · {PLACES} · 399 $ jusqu&apos;au 8 août
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="h1-display mb-7" style={{ maxWidth: "15ch" }}>
              Tes immeubles cachent de l&apos;argent.{" "}
              <span className="accent">Ton équipe d&apos;employés IA</span> va le chercher.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-[19px] leading-[1.55] text-muted mb-10 max-w-[540px]">
              Quatre midis en ligne pour bâtir tes 10 employés IA. Ils trouvent
              l&apos;argent qui dort dans ton parc : loyers sous le marché,
              dépenses refacturables, logements que ton zonage permet
              d&apos;ajouter. Pis ils te redonnent tes soirées. Appliqué à{" "}
              <strong className="text-ink font-medium">ton</strong> parc, au
              Québec. Replay inclus.
            </p>
          </Reveal>

          {/* VSL mobile : seule place visuelle du hero sur téléphone */}
          <Reveal delay={2}>
            <div className="lg:hidden">
              <HeroVideo compact />
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-wrap gap-3 items-center mb-12">
              <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="inline-flex items-center gap-2">
                  Réserve ta place · 399 $
                  <ArrowRight className="size-[14px]" strokeWidth={2.5} />
                </span>
              </a>
              <a href="#programme" className="btn-secondary">
                Voir le programme
                <ArrowRight className="size-[14px]" strokeWidth={2} />
              </a>
            </div>
            <p className="text-[13px] text-muted -mt-8 mb-3">
              399 $ jusqu&apos;au {PRICE_DEADLINE}, ensuite 499 $ · Remboursement
              complet garanti après les 4 midis.
            </p>
            <div className="mb-12"><Countdown /></div>
          </Reveal>

          <Reveal delay={4}>
            <div className="flex items-center gap-4 pt-8 border-t border-line">
              <div className="trust-stack">
                <div className="trust-avatar grad-1">CG</div>
                <div className="trust-avatar grad-2">SL</div>
                <div className="trust-avatar grad-3">JF</div>
                <div className="trust-avatar grad-kalio">+</div>
              </div>
              <div className="text-[13.5px] text-muted leading-snug">
                <strong className="text-ink font-semibold">Des investisseurs de partout au Québec</strong>{" "}
                ont vécu la formation en personne.
                <br />
                Note moyenne : <strong className="text-ink font-semibold">4.6 / 5</strong>.
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT: VSL en haut + carte chat Claude (desktop) */}
        <Reveal delay={3} className="relative hidden lg:flex flex-col gap-6 items-stretch">
          <div className="blob blob-teal" style={{ width: 380, height: 380, top: -60, right: -40 }} />
          <div className="blob blob-blue" style={{ width: 380, height: 380, bottom: -80, left: -60, opacity: 0.3 }} />

          {/* VSL — la vidéo de Marion */}
          <div className="relative" style={{ zIndex: 2 }}>
            <HeroVideo />
          </div>

          {/* Claude chat card */}
          <div
            className="chat-card chat-card-float-subtle relative"
            style={{ width: 380, zIndex: 2 }}
          >
            <div className="chat-header">
              <div className="chat-avatar" aria-hidden>C</div>
              <div>
                <div className="chat-name">Claude · ton analyste immo</div>
                <div className="chat-status">
                  <span className="status-dot" />
                  En ligne
                </div>
              </div>
            </div>
            <div className="chat-body">
              <div className="msg msg-in">
                Analyse rapide : triplex Rosemont, 685 000 $, revenus 38 400 $/an, taxes 4 200 $, chauffage inclus pour 2 logements.
              </div>
              <div className="msg msg-out">
                MRB 14.3 · TGA 4.8 % · cashflow +210 $/porte/mois après refi 80 %. Le chauffage inclus tire le rendement, négocie -25k $ ou installe des compteurs séparés.
              </div>
              <div className="msg msg-in">
                Rédige un avis de hausse pour le 3½ du 2e à 825 $.
              </div>
              <div className="typing">
                <span /><span /><span />
              </div>
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   CLIENT STRIP · trust signals horizontal
   ============================================================ */
function ClientStrip() {
  return (
    <section className="border-y border-line">
      <div className="wrap py-7">
        <div className="text-center mb-5 eyebrow-label">
          Une formation Kalio · l&apos;équipe derrière Maude et Simon
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-ink">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-kalio-blue" />
            <span className="text-sm font-medium">Garantie 5 h/sem ou remboursé</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-kalio-blue" />
            <span className="text-sm font-medium">10 au 13 août · 12 h à 13 h 30</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="size-4 text-kalio-blue" />
            <span className="text-sm font-medium">100 % en ligne, en direct</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="size-4 text-kalio-blue" />
            <span className="text-sm font-medium">Replay de chaque session inclus</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAIN · Le constat
   ============================================================ */
function Pain() {
  const pains = [
    { icon: <Mail className="size-6" />, title: "Courriels à 22 h", body: "Locataires, prospects qui ont mal lu l'annonce, demandes de visites. Ta soirée y passe." },
    { icon: <Receipt className="size-6" />, title: "Factures éparpillées", body: "Boîte courriel, photos sur ton cell, pile sur le comptoir. Tu sais que c'est pas un système." },
    { icon: <ImageIcon className="size-6" />, title: "Loyers sous le marché", body: "T'as un feeling que ton 4½ à 780 $ en vaudrait 1 050 $. Mais t'as jamais fait le calcul logement par logement. Ce feeling-là te coûte des dizaines de milliers en valeur d'immeuble." },
    { icon: <BarChart3 className="size-6" />, title: "Analyses dans Excel", body: "Hausses TAL, refinancements, rapports d'inspection. Toujours toi, toujours le soir." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <div className="eyebrow-label mb-4">Le constat</div>
            <h2 className="h2-display mb-5" style={{ maxWidth: "20ch" }}>
              Quatre frictions que tu connais <span className="accent">trop bien.</span>
            </h2>
            <p className="text-[17px] text-ink-soft leading-[1.6] max-w-[60ch]">
              Pendant que tu fais ça à la main, d&apos;autres investisseurs ont
              déjà délégué 80 % de cette job à l&apos;IA. La différence ne se
              compte plus juste en heures. Elle se compte en loyers pas
              optimisés pis en immeubles pas achetés.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pains.map((p, i) => (
            <Reveal key={i} delay={((i + 1) as 1 | 2 | 3 | 4)}>
              <article className="card card-lift h-full">
                <div className="size-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(0,119,255,0.08)", color: "var(--kalio-blue)" }}>
                  {p.icon}
                </div>
                <h3 className="h3-display leading-tight">{p.title}</h3>
                <p className="text-[15.5px] text-ink-soft leading-relaxed mt-3">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LE CALCUL · l'équation argent (l'angle qui vend, mesuré en pub)
   ============================================================ */
function LeCalcul() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "var(--paper-warm)" }}>
      <div className="wrap max-w-5xl">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden" style={{ background: "var(--ink)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 15%, rgba(0,229,204,0.18) 0%, transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(0,119,255,0.15) 0%, transparent 55%)" }} />
            <div className="relative p-10 sm:p-14 text-white">
              <div className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-5" style={{ color: "var(--kalio-teal)" }}>
                Le calcul que personne fait
              </div>
              <h2 className="h2-display text-white mb-6" style={{ maxWidth: "22ch" }}>
                Un loyer sous le marché, c&apos;est pas juste 270 $ par mois.
              </h2>
              <div className="space-y-4 text-[17.5px] leading-[1.65] max-w-[62ch]" style={{ color: "rgba(255,255,255,0.85)" }}>
                <p>
                  Ton 4½ loué 780 $ quand le marché est à 1 050 $, c&apos;est{" "}
                  <strong className="text-white">3 240 $ par année qui dorment</strong>.
                  Pis c&apos;est pas fini : à un TGA de 5,5 %, chaque 10 000 $ de
                  revenus nets que tu ajoutes, c&apos;est environ{" "}
                  <strong style={{ color: "var(--kalio-teal)" }}>181 818 $ de plus sur la valeur de ton immeuble</strong>.
                  Pas dans dix ans. Au prochain refinancement.
                </p>
                <p>
                  Pendant la formation, ton agent Optimisateur scanne ton parc et
                  te sort la liste, logement par logement : loyers sous le
                  marché, dépenses refacturables, espaces que ton zonage te
                  permet d&apos;ajouter.
                </p>
              </div>
              <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8" style={{ background: "var(--gradient-signature)" }}>
                <span className="inline-flex items-center gap-2">
                  Réserve ta place · 399 $
                  <ArrowRight className="size-[14px]" strokeWidth={2.5} />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   TON ÉQUIPE · les 10 employés IA livrés (l'offre, nommée)
   ============================================================ */
function TonEquipe() {
  const postes = [
    { n: "01", nom: "Le Prospecteur", ligne: "Analyse un deal Centris en 3 minutes : MRB, TGA, cashflow, verdict." },
    { n: "02", nom: "L'Optimisateur", ligne: "Repère les loyers sous le marché et les revenus qui dorment dans ton parc." },
    { n: "03", nom: "Le Financement", ligne: "Prépare tes scénarios de refi et tes dossiers pour le banquier." },
    { n: "04", nom: "La Relationniste", ligne: "Rédige tes communications aux investisseurs et partenaires, dans ton ton." },
    { n: "05", nom: "L'Adjointe location", ligne: "Annonces, réponses aux prospects, préparation des visites." },
    { n: "06", nom: "Le Gestionnaire", ligne: "Suivis de maintenance, avis, renouvellements, hausses TAL." },
    { n: "07", nom: "Le Chef réno", ligne: "Compare les soumissions, détecte les red flags, chiffre le ROI." },
    { n: "08", nom: "La Comptable", ligne: "Lit tes factures, les classe, sépare TPS/TVQ, prépare QuickBooks." },
    { n: "09", nom: "L'Adjointe exécutive", ligne: "Ta boîte courriel, tes rappels, tes suivis, ton briefing du matin." },
    { n: "10", nom: "Le Stratège", ligne: "Ta vue d'ensemble : où est l'argent, où est le temps, quoi faire ensuite." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="eyebrow-label mb-4">Tu repars avec ça, installé</div>
            <h2 className="h2-display">
              Tes <span className="accent">10 employés IA</span>. Prêts à coller dans ton Claude.
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {postes.map((p, i) => (
            <Reveal key={i} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <div className="card card-lift h-full" style={{ padding: "1.25rem 1.35rem" }}>
                <div className="text-gradient-signature mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "26px", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {p.n}
                </div>
                <div className="text-[15px] font-semibold text-ink mb-1.5">{p.nom}</div>
                <div className="text-[13px] text-ink-soft leading-[1.5]">{p.ligne}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-center text-[16px] text-ink-soft max-w-3xl mx-auto leading-[1.6]">
            Plus <strong className="text-ink">~90 prompts de niveau investisseur</strong>,{" "}
            <strong className="text-ink">12 Skills</strong> (hausses TAL, avis,
            annonces, factures, deals), le <strong className="text-ink">calculateur Excel</strong>{" "}
            de rentabilité avec projection 5 ans, et le{" "}
            <strong className="text-ink">cas complet d&apos;un 6 logements à Sherbrooke</strong>{" "}
            qu&apos;on décortique ensemble, du deal à la gestion.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   RETOURNEMENT · mode sombre + watermark 2026
   ============================================================ */
function Retournement() {
  return (
    <section
      className="dark-section"
      style={{ paddingTop: 140, paddingBottom: 140, paddingLeft: "clamp(24px, 4vw, 40px)", paddingRight: "clamp(24px, 4vw, 40px)" }}
    >
      <div className="watermark-2026" aria-hidden="true">
        2026
      </div>

      <div
        className="relative mx-auto text-center"
        style={{ maxWidth: 900, zIndex: 2 }}
      >
        <Reveal>
          <div className="dark-eyebrow mb-12">
            <span className="dot" />
            Le retournement
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2
            className="mb-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 9vw, 120px)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "white",
            }}
          >
            On est en <span className="accent">2026.</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <div className="mb-14">
            <p
              style={{
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.45,
                fontWeight: 300,
                color: "rgba(255,255,255,0.85)",
                margin: "12px 0",
              }}
            >
              Pis tes hausses de loyer se calculent encore sur le coin de la table.
            </p>
            <p
              style={{
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.45,
                fontWeight: 300,
                color: "rgba(255,255,255,0.85)",
                margin: "12px 0",
              }}
            >
              Tu réponds aux mêmes questions de locataires que la semaine passée.
            </p>
            <p
              style={{
                fontSize: "clamp(20px, 2.2vw, 26px)",
                lineHeight: 1.45,
                fontWeight: 300,
                color: "rgba(255,255,255,0.85)",
                margin: "12px 0",
              }}
            >
              Tu tries tes factures le dimanche soir.
            </p>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <p
            className="mx-auto mb-14"
            style={{
              maxWidth: 640,
              fontSize: "clamp(17px, 1.6vw, 19px)",
              lineHeight: 1.65,
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            C&apos;est pas que tu travailles pas fort.{" "}
            <strong style={{ color: "white", fontWeight: 600 }}>
              Tu travailles trop fort
            </strong>
            , sur des affaires que l&apos;IA fait en deux minutes. Personne
            t&apos;a juste montré comment.
          </p>
        </Reveal>

        <Reveal delay={4}>
          <div className="dark-divider" />
        </Reveal>

        <Reveal delay={5}>
          <span
            className="inline-block"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "white",
              lineHeight: 1.15,
            }}
          >
            Du <span className="accent">10 au 13 août</span>, on règle ça.
            <br />
            Sur l&apos;heure du midi.
          </span>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   OUTCOMES · liste éditoriale 2 colonnes numérotées
   ============================================================ */
function Outcomes() {
  const outcomes = [
    {
      n: "01",
      title: "Analyser un deal d'immeuble en 3 minutes",
      desc: "MRB, TGA, cashflow par porte, scénario de refi. Tu passes une annonce Centris ou DuProprio à Claude, tu reçois le verdict Go / À creuser / No-Go avant que ton agent te rappelle.",
    },
    {
      n: "02",
      title: "Répondre à 30 courriels de locataires en 5 minutes",
      desc: "Tu colles. Claude rédige 30 brouillons personnalisés dans ton ton. Tu valides en 10 secondes chacun.",
    },
    {
      n: "03",
      title: "Trier et classer toutes tes factures automatiquement",
      desc: "Une photo de facture suffit. Catégorie, fournisseur, immeuble, mois fiscal : tout est rangé sans que tu lèves le petit doigt.",
    },
    {
      n: "04",
      title: "Rédiger une annonce en 2 minutes à partir du bail",
      desc: "Ton bail, tes photos, ton immeuble. Claude écrit l'annonce Centris ou Kijiji prête à publier.",
    },
    {
      n: "05",
      title: "Calculer une hausse TAL automatiquement",
      desc: "Tes données, le taux de l'année. Calcul conforme, montant prêt à communiquer à ton locataire.",
    },
    {
      n: "06",
      title: "Analyser un rapport d'inspection en 10 minutes",
      desc: "Tu reçois le rapport pré-achat. Claude te ressort les red flags, l'impact budgétaire, les questions à poser au vendeur.",
    },
    {
      n: "07",
      title: "Répondre aux questions récurrentes de locataires",
      desc: "Chauffage, stationnement, bruits, animaux. Toujours les mêmes questions. L'IA les traite avant que tu les voies.",
    },
    {
      n: "08",
      title: "Comprendre où vont les agents IA (Maude, Simon, plus)",
      desc: "Démos live des agents Kalio en production. Tu vois exactement à quoi ressemble l'avenir de la gestion immo locative.",
    },
  ];

  const leftItems = outcomes.slice(0, 4);
  const rightItems = outcomes.slice(4, 8);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" style={{ background: "var(--paper-warm)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-warm)", opacity: 0.4 }}
      />
      <div className="wrap relative">
        <Reveal>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-20 items-end mb-14">
            <div>
              <div className="eyebrow-label mb-4">Ce que tu repars avec</div>
              <h2 className="h2-display" style={{ maxWidth: "18ch" }}>
                Dès le premier midi, <span className="accent">tu opères différemment.</span>
              </h2>
            </div>
            <p className="text-[17px] text-ink-soft leading-[1.6] max-w-[52ch]">
              Pas de la théorie. Pas des notes que tu vas oublier. Des
              automatisations dans ton business, qui roulent avant même la fin
              de la semaine.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-x-[60px]">
          <div className="editorial-column">
            {leftItems.map((o, i) => (
              <Reveal key={o.n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`editorial-item ${i === leftItems.length - 1 ? "editorial-item-last" : ""}`}
                >
                  <div className="editorial-number">{o.n}</div>
                  <div>
                    <h3 className="editorial-title">{o.title}</h3>
                    <p className="editorial-desc">{o.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="editorial-column">
            {rightItems.map((o, i) => (
              <Reveal key={o.n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div
                  className={`editorial-item ${i === rightItems.length - 1 ? "editorial-item-last" : ""}`}
                >
                  <div className="editorial-number">{o.n}</div>
                  <div>
                    <h3 className="editorial-title">{o.title}</h3>
                    <p className="editorial-desc">{o.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AGENDA · 4 blocs + pause au milieu + box logistique
   ============================================================ */
type Bloc = {
  n?: string;
  isBreak?: boolean;
  tag: string;
  time: string;
  title: string;
  desc: ReactNode;
  bullets?: ReactNode[];
  pillars?: { icon: ReactNode; name: string; detail: string }[];
};

function Agenda() {
  const blocs: Bloc[] = [
    {
      n: "01",
      tag: "Les bases",
      time: "Lundi 10 août · 12 h à 13 h 30",
      title: "Maîtriser Claude pour ton business immo",
      desc: (
        <>
          Tu démystifies Claude une bonne fois pour toutes. Les{" "}
          <strong>Projets</strong>, les <strong>Skills</strong>,{" "}
          <strong>Claude Cowork</strong>, <strong>Claude Code</strong> : tu
          comprends à quoi ça sert, lequel utiliser pour quoi, et comment leur
          parler pour obtenir ce que tu veux.
        </>
      ),
      bullets: [
        <>
          Ton <strong>premier Projet personnalisé</strong> configuré sur ton
          vrai contexte d&apos;investisseur
        </>,
        <>Les règles d&apos;or pour parler à Claude (sans jamais devenir tech)</>,
      ],
    },
    {
      n: "02",
      tag: "Structure",
      time: "Mardi 11 août · 12 h à 13 h 30",
      title: "La structure opérationnelle d'un investisseur immo",
      desc: (
        <>
          Le midi que personne d&apos;autre n&apos;offre.{" "}
          <strong>L&apos;IA n&apos;automatise pas le chaos</strong> : si tes
          factures sont dans trois boîtes courriel et que tes processus vivent
          dans ta tête, l&apos;agent le plus intelligent du monde ne pourra
          rien ranger. On structure tes opérations et ton architecture
          d&apos;affaires, avec <strong>Monday</strong> comme colonne
          vertébrale, et on regarde concrètement comment{" "}
          <strong>connecter ou extraire tes données</strong> de ton logiciel de
          gestion : Proprio Expert, Plexflow, BuildingStack, UpperBee, Hopem.
          Zéro migration : on se branche sur ce que tu as déjà.
        </>
      ),
      bullets: [
        <>
          Le <strong>portrait clair de tes opérations</strong> : ce qui rentre,
          ce qui sort, qui fait quoi
        </>,
        <>
          Tes données de gestion <strong>sorties de ton PMS</strong> (Proprio
          Expert, Plexflow, BuildingStack, UpperBee, Hopem) et prêtes à
          recevoir l&apos;IA
        </>,
      ],
    },
    {
      n: "03",
      tag: "Construction live",
      time: "Mercredi 12 août · 12 h à 13 h 30",
      title: "On bâtit tes premiers agents ensemble",
      desc: (
        <>
          Les mêmes agents que ceux bâtis en présentiel. Chacun dans son
          Claude, on construit en direct les Skills qui règlent tes irritants,
          et on connecte Claude à tes outils existants,{" "}
          <strong>QuickBooks, Drive, Calendar, courriels</strong>, pour
          qu&apos;il travaille avec tes vraies données.
        </>
      ),
      bullets: [
        <>
          Création live de <strong>tes propres Skills</strong> dans Claude
        </>,
        <>
          Branchement de Claude à tes <strong>outils existants</strong>{" "}
          (QuickBooks, Google Drive, etc.)
        </>,
        <>
          Bibliothèque de <strong>prompts prêts à coller</strong> pour tes cas
          concrets quotidiens
        </>,
      ],
    },
    {
      n: "04",
      tag: "Agents avancés",
      time: "Jeudi 13 août · 12 h à 13 h 30",
      title: "On continue de bâtir, et tu vois où l'IA s'en va",
      desc: (
        <>
          On complète tes agents sur les <strong>six grands pans</strong> de
          ton business d&apos;investisseur, avec des démos en direct sur des
          cas concrets que tu vis chaque semaine. Et on termine avec{" "}
          <strong>Maude, Simon, Olivia et Alice</strong>, les agents Kalio en
          production, pour que tu voies exactement où s&apos;en va la gestion
          immo locative.
        </>
      ),
      pillars: [
        { icon: <Search />, name: "Prospection automatisée", detail: "Analyser un deal Centris en 3 minutes (MRB, TGA, cashflow, refi)" },
        { icon: <HomeIcon />, name: "Louer mieux avec l'IA", detail: "Annonces, photos optimisées, refresh, prospects qualifiés" },
        { icon: <MessageCircle />, name: "Communication locataires", detail: "Tri de courriels, réponses récurrentes, demandes de maintenance" },
        { icon: <Monitor />, name: "Comptabilité", detail: "Factures lues, triées, TPS/TVQ séparées : un sommaire prêt à entrer dans QuickBooks" },
        { icon: <FileText />, name: "Tâches admin et légales", detail: "Hausses TAL calculées et rédigées, avis conformes, renouvellements, rapports d'inspection" },
        { icon: <UserCheck />, name: "Négociation", detail: "Devis fournisseurs, contre-offres vendeurs, comparatifs" },
      ],
      bullets: [
        <>
          Démo live de <strong>Maude et Simon</strong>, les agents Kalio en
          production chez nos clients
        </>,
        <>
          Aperçu de la <strong>prochaine étape</strong> pour automatiser plus
          loin avec des agents qui travaillent 24/7
        </>,
      ],
    },
  ];

  const logistics: { icon: ReactNode; label: string; value: string; sub?: string }[] = [
    { icon: <Calendar className="size-[18px]" />, label: "Dates", value: "Lundi 10 au jeudi 13 août 2026" },
    { icon: <Clock className="size-[18px]" />, label: "Heure", value: "12 h à 13 h 30, chaque midi" },
    { icon: <Monitor className="size-[18px]" />, label: "Format", value: "100 % en ligne, en direct" },
    { icon: <Video className="size-[18px]" />, label: "Replay", value: "Inclus pour chaque session" },
    { icon: <ShieldCheck className="size-[18px]" />, label: "Garantie", value: "5 h/sem ou remboursé" },
    { icon: <Sparkles className="size-[18px]" />, label: "À prévoir", value: "Compte Claude Pro · ~23 CAD/mois", sub: "Annulable à tout moment après la formation" },
  ];

  return (
    <section id="programme" className="py-24 sm:py-32 border-y border-line">
      <div className="wrap">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-20 items-end mb-16">
            <div>
              <div className="eyebrow-label mb-4">Le programme</div>
              <h2 className="h2-display">
                Quatre midis. <span className="accent">Une progression.</span>{" "}
                Tu finis la semaine avec tes agents en place.
              </h2>
            </div>
            <p className="text-[17px] text-ink-soft leading-[1.6] max-w-[56ch]">
              Pas une formation théorique. Le même contenu que la formation en
              personne, appliqué en direct à{" "}
              <strong className="text-ink font-semibold">ton</strong> business
              d&apos;investisseur immobilier au Québec. 1 h 30 par midi, et tu
              appliques entre les sessions.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          {blocs.map((b, i) => {
            const isLast = i === blocs.length - 1;
            return (
              <Reveal key={i} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
                <div className="grid grid-cols-[100px_1fr] lg:grid-cols-[160px_1fr] gap-6 lg:gap-12 items-start">
                  {/* LEFT : number/icon + connector */}
                  <div className="flex flex-col items-center">
                    {b.isBreak ? (
                      <div className="size-16 lg:size-20 rounded-full bg-white border border-line-strong flex items-center justify-center shrink-0">
                        <Coffee className="size-7 lg:size-8 text-kalio-blue" />
                      </div>
                    ) : (
                      <span
                        className="text-gradient-signature select-none"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(56px, 8vw, 96px)",
                          fontWeight: 700,
                          letterSpacing: "-0.04em",
                          lineHeight: 1,
                        }}
                      >
                        {b.n}
                      </span>
                    )}
                    {!isLast && (
                      <div
                        className="mt-4"
                        style={{
                          height: 60,
                          borderLeft: b.isBreak
                            ? "2px dotted var(--line-strong)"
                            : "2px dashed var(--line-strong)",
                          opacity: b.isBreak ? 0.5 : 1,
                        }}
                      />
                    )}
                  </div>

                  {/* RIGHT : card */}
                  <div
                    className={`border border-line rounded-[18px] mb-8 shadow-[0_4px_16px_rgba(10,15,30,0.05)] transition-all duration-300 ${
                      !b.isBreak
                        ? "bg-white hover:border-line-strong hover:shadow-[0_8px_28px_rgba(10,15,30,0.08)]"
                        : ""
                    }`}
                    style={{
                      padding: "2rem",
                      background: b.isBreak ? "rgba(255,255,255,0.55)" : undefined,
                      opacity: b.isBreak ? 0.85 : 1,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span
                        className={
                          b.isBreak ? "eyebrow-badge-soft" : "eyebrow-badge"
                        }
                      >
                        {b.tag}
                      </span>
                      <span
                        className="text-[14px] text-ink-soft font-medium"
                        style={{
                          fontFamily: "var(--font-mono)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {b.time}
                      </span>
                    </div>
                    <h3 className="h3-display leading-tight mb-3">{b.title}</h3>
                    <p className="text-[16px] text-ink-soft leading-[1.6] max-w-[60ch]">
                      {b.desc}
                    </p>

                    {b.pillars && (
                      <div className="pillars-grid">
                        {b.pillars.map((p, pi) => (
                          <div key={pi} className="pillar">
                            <div className="pillar-icon">{p.icon}</div>
                            <div>
                              <div className="pillar-name">{p.name}</div>
                              <div className="pillar-detail">{p.detail}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {b.bullets && (
                      <div className="card-bullets">
                        {b.bullets.map((bullet, bi) => (
                          <div key={bi} className="card-bullet">
                            <Check />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="logistics-box max-w-5xl mx-auto mt-12">
            <div className="logistics-label">Tout ce qu&apos;il te faut savoir</div>
            <div className="logistics-grid">
              {logistics.map((it, i) => (
                <div key={i} className="logistics-item">
                  <div className="logistics-item-icon">{it.icon}</div>
                  <div>
                    <div className="logistics-item-label">{it.label}</div>
                    <div className="logistics-item-value">{it.value}</div>
                    {it.sub && (
                      <div className="text-[11px] text-muted mt-1 leading-snug">{it.sub}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   TRAINER · seul endroit avec photo Marion
   ============================================================ */
function Trainer() {
  const credentials = [
    { icon: <GraduationCap className="size-4" />, label: "HEC Montréal" },
    { icon: <Building2 className="size-4" />, label: "MREX C13" },
    { icon: <Bot className="size-4" />, label: "CEO Kalio" },
    { icon: <Users className="size-4" />, label: "~7 000 portes" },
  ];

  return (
    <section id="trainer" className="py-24 sm:py-32 overflow-hidden">
      <div className="wrap grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[420px]">
            <div className="blob blob-teal" style={{ width: 320, height: 320, top: -40, left: -40 }} />
            <div className="blob blob-blue" style={{ width: 280, height: 280, bottom: -40, right: -30 }} />
            <div className="relative rounded-3xl overflow-hidden border border-line-strong shadow-[0_20px_60px_rgba(10,15,30,0.12),0_8px_20px_rgba(10,15,30,0.08)]">
              <Image
                src="/team/marion.png"
                alt="Marion Verschaeve, fondatrice de Kalio"
                width={520}
                height={650}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <div className="eyebrow-label mb-4">Qui anime</div>
            <h2 className="h2-display mb-3">
              L&apos;IA appliquée, par <span className="accent">quelqu&apos;un qui en vit.</span>
            </h2>
            <p className="text-[20px] text-ink-soft font-light leading-[1.5]">
              Marion Verschaeve. Le pont rare entre l&apos;IA et l&apos;immobilier au Québec.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-8 space-y-4 text-[17px] text-ink-soft leading-[1.6] max-w-[60ch]">
              <p>
                Fondatrice de{" "}
                <a href="https://kalio.ca" target="_blank" rel="noopener noreferrer" className="font-semibold text-gradient-signature">
                  Kalio
                </a>
                , la première plateforme IA québécoise dédiée aux gestionnaires
                immobiliers. On gère environ 7 000 portes au Québec, du
                Saguenay à Montréal.
              </p>
              <p>
                HEC Montréal, MREX C13, propriétaire d&apos;un triplex et
                entrepreneure en IA depuis des années. Je passe mes journées entre
                le code et le terrain immobilier.
              </p>
              <p>
                Je n&apos;enseigne pas l&apos;IA en général. Je t&apos;apprends à
                utiliser l&apos;IA dans{" "}
                <span className="text-ink font-semibold">ton</span> business
                immobilier, au Québec, dans ta langue, avec tes vrais workflows.
              </p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {credentials.map((c, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line-strong bg-white text-sm text-ink">
                  <span className="text-kalio-blue">{c.icon}</span>
                  <span className="text-[12.5px] font-medium">{c.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={3}>
            <figure className="mt-8 border-l-2 border-line-strong pl-5 max-w-[58ch]">
              <blockquote className="text-[16.5px] text-ink leading-[1.6] italic">
                « On garde la même équipe, mais on peut gérer le double, le
                triple de portes. Kalio est clairement un pionnier, et on a une
                bonne pilote en Marion. »
              </blockquote>
              <figcaption className="mt-2 text-[12.5px] tracking-[0.1em] uppercase font-semibold text-ink-soft">
                Philippe Dupuis · VP, Organisation Dupuis · ~800 portes
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   KALIO FUTURE · preuve de crédibilité compacte (4 agents en prod)
   ============================================================ */
function KalioFuture() {
  const agents = [
    { nom: "Maude", role: "Location", desc: "Répond aux prospects 24/7, préqualifie, booke les visites, enquêtes de crédit, baux et onboarding des nouveaux locataires.", teal: true },
    { nom: "Simon", role: "Concierge 24/7", desc: "Prend les appels et SMS des locataires, diagnostique, filtre les vraies urgences, crée les tickets de maintenance.", teal: false },
    { nom: "Olivia", role: "Adjointe exécutive", desc: "Tu lui parles à la voix ou par message : courriels triés, brouillons prêts, suivis et rappels. Rien ne part sans ton OK.", teal: true },
    { nom: "Alice", role: "Comptabilité", desc: "Lit les factures, classe dans la bonne compagnie, écrit dans QuickBooks, repère le refacturable, paie après ton OK.", teal: false },
  ];
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden border-y border-line">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "var(--gradient-warm)" }} />
      <div className="wrap relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow-label mb-4">La techno qui tourne déjà</div>
            <h2 className="h2-display mb-5">
              L&apos;équipe qui te forme fait rouler{" "}
              <span className="accent">ces agents en production</span>, sur des
              milliers de portes au Québec.
            </h2>
            <p className="text-[16.5px] text-ink-soft leading-[1.6] max-w-[62ch] mx-auto">
              Tu les vois en démo live au jour 4. Maude et Simon, c&apos;est des
              années de travail. Ce que tu bâtis en 4 midis, c&apos;est la
              version qui roule pour <strong className="text-ink">toi</strong>{" "}
              dès vendredi. Et tu sauras exactement où ça s&apos;en va.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((a, i) => (
            <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="card card-lift h-full">
                <div className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.18em] font-semibold mb-3" style={{ fontFamily: "var(--font-mono)", color: a.teal ? "var(--kalio-teal)" : "var(--kalio-blue)" }}>
                  <span className="size-1.5 rounded-full" style={{ background: a.teal ? "var(--kalio-teal)" : "var(--kalio-blue)", boxShadow: a.teal ? "0 0 8px rgba(0,229,204,0.6)" : "0 0 8px rgba(0,119,255,0.6)" }} />
                  {a.role}
                </div>
                <div className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 600, letterSpacing: "-0.03em" }}>
                  <span className="accent">{a.nom}</span>
                </div>
                <p className="text-[13.5px] text-ink-soft leading-[1.55]">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
  // ⚠️ CONSENTEMENT : la citation Trottier vient d'un courriel privé (board Monday
  // « Preuve sociale », statut À demander). Obtenir son OK AVANT la mise en ligne.
  const testimonials = [
    { name: "Martin Trottier · investisseur immobilier", quote: "Si je résume en un mot notre rencontre : WOW! Ta vision, ta formation, ton dynamisme connecte parfaitement avec nous et nos besoins." },
    { name: "Jean-François Bélanger", quote: "Ça m'a donné une vue globale claire sur où on en est avec l'IA, et ce que je peux faire dès maintenant." },
    { name: "Marie-Claude Hamel", quote: "J'aurais voulu que la journée continue et qu'on aille encore plus loin." },
    { name: "Christian Guillemette", quote: "Les explications étaient claires, avec beaucoup d'exemples concrets. Une journée vraiment appréciée." },
  ];
  const stats = [
    { v: "4.6", l: "Note globale / 5" },
    { v: "11/12", l: "Recommandent" },
    { v: "9/12", l: "En redemandent" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap">
        <Reveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="eyebrow-label mb-4">Les éditions en personne · 2026</div>
            <h2 className="h2-display">
              <span className="accent">Des investisseurs</span> de partout au Québec ont déjà vécu cette formation.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto mb-14">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-line rounded-2xl text-center min-w-0"
                style={{ padding: "clamp(0.875rem, 3vw, 1.5rem) clamp(0.5rem, 2vw, 1rem)" }}
              >
                <div
                  className="text-gradient-signature"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(26px, 5.5vw, 44px)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.v}
                </div>
                <div className="text-[9px] sm:text-[10.5px] tracking-[0.08em] sm:tracking-[0.18em] uppercase text-muted mt-2 font-medium leading-tight break-words">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="card card-lift flex flex-col h-full">
                <Quote className="size-5 text-kalio-blue mb-3" />
                <p className="text-[17px] text-ink leading-[1.6] flex-1">
                  &laquo;&nbsp;{t.quote}&nbsp;&raquo;
                </p>
                <div className="mt-4 pt-4 border-t border-line">
                  <p className="text-[12px] tracking-[0.12em] uppercase font-semibold text-ink-soft">{t.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GUARANTEE
   ============================================================ */
function Guarantee() {
  return (
    <section className="py-16 sm:py-24">
      <div className="wrap max-w-6xl">
        <Reveal>
          <div className="relative rounded-[2rem] overflow-hidden bg-gradient-signature">
            <div className="absolute inset-0 opacity-25 mix-blend-overlay" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/></svg>\")" }} />
            <div className="relative p-10 sm:p-16 text-center text-white">
              <div className="size-16 mx-auto rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                <ShieldCheck className="size-9" />
              </div>
              <div className="text-[11px] font-semibold tracking-[0.28em] uppercase opacity-90 mb-5">
                Garantie remboursement
              </div>
              <h2 className="h2-display text-white" style={{ lineHeight: 1.08 }}>
                Fais les 4 midis. Si tu n&apos;identifies même pas 5 heures par
                semaine à récupérer,
                <br />
                je te rembourse. Cash.
              </h2>
              <p className="mt-6 text-[18px] sm:text-[20px] opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
                L&apos;objectif qu&apos;on vise ensemble, c&apos;est 10 heures.
                La garantie couvre même la moitié. Aucune justification
                compliquée : tu gardes les replays, la bibliothèque de prompts,
                et ton argent. Le risque est de mon bord.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   LOGISTICS + PRICING
   ============================================================ */
function Logistics() {
  const details: { icon: ReactNode; label: string; sub?: string }[] = [
    { icon: <Calendar className="size-5" />, label: "Lundi 10 au jeudi 13 août 2026" },
    { icon: <Clock className="size-5" />, label: "12 h à 13 h 30 · 4 séances de 1 h 30" },
    { icon: <Monitor className="size-5" />, label: "100 % en ligne, en direct" },
    { icon: <Video className="size-5" />, label: "Replay de chaque session inclus" },
    { icon: <ShieldCheck className="size-5" />, label: "Garantie 5 h/semaine ou remboursé" },
    { icon: <Sparkles className="size-5" />, label: "Compte Claude Pro requis · ~23 CAD/mois", sub: "Annulable à tout moment après la formation" },
  ];

  const includes = [
    "10 Projets Claude prêts à coller : ton équipe d'employés IA au complet (prospecteur, comptable, adjointe, gestionnaire...)",
    "Environ 90 prompts de niveau investisseur, testés sur un vrai cas de 6 logements",
    "12 Skills prêtes à installer : hausses TAL, avis, annonces, factures, analyse de deals",
    "Le calculateur de rentabilité Excel avec projection 5 ans",
    "6 heures en direct sur 4 midis, appliquées à TES immeubles, avec le groupe",
    "Replay de chaque session, à revoir quand tu veux",
  ];

  return (
    <section id="reserver" className="py-24 sm:py-32 scroll-mt-20" style={{ background: "var(--paper-warm)" }}>
      <div className="wrap">
        <Reveal>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="eyebrow-label mb-4">Inscription</div>
            <h2 className="h2-display">
              Tous les détails, <span className="accent">en un coup d&apos;œil.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="card max-w-5xl mx-auto relative overflow-hidden" style={{ borderRadius: "2rem", padding: "2.5rem", borderColor: "var(--line-strong)" }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,229,204,0.18), transparent 70%)", filter: "blur(40px)" }} />

            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 relative">
              <div>
                <div className="eyebrow-label mb-5" style={{ color: "var(--kalio-blue)" }}>Logistique</div>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {details.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="size-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,119,255,0.08)", color: "var(--kalio-blue)" }}>
                        {d.icon}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[16px] text-ink-soft leading-snug block">{d.label}</span>
                        {d.sub && (
                          <span className="text-[12px] text-muted leading-snug block mt-0.5">{d.sub}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="eyebrow-label mb-4" style={{ color: "var(--kalio-blue)" }}>Tu repars avec</div>
                <ul className="space-y-2.5">
                  {includes.map((it, i) => (
                    <li key={i} className="flex items-start gap-3 text-[16px] text-ink-soft leading-[1.6]">
                      <ArrowRight className="size-4 text-kalio-blue mt-0.5 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-[13.5px] italic text-ink-soft leading-[1.55] border-l-2 border-line-strong pl-4">
                  À prévoir en plus : compte Claude Pro (~23 CAD/mois,
                  annulable). On utilise Claude intensivement pendant les 4
                  midis, le plan gratuit n&apos;est pas suffisant. Un courriel
                  d&apos;instructions précises sera envoyé après ton
                  inscription.
                </p>
              </div>

              <div className="text-center lg:text-left lg:border-l lg:border-line lg:pl-12">
                <div className="eyebrow-label mb-5" style={{ color: "var(--kalio-blue)" }}>Investissement</div>
                <div className="flex items-baseline gap-3 justify-center lg:justify-start mb-1">
                  <span className="eyebrow-badge">Prix de lancement</span>
                  <span className="text-muted line-through" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, letterSpacing: "-0.03em" }}>
                    499 $
                  </span>
                </div>
                <div className="text-gradient-signature mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(64px, 8vw, 110px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1 }}>
                  399 $
                </div>
                <p className="text-[14px] text-muted mb-2">
                  Jusqu&apos;au {PRICE_DEADLINE} · ensuite 499 $
                </p>
                <p className="text-[13px] text-muted mb-3">
                  Cohorte limitée à {PLACES} · taxes en sus · paiement sécurisé
                </p>
                <div className="mb-6"><Countdown /></div>
                <p className="text-[13.5px] text-ink-soft mb-8 leading-[1.55]">
                  Un seul loyer remonté de 100 $/mois, c&apos;est 1 200 $ par
                  année. La formation se paie au premier logement optimisé.
                </p>

                <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  <span className="inline-flex items-center gap-2">
                    Réserve ta place
                    <ArrowRight className="size-[14px]" strokeWidth={2.5} />
                  </span>
                </a>

                <div className="mt-5 flex items-center gap-2 justify-center lg:justify-start text-[12.5px] text-muted">
                  <ShieldCheck className="size-3.5 text-kalio-blue" />
                  Remboursement intégral garanti
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQ() {
  const faqs = [
    { q: "1 h 30 par midi, c'est vraiment assez ?", a: "Au total, tu reçois les mêmes 6 heures que la formation en personne. La différence : en 4 sessions courtes, tu as le temps d'appliquer entre les midis et d'arriver le lendemain avec tes vraies questions. C'est le format qui colle le mieux à ce que les participants des éditions en personne nous ont demandé." },
    { q: "Je peux pas être là un des midis. Je manque quoi ?", a: "Rien. Le replay de chaque session est inclus. Tu rattrapes le soir même, à ton rythme, et tu arrives prêt le midi suivant." },
    { q: "Je suis pas tech. Est-ce que je vais comprendre ?", a: "Oui. La formation est conçue pour les non-tech. 80 % des participants des éditions en personne n'avaient jamais ouvert Claude. Si tu sais texter à un humain, tu sais texter à l'IA." },
    { q: "Pourquoi un midi complet sur la structure de mes opérations ?", a: "Parce que l'IA n'automatise pas le chaos. Si tes factures sont éparpillées et que tes processus vivent dans ta tête, l'agent le plus intelligent du monde ne pourra rien ranger. Un midi pour structurer, le reste pour automatiser : c'est ce qui fait que ça tient encore six mois plus tard." },
    { q: "Mes données de locataires et financières, c'est-tu sécuritaire ?", a: "On couvre ça explicitement dans la formation : exactement quoi mettre et quoi NE PAS mettre dans l'IA, et quelles plateformes respectent ta vie privée. Tu repars en sachant exactement comment opérer de manière responsable." },
    { q: "C'est quoi la différence avec la formation en personne ?", a: "Le même contenu, les mêmes agents qu'on bâtit ensemble, la même formatrice. En ligne, tu sauves le déplacement, tu as le replay de chaque session, et tu paies 399 $ au lieu de 499 $ parce que c'est la première cohorte en ligne." },
    { q: "Comment fonctionne la garantie de remboursement ?", a: "Si à la fin des 4 midis tu n'as pas identifié au moins 5 h/semaine à récupérer dans ta gestion, tu me dis et je te rembourse. Sans débat. Le risque est de mon bord." },
    { q: "J'utilise déjà ChatGPT. Pourquoi j'aurais besoin d'une formation ?", a: "Parce que poser des questions à une IA pis faire rouler une équipe d'agents configurés sur TON parc, c'est deux mondes. Tu repars avec 10 Projets Claude déjà bâtis pour l'immobilier québécois, 12 Skills (hausses TAL, avis, annonces, factures) et ~90 prompts de niveau investisseur. Des années d'essais-erreurs que tu sautes en 4 midis. Et on te montre comment migrer ta mémoire ChatGPT vers Claude en une heure." },
    { q: "J'ai 6 portes. Ou j'en ai 400. C'est pour moi ?", a: "Les deux. À 6 portes, tu récupères tes soirées et tu analyses tes prochains deals comme un pro. À 400, chaque agent se multiplie par ton volume : le tri de factures ou le calcul des hausses TAL sur tout ton parc, c'est là que les heures et les dollars deviennent gros. Le contenu s'applique à ton parc à toi, pendant les sessions." },
    { q: "Pourquoi je bâtirais mes agents moi-même au lieu d'engager Kalio ?", a: "Les deux se complètent. Les agents Kalio comme Maude et Simon prennent en charge des opérations complètes, 24/7. La formation, elle, te rend autonome sur tout le reste : analyses de deals, hausses TAL, factures, courriels. Commence par la formation ; si un jour tu veux déléguer plus loin, tu sauras exactement quoi demander." },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="wrap-narrow">
        <Reveal>
          <div className="text-center mb-12">
            <div className="eyebrow-label mb-4">Questions fréquentes</div>
            <h2 className="h2-display">
              Les <span className="accent">vraies questions</span> qu&apos;on nous pose.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={((i % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}>
              <details className="card px-6 py-5 group">
                <summary className="flex items-center justify-between gap-4 text-[16.5px] font-semibold text-ink leading-snug">
                  <span>{f.q}</span>
                  <ChevronDown className="size-5 text-kalio-blue shrink-0 faq-chevron" />
                </summary>
                <p className="mt-4 text-[17px] text-ink-soft leading-[1.6]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA
   ============================================================ */
function FinalCTA() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden" style={{ background: "var(--paper-warm)" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="rounded-full" style={{ width: "min(900px, 90vw)", height: "min(900px, 90vw)", background: "radial-gradient(circle, rgba(0,119,255,0.16), rgba(0,229,204,0.06) 40%, transparent 70%)", filter: "blur(80px)" }} />
      </div>
      <div className="relative wrap-narrow text-center">
        <Reveal>
          <div className="eyebrow-label mb-5">Le rendez-vous</div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="h1-display mx-auto" style={{ maxWidth: "18ch" }}>
            Du <span className="accent">10 au 13 août</span>, en ligne.
            <br />
            Sur l&apos;heure du midi.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 text-[18px] sm:text-[19px] text-ink-soft leading-[1.6] max-w-[52ch] mx-auto">
            399 $ jusqu&apos;au {PRICE_DEADLINE}, ensuite 499 $. Cohorte limitée
            à {PLACES}. Et si tu n&apos;identifies pas 5 h/semaine à récupérer
            après les 4 midis, je te rembourse. Le risque est zéro de ton bord.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-[15px] font-medium text-ink">
              Lundi midi, la première cohorte ouvre son Claude. Avec ou sans toi.
            </p>
            <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span className="inline-flex items-center gap-2">
                Réserve ta place · 399 $
                <ArrowRight className="size-[14px]" strokeWidth={2.5} />
              </span>
            </a>
            <Countdown />
            <p className="text-[12.5px] text-muted mt-1">On se voit à l&apos;écran.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Kalio" className="inline-flex items-center">
            <Image
              src="/brand/kalio-logo.png"
              alt="Kalio"
              width={130}
              height={32}
              className="h-8 w-auto"
            />
          </a>
          <span className="text-[13.5px] text-muted">
            Une formation par Marion Verschaeve
          </span>
        </div>

        <div className="flex items-center gap-6 text-[13px] text-muted">
          <a href="https://kalio.ca" target="_blank" rel="noopener noreferrer" className="hover:text-kalio-blue transition">
            kalio.ca
          </a>
          <a href="mailto:marion@kalio.ca" className="hover:text-kalio-blue transition">
            marion@kalio.ca
          </a>
          <span>© 2026 Kalio</span>
        </div>
      </div>
    </footer>
  );
}
