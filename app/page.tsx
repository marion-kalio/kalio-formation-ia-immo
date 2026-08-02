import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  Calculator,
  CalendarClock,
  Check,
  ChevronDown,
  Handshake,
  HardHat,
  Inbox,
  Info,
  KeyRound,
  Landmark,
  MessageSquare,
  PenLine,
  Phone,
  PieChart,
  Plug,
  Receipt,
  Search,
  Settings2,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "./components/Reveal";
import { Countdown } from "./components/Countdown";
import { StickyBar } from "./components/StickyBar";

const STRIPE_CHECKOUT_URL = "https://link.fastpaydirect.com/payment-link/6a4dc0f6c981f3feae6e7ff5";

// Urgence : le 399 $ expire le SAMEDI 8 août 23 h 59 (le 8 août 2026 est un
// samedi — même échéance que le Countdown). Ensuite 499 $ : changer aussi le
// lien de paiement GHL à ce moment-là. Cohorte affichée à 40 places.
const PRICE_DEADLINE = "samedi 8 août 23 h 59";
const PLACES = "40 places";

// VSL du hero : mettre l'URL du mp4 monté (ex. "/video/vsl.mp4") dès le tournage.
// Tant que null, un cadre réservé s'affiche. À REMPLACER OU RETIRER avant la prod.
const VSL_URL: string | null = null;

/* ============================================================
   CTA · le même geste partout : payer
   ============================================================ */
