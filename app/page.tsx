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

const STRIPE_CHECKOUT_URL = "https://link.fastpaydirect.com/payment-link/6a4dc0f6c981f3feae6e7ff5";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ClientStrip />
        <Pain />
        <Retournement />
        <Outcomes />
        <Agenda />
        <Trainer />
        <KalioFuture />
        <Testimonials />
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
              1ère cohorte en ligne · 4 midis en direct
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="h1-display mb-7" style={{ maxWidth: "14ch" }}>
              Récupère <span className="accent">10 heures</span> par semaine sur tes immeubles.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-[19px] leading-[1.55] text-muted mb-10 max-w-[540px]">
              Quatre midis en ligne, de 12 h à 13 h 30, pour structurer tes
              opérations et automatiser concrètement ton admin (annonces,
              courriels, baux, factures, TAL, analyses) avec l&apos;IA,
              appliquée à <strong className="text-ink font-medium">ton</strong>{" "}
              contexte d&apos;investisseur immobilier au Québec. Replay inclus.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-wrap gap-3 items-center mb-12">
              <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="inline-flex items-center gap-2">
                  Réserve ta place
                  <ArrowRight className="size-[14px]" strokeWidth={2.5} />
                </span>
              </a>
              <a href="#programme" className="btn-secondary">
                Voir le programme
                <ArrowRight className="size-[14px]" strokeWidth={2} />
              </a>
            </div>
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

        {/* RIGHT: cartes empilées sans superposition (chat Claude + ticket Simon) */}
        <Reveal delay={3} className="relative hidden lg:flex flex-col gap-6 items-stretch">
          <div className="blob blob-teal" style={{ width: 380, height: 380, top: -60, right: -40 }} />
          <div className="blob blob-blue" style={{ width: 380, height: 380, bottom: -80, left: -60, opacity: 0.3 }} />

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
                  Répond en 8 secondes
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

          {/* Simon email triage card (style phone-card dark) */}
          <div
            className="phone-card phone-card-float-subtle relative ml-auto"
            style={{ width: 320, zIndex: 2 }}
          >
            <div className="flex items-center gap-3 mb-4 relative">
              <div className="phone-icon">
                <Mail className="size-5" />
              </div>
              <div>
                <div className="text-[14px] font-semibold">Tri courriels · auto</div>
                <div className="text-[11.5px] flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  <span className="status-dot teal" />
                  3 traités · 1 escaladé
                </div>
              </div>
            </div>
            <div className="phone-label">Dernier message classé</div>
            <div className="phone-transcript mb-4">
              « Bonjour, je voulais vous signaler une <em>fuite sous l&apos;évier</em> de la cuisine. C&apos;est pas urgent (j&apos;ai mis un bol) mais ça serait bien que quelqu&apos;un passe cette semaine. »
            </div>
            <div className="flex gap-2">
              <div className="phone-action">Maintenance · Non-urgent</div>
              <div className="phone-action primary">Plombier alerté</div>
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
    { icon: <ImageIcon className="size-6" />, title: "Annonces refaites à la main", body: "Même immeuble, même bâtisse. T'écris encore le même texte. Trois fois par année." },
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
              compte plus en heures. Elle se compte en doors achetées.
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
              Pis tu remplis encore tes baux à la mitaine.
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
          factures sont dans trois boîtes courriel et que tes baux dorment sur
          ton bureau, l&apos;agent le plus intelligent du monde ne pourra rien
          ranger. On met de l&apos;ordre dans tes processus, tes documents et
          tes canaux de communication. C&apos;est la fondation sur laquelle tes
          agents vont travailler.
        </>
      ),
      bullets: [
        <>
          Le <strong>portrait clair de tes opérations</strong> : ce qui rentre,
          ce qui sort, qui fait quoi
        </>,
        <>
          Une <strong>structure de documents et de données</strong> prête à
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
          <strong>Maude</strong> et <strong>Simon</strong>, les agents Kalio en
          production, pour que tu voies exactement où s&apos;en va la gestion
          immo locative.
        </>
      ),
      pillars: [
        { icon: <Search />, name: "Prospection automatisée", detail: "Analyser un deal Centris en 3 minutes (MRB, TGA, cashflow, refi)" },
        { icon: <HomeIcon />, name: "Louer mieux avec l'IA", detail: "Annonces, photos optimisées, refresh, prospects qualifiés" },
        { icon: <MessageCircle />, name: "Communication locataires", detail: "Tri de courriels, réponses récurrentes, demandes de maintenance" },
        { icon: <Monitor />, name: "Comptabilité", detail: "Photos de factures triées et rangées dans QuickBooks automatiquement" },
        { icon: <FileText />, name: "Tâches admin et légales", detail: "Baux, hausses TAL, avis, rapports d'inspection" },
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
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   KALIO FUTURE · pattern hero (cartes flottantes Maude + Simon)
   ============================================================ */
function MaudeChatContent() {
  return (
    <>
      <div className="chat-header">
        <div className="chat-avatar">M</div>
        <div>
          <div className="chat-name">Maude · Adjointe location</div>
          <div className="chat-status">
            <span className="status-dot" />
            Active · répond en 12 secondes
          </div>
        </div>
      </div>
      <div className="chat-body">
        <div className="msg msg-in">
          Bonjour ! Est-ce que le 4½ sur St-Denis est encore disponible pour le 1er juillet ?
        </div>
        <div className="msg msg-out">
          Oui, il est disponible ! Quelques questions rapides : combien de personnes occuperont le logement ?
        </div>
        <div className="msg msg-in">Nous sommes 2 adultes, pas d&apos;animaux.</div>
        <div className="msg msg-out">
          Parfait. Je peux vous proposer une visite jeudi 16 h ou samedi 11 h. Lequel vous convient ?
        </div>
      </div>
    </>
  );
}

function SimonPhoneContent() {
  return (
    <>
      <div className="flex items-center gap-3 mb-5 relative">
        <div className="phone-icon">
          <Phone className="size-5" />
        </div>
        <div>
          <div className="text-[14px] font-semibold">Simon · Concierge virtuel</div>
          <div className="text-[11.5px] flex items-center gap-1.5" style={{ color: "rgba(255,255,255,0.55)" }}>
            <span className="status-dot teal" />
            En appel · 00:42
          </div>
        </div>
      </div>
      <div className="phone-label">Transcription en direct</div>
      <div className="phone-transcript mb-4">
        « Bonjour, c&apos;est Marc Tremblay au 4502 Cartier app 3. Mon{" "}
        <em>chauffe-eau fait un drôle de bruit</em> depuis hier. »
      </div>
      <div className="flex gap-2">
        <div className="phone-action">Ticket #1284</div>
        <div className="phone-action primary">Plombier alerté</div>
      </div>
    </>
  );
}

function KalioFuture() {
  const agentNameStyle = {
    fontFamily: "var(--font-display)",
    fontSize: "clamp(56px, 7vw, 92px)",
    fontWeight: 600,
    letterSpacing: "-0.04em",
    lineHeight: 1,
  } as const;

  const maudeFeatures = [
    "Répond en moins de 30 secondes",
    "Préqualifie selon tes critères",
    "Booke dans ton calendrier",
    "Disponible 24/7, jamais en vacances",
  ];
  const simonFeatures = [
    "Prend les appels téléphoniques",
    "SMS et messagerie aussi",
    "Diagnostique avant d'escalader",
    "Crée le ticket maintenance automatiquement",
  ];

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden border-y border-line">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "var(--gradient-warm)" }} />
      <div className="wrap relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="eyebrow-label mb-5 justify-center" style={{ display: "inline-flex" }}>
              La techno qui tourne déjà
            </div>
            <h2 className="h2-display mb-6">
              Ce que <span className="accent">Kalio bâtit</span> pour l&apos;immobilier québécois.
            </h2>
            <p className="text-[17px] text-ink-soft leading-[1.6] max-w-[60ch] mx-auto">
              Tu vas voir Maude et Simon en direct pendant la formation. Tu vois
              où l&apos;IA s&apos;en va dans la gestion immobilière, et tu
              repars avec les briques pour commencer toi-même.
            </p>
          </div>
        </Reveal>

        {/* ROW 1 · MAUDE (text left, chat mockup right) */}
        <Reveal delay={1}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center mb-24 lg:mb-32">
            <div>
              <div className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-kalio-teal mb-5" style={{ fontFamily: "var(--font-mono)" }}>
                <span className="size-1.5 rounded-full bg-kalio-teal" style={{ boxShadow: "0 0 8px rgba(0,229,204,0.6)" }} />
                Agent 01 · Adjointe location
              </div>
              <h3 className="mb-4" style={agentNameStyle}>
                <span className="accent">Maude</span>
              </h3>
              <p className="text-[20px] sm:text-[22px] text-ink font-medium leading-[1.35] mb-7 max-w-[24ch]">
                Qualifie tes prospects de location pendant que tu dors.
              </p>
              <div className="space-y-4 text-[16px] text-ink-soft leading-[1.65] mb-8 max-w-[58ch]">
                <p>Sur Messenger, SMS, courriel. Maude répond aux questions des prospects, vérifie les critères de qualification, et booke les visites dans ton agenda en moins de 30 secondes.</p>
                <p>Tes prospects ne tombent plus entre deux chaises. Ton inbox ne déborde plus le lundi matin. Et tu ne fais plus de visites qui finissent en perte de temps.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8 max-w-[520px]">
                {maudeFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[14.5px] text-ink leading-snug">
                    <Check className="size-4 text-kalio-teal mt-0.5 shrink-0" strokeWidth={2.5} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-line-strong text-[12.5px] text-ink-soft font-medium">
                <span className="size-1.5 rounded-full bg-kalio-teal" style={{ boxShadow: "0 0 6px rgba(0,229,204,0.5)" }} />
                Déjà en production sur des milliers de portes au Québec
              </div>
            </div>

            <div className="relative flex items-center justify-center min-h-[420px]">
              <div className="absolute rounded-full pointer-events-none" style={{ width: 520, height: 520, background: "radial-gradient(circle, rgba(0,229,204,0.22) 0%, transparent 70%)", filter: "blur(70px)" }} />
              <div className="chat-card relative" style={{ width: "100%", maxWidth: 440, boxShadow: "0 24px 60px -12px rgba(10,15,30,0.18), 0 8px 20px -8px rgba(10,15,30,0.1)" }}>
                <MaudeChatContent />
              </div>
            </div>
          </div>

        </Reveal>

        {/* ROW 2 · SIMON (phone mockup left, text right, alternated) */}
        <Reveal delay={2}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            <div className="relative flex items-center justify-center min-h-[420px] order-2 lg:order-1">
              <div className="absolute rounded-full pointer-events-none" style={{ width: 520, height: 520, background: "radial-gradient(circle, rgba(0,119,255,0.22) 0%, transparent 70%)", filter: "blur(70px)" }} />
              <div className="phone-card relative" style={{ width: "100%", maxWidth: 380, boxShadow: "0 24px 60px -12px rgba(10,15,30,0.32), 0 8px 20px -8px rgba(10,15,30,0.18)" }}>
                <SimonPhoneContent />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.22em] font-semibold text-kalio-blue mb-5" style={{ fontFamily: "var(--font-mono)" }}>
                <span className="size-1.5 rounded-full bg-kalio-blue" style={{ boxShadow: "0 0 8px rgba(0,119,255,0.6)" }} />
                Agent 02 · Concierge virtuel
              </div>
              <h3 className="mb-4" style={agentNameStyle}>
                <span className="accent">Simon</span>
              </h3>
              <p className="text-[20px] sm:text-[22px] text-ink font-medium leading-[1.35] mb-7 max-w-[24ch]">
                Prend les appels et SMS de tes locataires, 24/7.
              </p>
              <div className="space-y-4 text-[16px] text-ink-soft leading-[1.65] mb-8 max-w-[58ch]">
                <p>Chauffage qui marche plus, dégât d&apos;eau, question sur le bail. Simon prend l&apos;appel, diagnostique, donne les bons réflexes au locataire, et escalade seulement quand c&apos;est nécessaire.</p>
                <p>Plus de réveils à 3 h du matin pour un chauffe-eau. Plus de fils d&apos;attente où ton locataire perd patience avant que tu répondes.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8 max-w-[520px]">
                {simonFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[14.5px] text-ink leading-snug">
                    <Check className="size-4 text-kalio-blue mt-0.5 shrink-0" strokeWidth={2.5} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-line-strong text-[12.5px] text-ink-soft font-medium">
                <span className="size-1.5 rounded-full bg-kalio-blue" style={{ boxShadow: "0 0 6px rgba(0,119,255,0.5)" }} />
                Réduit drastiquement les appels d&apos;urgence
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-14 text-center text-[16px] text-ink-soft max-w-2xl mx-auto leading-[1.6]">
            Tu ne bâtiras pas Maude ou Simon en quatre midis. Mais tu vas
            comprendre exactement où l&apos;IA va, et tes premières
            automatisations vont déjà rouler avant la fin de la semaine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */
function Testimonials() {
  const testimonials = [
    { name: "Christian Guillemette", quote: "Les explications étaient claires, avec beaucoup d'exemples concrets. Une journée vraiment appréciée." },
    { name: "Sophie Lafrenière", quote: "Une journée super bien montée. Du matin au soir, ça tient debout." },
    { name: "Marie-Claude Hamel", quote: "J'aurais voulu que la journée continue et qu'on aille encore plus loin." },
    { name: "Jean-François Bélanger", quote: "Ça m'a donné une vue globale claire sur où on en est avec l'IA, et ce que je peux faire dès maintenant." },
    // PLACEHOLDER : nouveaux témoignages de la formation en personne (édition du 19 juin), à fournir par Marion
    // { name: "", quote: "" },
  ];
  const stats = [
    { v: "4.6", l: "Note globale / 5" },
    { v: "11/12", l: "Recommandent" },
    { v: "9/12", l: "Veulent une suite" },
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
                Tu n&apos;identifies pas 5 heures par semaine à récupérer ?
                <br />
                Je te rembourse. Cash.
              </h2>
              <p className="mt-6 text-[18px] sm:text-[20px] opacity-90 max-w-2xl mx-auto leading-relaxed font-light">
                Aucune justification compliquée. Tu gardes les replays, la
                bibliothèque de prompts, et ton argent. Le risque est de mon
                bord.
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
    "6 heures de formation en direct, réparties sur 4 midis",
    "Le même contenu et les mêmes agents que la formation en personne",
    "Replay de chaque session, à revoir quand tu veux",
    "Bibliothèque de skills et de prompts prêts à utiliser",
    "Création de tes agents IA, en direct avec le groupe",
    "Structure opérationnelle claire pour tes immeubles",
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
                <p className="text-[14px] text-muted mb-8">
                  1ère cohorte en ligne seulement · taxes en sus · paiement
                  sécurisé
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
            399 $ au lieu de 499 $ pour la première cohorte en ligne. Et si tu
            n&apos;identifies pas 5 h/semaine à récupérer après les 4 midis, je
            te rembourse. Le risque est zéro de ton bord.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <span className="inline-flex items-center gap-2">
                Réserve ta place · 399 $
                <ArrowRight className="size-[14px]" strokeWidth={2.5} />
              </span>
            </a>
            <p className="text-[12.5px] text-muted mt-2">On se voit à l&apos;écran.</p>
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