function Cta({
  label = "Réserve ta place · 399 $",
  className = "",
  style,
}: {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <a
      href={STRIPE_CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary ${className}`.trim()}
      style={style}
    >
      <span className="inline-flex items-center justify-center gap-2">
        {label}
        <ArrowRight className="size-[14px]" strokeWidth={2.5} />
      </span>
    </a>
  );
}

/* ============================================================
   HERO VIDEO · la VSL de Marion (cadre réservé tant que VSL_URL est null)
   ============================================================ */
function HeroVideo() {
  return (
    <div style={{ width: "100%" }}>
      <div
        className="relative rounded-[24px] overflow-hidden"
        style={{
          aspectRatio: "16 / 9",
          background: "var(--ink)",
          border: "1px solid var(--line)",
          boxShadow: "0 20px 60px rgba(10,15,30,0.12)",
        }}
      >
        {VSL_URL ? (
          <video
            src={VSL_URL}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          /* Pas de VSL montée : la photo de Marion occupe le cadre. Aucun faux
             lecteur (pas d'icône play ni de durée). La vidéo remplace la photo
             dès que VSL_URL est posée. */
          <Image
            src="/team/marion.png"
            alt="Marion Verschaeve, fondatrice de Kalio"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "50% 22%" }}
            priority
          />
        )}
      </div>
      {VSL_URL && (
        <p className="text-[13.5px] text-muted mt-2.5 text-center">
          2 min 30 pour voir ce que tes immeubles cachent.
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MicroPreuve />
        <LeCalcul />
        <Douleurs />
        <Retournement />
        <TonEquipe />
        <CasSherbrooke />
        <Programme />
        <CredibiliteKalio />
        <BioMarion />
        <Temoignages />
        <Garantie />
        <Prix />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar>
        <div className="flex flex-col min-w-0 leading-tight">
          <span className="text-[12.5px] text-ink-soft">399 $ jusqu&apos;à samedi 23 h 59</span>
          <Countdown prefix="" />
        </div>
        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0"
          style={{ padding: "10px 18px", fontSize: 14 }}
        >
          Réserve ta place
        </a>
      </StickyBar>
    </>
  );
}

/* ============================================================
   0. NAV · logo + une seule sortie : payer
   ============================================================ */
function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <span className="inline-flex items-center" aria-label="Kalio · Formation IA Immobilier">
          <Image
            src="/brand/kalio-logo.png"
            alt="Kalio"
            width={150}
            height={36}
            className="h-7 sm:h-9 w-auto"
            priority
          />
        </span>
        <a href={STRIPE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
          <span className="sm:hidden">Réserver · 399 $</span>
          <span className="hidden sm:inline">Réserve ta place · 399 $</span>
        </a>
      </div>
    </header>
  );
}

/* ============================================================
   1. HERO · le hook argent, match avec la pub
   ============================================================ */
function Hero() {
  return (
    <section id="hero" className="relative pt-[130px] pb-16 sm:pt-[160px] sm:pb-24 overflow-hidden">
      <div className="wrap grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center relative">
        {/* GAUCHE : le texte */}
        <div>
          <Reveal>
            <div className="eyebrow-pill mb-7">
              <span className="eyebrow-badge">Formation en direct</span>
              10 au 13 août · 4 midis en ligne
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="h1-display mb-6" style={{ maxWidth: "16ch" }}>
              Il y a des milliers de dollars qui <span className="accent">dorment</span> dans tes immeubles.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="text-[19px] leading-[1.55] text-muted mb-6 max-w-[540px]">
              En 4 midis, tu bâtis tes{" "}
              <strong className="text-ink font-medium">10 employés IA</strong> dans ton Claude. Ils
              trouvent l&apos;argent : loyers sous le marché, dépenses refacturables, logements permis
              par ton zonage. Et ils te redonnent{" "}
              <strong className="text-ink font-medium">tes soirées</strong>. Replay inclus.
            </p>
          </Reveal>

          {/* Ligne équation : desktop seulement ici (mobile : sous la micro-ligne) */}
          <Reveal delay={2}>
            <p className="hidden lg:block text-[14.5px] text-ink-soft mb-8 max-w-[540px]">
              À un TGA de 5,5 %, chaque 10 000 $ de revenus nets ajoutés vaut environ{" "}
              <strong className="font-semibold">181 818 $</strong> de valeur d&apos;immeuble. La
              formation coûte <strong className="font-semibold">399 $</strong>.
            </p>
          </Reveal>

          {/* VSL mobile : le mobile n'est jamais sans visuel */}
          <Reveal delay={2}>
            <div className="lg:hidden mb-7">
              <HeroVideo />
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col items-stretch sm:items-start gap-3">
              <Cta className="w-full sm:w-auto" />
              <p className="text-[13px] text-muted">
                399 $ jusqu&apos;au {PRICE_DEADLINE}, ensuite 499 $ · {PLACES} · Replay inclus
              </p>
              <p className="lg:hidden text-[14.5px] text-ink-soft max-w-[540px]">
                À un TGA de 5,5 %, chaque 10 000 $ de revenus nets ajoutés vaut environ{" "}
                <strong className="font-semibold">181 818 $</strong> de valeur d&apos;immeuble. La
                formation coûte <strong className="font-semibold">399 $</strong>.
              </p>
            </div>
          </Reveal>
        </div>

        {/* DROITE : la VSL, seul objet visuel du hero (desktop) */}
        <Reveal delay={3} className="relative hidden lg:block">
          <div className="blob blob-teal" style={{ width: 360, height: 360, top: -60, right: -40 }} />
          <div className="blob blob-blue" style={{ width: 360, height: 360, bottom: -80, left: -60, opacity: 0.3 }} />
          <div className="relative" style={{ zIndex: 2 }}>
            <HeroVideo />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   2. BANDEAU MICRO-PREUVE · autorise la lecture de la suite
   ============================================================ */
function ProofRow() {
  const items = [
    { chiffre: "4,6/5", libelle: "" },
    { chiffre: "11/12", libelle: "recommandent" },
    { chiffre: "9/12", libelle: "en redemandent" },
  ];
  return (
    <div className="flex items-center justify-center gap-x-4 sm:gap-x-8 flex-nowrap">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-x-4 sm:gap-x-8">
          {i > 0 && <span className="w-px self-stretch" style={{ background: "var(--line-strong)" }} />}
          <div className="text-center">
            <span className="text-[15px] sm:text-[16px] font-semibold text-ink">{it.chiffre}</span>
            {it.libelle && (
              <>
                {" "}
                <span className="text-[11.5px] sm:text-[13px] text-muted">{it.libelle}</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function MicroPreuve() {
  return (
    <section className="border-y border-line">
      <div className="wrap py-5">
        <div className="flex items-center justify-center gap-x-4 sm:gap-x-8 flex-wrap gap-y-2">
          <div className="text-center">
            <span className="text-[15px] sm:text-[16px] font-semibold text-ink">4,6/5</span>{" "}
            <span className="text-[11.5px] sm:text-[13px] text-muted">cohorte de juin</span>
          </div>
          <span className="hidden sm:block w-px self-stretch" style={{ background: "var(--line-strong)" }} />
          <div className="text-center">
            <span className="text-[15px] sm:text-[16px] font-semibold text-ink">11/12</span>{" "}
            <span className="text-[11.5px] sm:text-[13px] text-muted">recommandent</span>
          </div>
          <span className="hidden sm:block w-px self-stretch" style={{ background: "var(--line-strong)" }} />
          <div className="text-center">
            <span className="text-[11.5px] sm:text-[13px] text-muted">
              <strong className="text-[15px] sm:text-[16px] font-semibold text-ink not-italic">
                Des agents IA
              </strong>{" "}
              sur ~7 000 portes au Québec
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   3. LE CALCUL · le seul moment sombre de la page
   ============================================================ */
function LeCalcul() {
  return (
    <section className="dark-section" style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="watermark-money" aria-hidden="true">
        181 818 $
      </div>
      <div className="wrap-narrow relative text-center px-6" style={{ zIndex: 2 }}>
        <Reveal>
          <div className="dark-eyebrow mb-8">
            <span className="dot" />
            Le calcul que personne fait
          </div>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="h2-display text-white mb-8 mx-auto" style={{ maxWidth: "22ch" }}>
            Un loyer sous le marché, c&apos;est pas juste <span className="accent">270 $</span> par mois.
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="text-[17px] leading-[1.65] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "40rem" }}>
            Prends un 4½ loué 780 $ quand le marché est à 1 050 $. Tu te dis que c&apos;est plate,
            mais que ça se rattrapera. En attendant, c&apos;est 3 240 $ par année qui dorment. Chaque
            année.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="stat-tile mb-10">
            <div className="stat-number stat-number-1">3 240 $</div>
            <div className="stat-label">par année, pour UN seul logement sous le marché</div>
          </div>
        </Reveal>

        <Reveal>
          <div className="dark-divider" />
        </Reveal>

        <Reveal delay={1}>
          <p className="text-[17px] leading-[1.65] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "40rem" }}>
            Là où ça devient sérieux, c&apos;est à la banque. À un TGA de 5,5 %, chaque 10 000 $ de
            revenus nets que tu ajoutes vaut environ 181 818 $ de valeur d&apos;immeuble. Pas dans dix
            ans. Au prochain refinancement.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="stat-tile mb-10">
            <div className="stat-number stat-number-2">+10 000 $</div>
            <div className="stat-label">de revenus nets ajoutés</div>
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="stat-tile mb-12">
            <div className="stat-number stat-number-3">+181 818 $</div>
            <div className="stat-label">de valeur d&apos;immeuble, à un TGA de 5,5 %</div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="text-[17px] leading-[1.65] mx-auto mb-10" style={{ color: "rgba(255,255,255,0.75)", maxWidth: "40rem" }}>
            Pendant la formation, ton Optimisateur scanne ton parc et sort la liste, logement par
            logement : loyers sous le marché, dépenses refacturables, espaces que ton zonage te permet
            d&apos;ajouter. Le calcul que tu viens de lire, tu vas le faire sur TES immeubles.
          </p>
        </Reveal>

        {/* MidCta 1 */}
        <Reveal delay={2}>
          <div className="flex flex-col items-center gap-3">
            <Cta className="btn-primary-on-dark" />
            <p className="text-[13.5px]" style={{ color: "rgba(255,255,255,0.6)" }}>
              La formation commence lundi midi. 399 $ jusqu&apos;à samedi 23 h 59.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   4. DOULEURS · les mots exacts de l'audience
   ============================================================ */
function Douleurs() {
  return (
    <section className="relative" style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap">
        <Reveal>
          <div className="max-w-3xl mb-12">
            <div className="eyebrow-label mb-4">
              Si t&apos;es gestionnaire ou proprio au Québec, tu connais déjà tout ça
            </div>
            <h2 className="h2-display" style={{ maxWidth: "20ch" }}>
              Pendant ce temps-là, tu gères des <span className="accent">niaiseries</span>.
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* Carte 1 · l'argent (constat, pas une citation) */}
          <Reveal delay={1}>
            <article className="card card-lift h-full" style={{ padding: "clamp(1.1rem, 4vw, 1.75rem)" }}>
              <div className="pillar-icon mb-4">
                <TrendingDown strokeWidth={1.8} />
              </div>
              <h3 className="text-[16px] font-semibold text-ink mb-2">L&apos;argent jamais calculé</h3>
              <p className="text-[14.5px] text-muted leading-[1.6]">
                Tu le sais qu&apos;il y a des loyers en dessous du marché dans ton parc. Mais tu
                l&apos;as jamais calculé logement par logement. Et chaque mois qui passe, c&apos;est de
                la valeur que la banque verra jamais.
              </p>
            </article>
          </Reveal>

          {/* Carte 2 · urgences */}
          <Reveal delay={2}>
            <article className="card card-lift h-full" style={{ padding: "clamp(1.1rem, 4vw, 1.75rem)" }}>
              <span className="accent block leading-none mb-2" style={{ fontSize: 28 }} aria-hidden>
                «
              </span>
              <h3 className="text-[16px] font-semibold text-ink mb-2">Les urgences qui n&apos;en sont pas</h3>
              <p className="text-[17px] text-ink leading-[1.5] italic" style={{ fontFamily: "var(--font-serif-stack)" }}>
                « J&apos;ai eu un appel dimanche pour une corde à linge. »
                <br />
                « Je passe mes fins de semaine à checker si c&apos;est une urgence. »
              </p>
              <p className="text-[14.5px] text-muted leading-[1.6] mt-3">
                90 % des appels d&apos;urgence ne sont pas urgents. Mais c&apos;est toi qui les tries.
              </p>
            </article>
          </Reveal>

          {/* Carte 3 · logiciels (nommer le problème, jamais un PMS) */}
          <Reveal delay={3}>
            <article className="card card-lift h-full" style={{ padding: "clamp(1.1rem, 4vw, 1.75rem)" }}>
              <span className="accent block leading-none mb-2" style={{ fontSize: 28 }} aria-hidden>
                «
              </span>
              <h3 className="text-[16px] font-semibold text-ink mb-2">Encore un autre logiciel</h3>
              <p className="text-[17px] text-ink leading-[1.5] italic" style={{ fontFamily: "var(--font-serif-stack)" }}>
                « Je suis écœuré d&apos;apprendre des nouveaux softwares. »
              </p>
              <p className="text-[14.5px] text-muted leading-[1.6] mt-3">
                T&apos;as déjà ton logiciel de gestion, tes fichiers, tes courriels. Le problème,
                c&apos;est pas tes outils. C&apos;est que rien se parle, et que tout passe par toi.
              </p>
            </article>
          </Reveal>

          {/* Carte 4 · débordement */}
          <Reveal delay={4}>
            <article className="card card-lift h-full" style={{ padding: "clamp(1.1rem, 4vw, 1.75rem)" }}>
              <span className="accent block leading-none mb-2" style={{ fontSize: 28 }} aria-hidden>
                «
              </span>
              <h3 className="text-[16px] font-semibold text-ink mb-2">Le débordement</h3>
              <p className="text-[17px] text-ink leading-[1.5] italic" style={{ fontFamily: "var(--font-serif-stack)" }}>
                « Et tu dors quand? Quand mes enfants veulent. »
                <br />
                « 900 réponses en trois jours pour un logement. »
                <br />
                « On est débordés, là, mais on survit, là. »
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <p className="text-center text-[19px] font-medium text-ink mx-auto mt-12" style={{ maxWidth: "34rem" }}>
            La différence se compte pas juste en heures. Elle se compte en loyers pas optimisés pis en
            immeubles pas achetés.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   5. LE RETOURNEMENT / MÉCANISME · zéro migration, tu décides
   ============================================================ */
function Retournement() {
  const points = [
    {
      icon: <Plug strokeWidth={1.8} />,
      titre: "Zéro migration",
      corps: (
        <>
          Que tu sois sur <strong className="text-ink font-medium">Proprio Expert</strong>,{" "}
          <strong className="text-ink font-medium">Plexflow</strong>,{" "}
          <strong className="text-ink font-medium">BuildingStack</strong>,{" "}
          <strong className="text-ink font-medium">UpperBee</strong> ou{" "}
          <strong className="text-ink font-medium">Hopem</strong>, on n&apos;y touche pas. On extrait
          ou on connecte tes données, et ton équipe IA travaille avec. Tu changes rien à ce qui
          marche.
        </>
      ),
    },
    {
      icon: <PenLine strokeWidth={1.8} />,
      titre: "L'IA prépare, tu décides",
      corps: (
        <>
          Tes employés IA rédigent, calculent, trient, préparent. Rien ne part sans toi : les
          brouillons ne s&apos;envoient jamais seuls. Toi, tu approuves. C&apos;est ta signature, pas
          la leur.
        </>
      ),
    },
    {
      icon: <Settings2 strokeWidth={1.8} />,
      titre: "Configurés sur TON parc",
      corps: (
        <>
          Pas des templates génériques. Pendant les sessions, chaque employé apprend tes immeubles,
          tes critères, ta façon de travailler. En 15 minutes, Claude connaît ton parc.
        </>
      ),
    },
  ];
  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow-label mb-4">Le retournement</div>
            <h2 className="h2-display mb-6">
              Et si t&apos;avais une équipe qui fait ça pour toi, dans <span className="accent">ton</span>{" "}
              Claude, branchée sur <span className="accent">tes</span> données?
            </h2>
            <p className="text-[19px] text-muted leading-[1.55] max-w-[560px] mx-auto">
              Pas un autre logiciel à apprendre. Pas une plateforme de plus. Une équipe de 10 employés
              IA que tu bâtis en 4 midis, et qui travaille avec ce que t&apos;as déjà.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-4 mb-12">
          {points.map((p, i) => (
            <Reveal key={i} delay={((i + 1) as 1 | 2 | 3)}>
              <article className="card card-lift h-full" style={{ padding: "clamp(1.1rem, 4vw, 1.75rem)" }}>
                <div className="pillar-icon mb-4">{p.icon}</div>
                <h3 className="text-[18px] font-semibold text-ink mb-2" style={{ fontFamily: "var(--font-display-stack)", letterSpacing: "-0.01em" }}>
                  {p.titre}
                </h3>
                <p className="text-[14.5px] text-ink-soft leading-[1.6]">{p.corps}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="text-center">
            <p className="text-[15px] text-muted italic" style={{ fontFamily: "var(--font-serif-stack)" }}>
              Et cette équipe-là, la voici, poste par poste.
            </p>
            <ArrowDown className="size-4 text-muted mx-auto mt-3" strokeWidth={1.8} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   6. TON ÉQUIPE · les 10 employés IA (l'offre écrasante)
   ============================================================ */
function TonEquipe() {
  const postes = [
    { n: "01", icon: <Search strokeWidth={1.8} />, nom: "Le Prospecteur", ligne: "Analyse un deal Centris en 3 minutes : verdict GO, À CREUSER ou NON, avec prix d'offre." },
    { n: "02", icon: <TrendingUp strokeWidth={1.8} />, nom: "L'Optimisateur", ligne: "Scanne ton parc : loyers sous le marché, rénos payantes, logements permis par le zonage, subventions." },
    { n: "03", icon: <Landmark strokeWidth={1.8} />, nom: "Le Directeur financement", ligne: "Conventionnel vs SCHL MLI Select, capacité d'emprunt, dossier courtier, pénalités IRD décodées." },
    { n: "04", icon: <Handshake strokeWidth={1.8} />, nom: "Le Relationniste investisseurs", ligne: "Pitch deck québécois, offres de partenariat, messages personnalisés pour chaque investisseur." },
    { n: "05", icon: <KeyRound strokeWidth={1.8} />, nom: "L'Adjointe de location", ligne: "Loyer au marché, annonces, pré-qualification non discriminatoire, avis de hausse calculés et rédigés." },
    { n: "06", icon: <Building2 strokeWidth={1.8} />, nom: "Le Gestionnaire d'immeuble", ligne: "Réponses appuyées sur le C.c.Q., avis conformes, renouvellements, rappels de loyer." },
    { n: "07", icon: <HardHat strokeWidth={1.8} />, nom: "Le Chef de rénovation", ligne: "Scope et budget à partir de photos. Red flags détectés : pas de RBQ, acompte excessif." },
    { n: "08", icon: <Receipt strokeWidth={1.8} />, nom: "La Technicienne comptable", ligne: "Trie tes factures, sépare TPS 5 % / TVQ 9,975 %, sommaire prêt à entrer dans QuickBooks." },
    { n: "09", icon: <Inbox strokeWidth={1.8} />, nom: "L'Adjointe exécutive", ligne: "Trie ton Gmail, prépare tes brouillons dans ton ton, briefing du matin en 1 minute." },
    { n: "10", icon: <PieChart strokeWidth={1.8} />, nom: "Le Stratège de portefeuille", ligne: "Équité, cashflow par porte, garder, refinancer ou vendre, choc de taux anticipé 2 ans d'avance." },
  ];
  const stack = [
    "~90 prompts de niveau investisseur avancé, chacun étiqueté avec l'outil optimal et son garde-fou",
    "12 Skills prêtes à installer : analyse de deal, due diligence, avis de hausse TAL, scope de réno QC...",
    "Le calculateur Excel de rentabilité : MRB, TGA, DSCR, valeur économique, projection 5 ans",
    "Le guide de migration ChatGPT vers Claude : 3 ans de mémoires transférées en environ 1 heure",
    "L'atelier « en 15 minutes, Claude connaît ton parc, tes critères, ta façon de travailler »",
  ];
  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow-pill mb-6">
              <span className="eyebrow-badge">Installé</span>
              Tu repars avec ça
            </div>
            <h2 className="h2-display mb-5">
              Tes <span className="accent">10 employés IA</span>, prêts à coller dans ton Claude.
            </h2>
            <p className="text-[17px] text-ink-soft leading-[1.6] max-w-[54ch] mx-auto">
              Chacun est un Projet Claude complet. Tu le colles, il travaille. En voici la job, poste
              par poste.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {postes.map((p, i) => (
            <Reveal key={p.n} delay={(((i % 5) + 1) as 1 | 2 | 3 | 4 | 5)}>
              <div className="card card-lift h-full min-w-0" style={{ padding: "clamp(0.875rem, 3vw, 1.25rem)" }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="pillar-icon">{p.icon}</div>
                  <span className="text-[11px] text-muted" style={{ fontFamily: "var(--font-mono-stack)" }}>
                    {p.n}
                  </span>
                </div>
                <div className="text-[14px] font-semibold text-ink mb-1.5 break-words">{p.nom}</div>
                <div className="text-[12.5px] text-muted break-words" style={{ lineHeight: 1.4 }}>
                  {p.ligne}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1}>
          <div className="logistics-box mt-10">
            <div className="logistics-label">Avec, en plus</div>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {stack.map((s, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 mt-0.5" strokeWidth={2.2} style={{ color: "var(--kalio-teal)" }} />
                  <span className="text-[14.5px] text-ink-soft leading-[1.55]">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* MidCta 2 */}
        <Reveal delay={2}>
          <div className="flex flex-col items-center gap-3 mt-12">
            <Cta />
            <p className="text-[13.5px] text-muted">
              La formation commence lundi midi. 399 $ jusqu&apos;à samedi 23 h 59.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   7. LE CAS SHERBROOKE · la preuve bout en bout (carte accent)
   ============================================================ */
function CasSherbrooke() {
  const chiffres = [
    { v: "649 000 $", l: "prix d'achat" },
    { v: "6 → 8", l: "logements, permis par le zonage" },
    { v: "21 portes", l: "le mini-portefeuille du Stratège" },
  ];
  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap-narrow px-6">
        <Reveal>
          <div className="card-accent">
            <span className="eyebrow-badge-soft mb-5 inline-flex">La preuve, bout en bout</span>
            <h2 className="text-ink mb-5" style={{ fontFamily: "var(--font-display-stack)", fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              On prend un immeuble ordinaire. Et on le rend rentable devant toi.
            </h2>
            <div className="space-y-4 text-[16px] text-ink-soft leading-[1.6]">
              <p>
                Le fil rouge de la formation : un 6 logements réaliste à Sherbrooke. 649 000 $, des
                loyers de 4 990 $ par mois, et un cashflow négatif au départ. On l&apos;a choisi
                négatif exprès : c&apos;est là que ça devient intéressant.
              </p>
              <p>
                Les 10 employés le passent au travers, un par un : le zonage permet 8 logements, le
                registre des baux est décortiqué, les vraies factures sont triées, les 3 soumissions de
                réno sont comparées. Et le Stratège termine avec un mini-portefeuille de 4 immeubles et
                21 portes.
              </p>
            </div>

            <div className="flex justify-between gap-3 my-7">
              {chiffres.map((c, i) => (
                <div key={i} className="min-w-0 text-center sm:text-left">
                  <div className="text-gradient-signature" style={{ fontFamily: "var(--font-display-stack)", fontSize: "clamp(20px, 4.5vw, 28px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                    {c.v}
                  </div>
                  <div className="text-[11px] sm:text-[12px] uppercase text-muted mt-1.5 break-words" style={{ fontFamily: "var(--font-mono-stack)", letterSpacing: "0.08em" }}>
                    {c.l}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[16px] font-medium text-ink">
              Ensuite, tu refais exactement le même exercice. Sur ton propre parc.
            </p>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <p className="text-[12.5px] text-muted mt-4 text-center">
            Le cas Sherbrooke est un dossier pédagogique construit pour la formation, pas un résultat
            client.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   8. LE PROGRAMME · 4 midis, engagement léger et crédible
   ============================================================ */
function Programme() {
  const midis: {
    badge: string;
    titre: string;
    phrase: string;
    bullets: string[];
    accent: boolean;
  }[] = [
    {
      badge: "Midi 1 · Lun 10",
      titre: "Les bases",
      phrase: "Tu pars de zéro ou presque? Parfait, c'est prévu de même.",
      bullets: [
        "Maîtriser Claude pour l'immobilier : Projets, Skills, Cowork, Chrome, Excel, Word",
        "Ton premier Projet personnalisé, monté sur TON contexte",
        "À la fin du midi, t'as déjà un employé IA qui travaille",
      ],
      accent: false,
    },
    {
      badge: "Midi 2 · Mar 11",
      titre: "Structure",
      phrase: "L'IA n'automatise pas le chaos. Le midi qui change ta façon d'opérer.",
      bullets: [
        "Structurer tes opérations et ton architecture d'affaires, avec Monday comme colonne vertébrale",
        "Connecter ou extraire tes données : Proprio Expert, Plexflow, BuildingStack, UpperBee, Hopem",
        "Zéro migration : on se branche sur ce que t'as déjà",
      ],
      accent: true,
    },
    {
      badge: "Midi 3 · Mer 12",
      titre: "Construction live",
      phrase: "On bâtit les agents ensemble, chacun dans son Claude.",
      bullets: [
        "Tes employés IA montés en direct, sur tes données",
        "Connexion à tes outils : QuickBooks, Drive, Calendar, courriels",
        "Tu repars avec une équipe qui roule, pas avec des notes",
      ],
      accent: false,
    },
    {
      badge: "Midi 4 · Jeu 13",
      titre: "Agents avancés",
      phrase: "On complète l'équipe et on regarde ce que ça donne à grande échelle.",
      bullets: [
        "Prospection, location, communication locataires, comptabilité, admin et légal, négociation",
        "Démo live des agents Kalio en production : Maude, Simon, Olivia, Alice",
        "Sécurité, vie privée et Loi 25 : quoi mettre, et surtout quoi NE PAS mettre dans l'IA",
      ],
      accent: true,
    },
  ];
  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow-label mb-4">4 midis, 12 h à 13 h 30, en direct</div>
            <h2 className="h2-display mb-5">90 minutes par jour. Le reste de ta semaine reste à toi.</h2>
            <p className="text-[17px] text-ink-soft leading-[1.6]">
              Du lundi 10 au jeudi 13 août, en ligne. Replay de chaque session inclus.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {midis.map((m, i) => (
            <Reveal key={i} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <article className={`${m.accent ? "card-accent" : "card"} card-lift h-full`}>
                <span className="eyebrow-badge-soft mb-4 inline-flex">{m.badge}</span>
                <h3 className="h3-display leading-tight mb-2">{m.titre}</h3>
                <p className="text-[15px] text-muted leading-[1.55] mb-4">{m.phrase}</p>
                <div className="card-bullets">
                  {m.bullets.map((b, bi) => (
                    <div key={bi} className="card-bullet">
                      <Check />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <p className="text-[13px] text-muted text-center mt-8 flex items-center justify-center gap-1.5 flex-wrap">
            <Info className="size-[14px] shrink-0" strokeWidth={1.8} />
            <span>
              Prérequis : un compte Claude Pro (environ 23 $ CA/mois, annulable en tout temps). Le plan
              gratuit ne suffit pas.
            </span>
          </p>
        </Reveal>

        {/* MidCta 3 */}
        <Reveal delay={2}>
          <div className="flex flex-col items-center gap-3 mt-12">
            <Cta />
            <p className="text-[13.5px] text-muted">
              La formation commence lundi midi. 399 $ jusqu&apos;à samedi 23 h 59.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   9. CRÉDIBILITÉ KALIO · autorité, une rangée compressée
   ============================================================ */
function CredibiliteKalio() {
  const agents = [
    { icon: <MessageSquare strokeWidth={1.8} />, nom: "Maude", role: "location" },
    { icon: <Phone strokeWidth={1.8} />, nom: "Simon", role: "concierge 24/7" },
    { icon: <CalendarClock strokeWidth={1.8} />, nom: "Olivia", role: "adjointe exécutive" },
    { icon: <Calculator strokeWidth={1.8} />, nom: "Alice", role: "comptabilité" },
  ];
  return (
    <section className="border-y border-line" style={{ paddingTop: "clamp(36px, 5vw, 64px)", paddingBottom: "clamp(36px, 5vw, 64px)" }}>
      <div className="wrap">
        <Reveal>
          <h2 className="text-center text-ink mx-auto mb-8" style={{ fontFamily: "var(--font-display-stack)", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, maxWidth: "34ch" }}>
            L&apos;équipe qui te forme fait rouler ces agents en production, sur des milliers de portes
            au Québec.
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            {agents.map((a, i) => (
              <div key={i} className="pillar">
                <div className="pillar-icon">{a.icon}</div>
                <div>
                  <div className="pillar-name">{a.nom}</div>
                  <div className="pillar-detail">{a.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={2}>
          <div className="text-center max-w-[62ch] mx-auto space-y-2">
            <p className="text-[15px] text-muted leading-[1.6]">
              Tu les vois en démo live au jour 4. La formation te donne les briques pour bâtir ta
              version, à ton échelle, dès cette semaine.
            </p>
            <p className="text-[15px] text-muted leading-[1.6]">
              Maude et Simon roulent en production sur des milliers de portes. Ce que tu bâtis en 4
              midis, c&apos;est la version qui roule pour{" "}
              <strong className="text-ink font-semibold">TOI</strong> dès vendredi.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   10. BIO MARION · le pont rare entre l'IA et l'immobilier
   ============================================================ */
function BioMarion() {
  return (
    <section className="overflow-hidden" style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-12 items-center">
        <Reveal className="relative">
          <div className="relative mx-auto max-w-[420px]">
            <div className="blob blob-teal" style={{ width: 260, height: 260, top: -30, left: -30, opacity: 0.3 }} />
            <div className="relative rounded-[24px] overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(10,15,30,0.12)" }}>
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
            <div className="eyebrow-label mb-4">Ta formatrice</div>
            <h2 className="h2-display mb-6" style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
              Marion Verschaeve, <span className="accent">le pont rare</span> entre l&apos;IA et
              l&apos;immobilier au Québec.
            </h2>
          </Reveal>

          <Reveal delay={1}>
            <p className="text-[16px] text-ink-soft leading-[1.65] max-w-[60ch]">
              Marion est fondatrice de Kalio, dont les agents IA servent environ 7 000 portes au
              Québec. Formée à HEC Montréal, membre de la cohorte C13 du MREX. Et propriétaire
              d&apos;un triplex : les appels de fin de semaine, les relevés 31 « jamais reçus », les
              niaiseries du dimanche, elle les vit aussi. C&apos;est exactement pour ça que la
              formation parle ton langage : celui d&apos;une investisseuse qui bâtit des agents IA,
              pas celui d&apos;une techno qui a jamais géré un logement.
            </p>
          </Reveal>

          {/* CONSENTEMENT à obtenir : citation Philippe Dupuis. Ne pas garder en ligne sans son OK. */}
          <Reveal delay={2}>
            <figure className="mt-8 flex gap-4 max-w-[58ch]">
              <span className="w-[3px] shrink-0 rounded-full bg-gradient-signature" aria-hidden />
              <div>
                <blockquote className="text-[17px] text-ink leading-[1.6] italic" style={{ fontFamily: "var(--font-serif-stack)" }}>
                  « On garde la même équipe, mais on peut gérer le double, le triple de portes. »
                </blockquote>
                <figcaption className="mt-2 text-[13px] text-muted">
                  Philippe Dupuis · VP, Organisation Dupuis · ~800 portes
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. TÉMOIGNAGES · preuve émotionnelle par des pairs
   ============================================================ */
function Temoignages() {
  const cartes = [
    {
      quote: "Ça m'a donné une vue globale claire sur où on en est avec l'IA, et ce que je peux faire dès maintenant.",
      nom: "Jean-François Bélanger · participant, cohorte de juin",
    },
    {
      quote: "J'aurais voulu que la journée continue et qu'on aille encore plus loin.",
      nom: "Marie-Claude Hamel · participante, cohorte de juin",
    },
    {
      quote: "Les explications étaient claires, avec beaucoup d'exemples concrets. Une journée vraiment appréciée.",
      nom: "Christian Guillemette · participant, cohorte de juin",
    },
  ];
  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="eyebrow-label mb-4">Cohorte de juin</div>
            <h2 className="h2-display">
              Ils l&apos;ont suivie. Ils en <span className="accent">redemandent</span>.
            </h2>
          </div>
        </Reveal>

        {/* CONSENTEMENT à obtenir : citation Martin Trottier. Ne pas garder en ligne sans son OK. */}
        <Reveal delay={1}>
          <figure className="card-accent mb-4">
            <blockquote className="text-[20px] text-ink leading-[1.55] italic" style={{ fontFamily: "var(--font-serif-stack)" }}>
              « Si je résume en un mot notre rencontre : <span className="accent">WOW!</span> Ta
              vision, ta formation, ton dynamisme connecte parfaitement avec nous et nos besoins. »
            </blockquote>
            <figcaption className="mt-4 text-[13.5px] text-muted">
              Martin Trottier · investisseur immobilier
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-4">
          {cartes.map((t, i) => (
            <Reveal key={i} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
              <figure className="card card-lift h-full flex flex-col" style={{ padding: "clamp(1.1rem, 4vw, 1.75rem)" }}>
                <span className="accent block leading-none mb-2" style={{ fontSize: 24 }} aria-hidden>
                  «
                </span>
                <blockquote className="text-[15px] text-ink-soft leading-[1.6] flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 pt-4 border-t border-line text-[13px] text-muted">
                  {t.nom}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-10 py-5 border-y border-line">
            <ProofRow />
          </div>
        </Reveal>

        {/* MidCta 4 */}
        <Reveal delay={3}>
          <div className="flex flex-col items-center gap-3 mt-12">
            <Cta />
            <p className="text-[13.5px] text-muted">
              La formation commence lundi midi. 399 $ jusqu&apos;à samedi 23 h 59.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   12. GARANTIE · renverser le risque, juste avant le prix
   ============================================================ */
function Garantie() {
  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(24px, 3vw, 40px)" }}>
      <div className="wrap-narrow px-6">
        <Reveal>
          <div className="card-accent text-center mx-auto" style={{ maxWidth: "36rem" }}>
            <div className="size-[64px] mx-auto rounded-full flex items-center justify-center mb-5" style={{ background: "rgba(0,119,255,0.08)" }}>
              <ShieldCheck className="size-10" strokeWidth={1.8} style={{ color: "var(--kalio-blue)" }} />
            </div>
            <div className="eyebrow-label mb-4">Le risque est de notre bord</div>
            <h2 className="text-ink mb-4" style={{ fontFamily: "var(--font-display-stack)", fontSize: 24, fontWeight: 600, letterSpacing: "-0.02em" }}>
              La garantie, mot pour mot.
            </h2>
            <p className="text-[19px] font-medium text-ink leading-[1.55]">
              « Fais les 4 midis. Si tu n&apos;identifies pas au moins 5 heures par semaine à
              récupérer, remboursement complet. »
            </p>
            <p className="text-[14.5px] text-muted mt-3">
              Notre ambition, c&apos;est 10 heures. On garantit le plancher, pas le plafond.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   13. PRIX + OFFRE + COUNTDOWN · le point de décision
   ============================================================ */
function Prix() {
  const pile = [
    <>4 midis en direct, du 10 au 13 août + replay de chaque session</>,
    <>
      Tes <strong className="text-ink font-semibold">10</strong> employés IA, installés dans ton
      Claude
    </>,
    <>
      ~<strong className="text-ink font-semibold">90</strong> prompts étiquetés par outil, avec leurs
      garde-fous
    </>,
    <>
      <strong className="text-ink font-semibold">12</strong> Skills prêtes à installer
    </>,
    <>
      Le calculateur Excel de rentabilité + projection{" "}
      <strong className="text-ink font-semibold">5 ans</strong>
    </>,
    <>Le cas Sherbrooke complet : 6 logements, baux, factures, 3 soumissions</>,
    <>Le guide de migration ChatGPT vers Claude</>,
  ];
  return (
    <section id="prix" style={{ paddingTop: "clamp(24px, 3vw, 40px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap-narrow px-6">
        <Reveal>
          <div className="card-accent card-accent-glow mx-auto" style={{ maxWidth: "42rem" }}>
            <div className="eyebrow-pill mb-6">
              <span className="eyebrow-badge">{PLACES}</span>
              1ère cohorte en ligne
            </div>

            <h2 className="text-ink mb-6" style={{ fontFamily: "var(--font-display-stack)", fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
              Tout ça, pour le prix d&apos;un mois de loyer d&apos;un 1½.
            </h2>

            <div className="flex flex-col gap-2.5 mb-8">
              {pile.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check className="size-4 shrink-0 mt-0.5" strokeWidth={2.2} style={{ color: "var(--kalio-teal)" }} />
                  <span className="text-[15px] text-ink-soft leading-[1.55]">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-baseline gap-3 flex-wrap mb-1">
              <span className="text-ink" style={{ fontFamily: "var(--font-display-stack)", fontSize: "clamp(56px, 10vw, 72px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
                399 $
              </span>
              <span className="text-[20px] text-muted">
                <span className="line-through">499 $</span> après le {PRICE_DEADLINE}
              </span>
            </div>
            <p className="text-[12.5px] text-muted mb-6">Taxes en sus.</p>

            <div className="rounded-[12px] px-5 py-4 mb-6 text-center" style={{ background: "var(--paper-warm)" }}>
              <Countdown />
            </div>

            <p className="text-[14.5px] text-ink-soft leading-[1.6] mb-4">
              Un seul loyer remonté de 100 $ par mois, c&apos;est 1 200 $ par année. La formation se
              paie au premier logement optimisé. Chaque année.
            </p>
            <p className="text-[14.5px] text-ink-soft leading-[1.6] mb-4">
              Cohorte limitée à 40 places. C&apos;est la première cohorte en ligne, et elle commence
              lundi midi.
            </p>
            <p className="text-[13px] text-muted leading-[1.6] mb-7">
              Il te faut un compte Claude Pro (environ 23 $ CA/mois, annulable en tout temps).
              C&apos;est le seul autre coût, et on te le dit d&apos;avance.
            </p>

            <Cta className="w-full" style={{ padding: "20px 40px", fontSize: 17 }} />
            <p className="text-[12.5px] text-muted text-center mt-4">
              Garantie 5 h par semaine identifiées ou remboursé · Replay inclus
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   14. FAQ · tuer les dernières objections
   ============================================================ */
function FAQ() {
  const faqs = [
    {
      q: "« J'utilise déjà ChatGPT. Pourquoi une formation? »",
      a: "Poser des questions à un chatbot pis faire rouler une équipe de 10 employés configurés sur TON parc, c'est deux mondes. Personne bâtit ça tout seul un soir de semaine. En bonus : le guide de migration transfère tes 3 ans de mémoires ChatGPT en environ 1 heure. Petit piège au passage : ta mémoire n'est PAS dans l'export ZIP officiel. On te montre comment la sortir.",
    },
    {
      q: "« J'ai 6 portes. Ou j'en ai 400. C'est pour moi? »",
      a: "Les deux. À 6 portes, tes employés IA te redonnent tes soirées pis analysent tes prochains deals. À 400, chaque agent se multiplie par ton volume : chaque loyer optimisé, chaque facture triée, chaque avis conforme compte en double. La méthode est la même, l'échelle change.",
    },
    {
      q: "« Je suis pas techno. »",
      a: "Si tu sais copier-coller, ça suffit. Le midi 1, c'est les bases, en partant de zéro. Le midi 3, on bâtit ensemble, chacun dans son Claude, étape par étape. Pis le replay te permet de refaire chaque manipulation à ton rythme. T'as pas besoin d'être techno. T'as besoin d'un midi de disponible.",
    },
    {
      q: "« Pourquoi je bâtirais mes agents au lieu d'engager Kalio? »",
      a: "C'est complémentaire. La formation te donne tes 10 employés IA personnels pis la compréhension de ce que l'IA peut faire dans TES opérations. Si un jour tu veux des agents gérés en production, tu sauras exactement quoi déléguer, et pourquoi. Commence par la formation : c'est le meilleur ordre.",
    },
    {
      q: "« Mes données, c'est-tu sécuritaire? »",
      a: "On prend ça au sérieux. Le midi 4 couvre sécurité, vie privée et Loi 25 : quoi mettre dans l'IA, et surtout quoi NE PAS y mettre. Et le principe de base de toute la formation, c'est « l'IA prépare, tu décides » : rien part sans ton approbation. Tu restes le seul maître de tes dossiers.",
    },
    {
      q: "« Je peux pas être là un des midis. »",
      a: "Le replay de chaque session est inclus, tu manques rien. Cela dit, le live a une vraie valeur : c'est pendant les sessions qu'on configure les employés sur TON parc et que tu poses TES questions. Vise le live quand tu peux, prends le replay quand tu peux pas.",
    },
    {
      q: "« Ça me prend quoi? »",
      a: "Trois affaires : un compte Claude Pro (environ 23 $ CA/mois, annulable en tout temps), un ordinateur, pis tes données d'immeubles. C'est tout. Zéro migration de logiciel : tu gardes ton système de gestion actuel, on se branche dessus ou on en extrait ce qu'il faut.",
    },
    {
      q: "« Et si ça vaut pas la peine? »",
      a: "La garantie est simple, mot pour mot : « Fais les 4 midis. Si tu n'identifies pas au moins 5 heures par semaine à récupérer, remboursement complet. » Le pire scénario réel, c'est que tu récupères ton 399 $. Le meilleur, tu le connais déjà : tu l'as lu plus haut, en dollars.",
    },
  ];
  return (
    <section style={{ paddingTop: "clamp(72px, 10vw, 128px)", paddingBottom: "clamp(72px, 10vw, 128px)" }}>
      <div className="wrap-narrow px-6">
        <Reveal>
          <h2 className="h2-display text-center mb-10">Les questions qui restent.</h2>
        </Reveal>
        <div>
          {faqs.map((f, i) => (
            <Reveal key={i} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
              <details className="group border-b border-line">
                <summary className="flex items-center justify-between gap-4 py-[18px] text-[16px] font-medium text-ink leading-snug cursor-pointer" style={{ minHeight: 44 }}>
                  <span>{f.q}</span>
                  <ChevronDown className="size-5 text-kalio-blue shrink-0 faq-chevron" />
                </summary>
                <p className="pb-[18px] text-[15px] text-ink-soft leading-[1.6]">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   15. CTA FINAL · l'urgence vraie, sur le crème
   ============================================================ */
function FinalCTA() {
  return (
    <section id="cta-final" className="relative overflow-hidden" style={{ paddingTop: 128, paddingBottom: 128 }}>
      <div className="blob blob-teal" style={{ width: 420, height: 420, top: "20%", left: "50%", transform: "translateX(-50%)", opacity: 0.25 }} />
      <div className="wrap-narrow relative text-center px-6">
        <Reveal>
          <h2 className="h2-display mx-auto mb-8" style={{ maxWidth: "20ch" }}>
            Lundi midi, la première cohorte ouvre son Claude.{" "}
            <span className="accent">Avec ou sans toi.</span>
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <div className="inline-block rounded-[12px] px-5 py-3.5 mb-8" style={{ background: "var(--paper-warm)" }}>
            <Countdown prefix="399 $ jusqu'au samedi 8 août 23 h 59 ·" />
          </div>
        </Reveal>
        <Reveal delay={2}>
          <div className="flex flex-col items-center gap-3">
            <Cta className="w-full sm:w-auto" style={{ padding: "16px 36px", fontSize: 16 }} />
            <p className="text-[13px] text-muted">
              5 h par semaine identifiées ou remboursé · {PLACES}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER minimal
   ============================================================ */
function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <span className="inline-flex items-center" aria-label="Kalio">
          <Image src="/brand/kalio-logo.png" alt="Kalio" width={117} height={28} className="h-7 w-auto" />
        </span>
        <span className="text-[12.5px] text-muted">
          Formation offerte par Kalio. Non affiliée à Anthropic.
        </span>
        <span className="text-[12.5px] text-muted">
          © 2026 Agence Mind Mint inc. (Kalio) · marion@kalio.ca
        </span>
      </div>
    </footer>
  );
}
