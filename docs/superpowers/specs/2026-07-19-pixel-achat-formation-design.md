# Tracking d'achat Meta — formation.kalio.ca (spec)

Date : 2026-07-19 · Approuvé par : Marion (plan B, deux temps)

## Contexte

- Site : `formation.kalio.ca` (Next.js, Vercel, repo `Kalio\formation-ia-immo`).
- Pixel Meta `1589844458973402` déjà installé dans `app/layout.tsx` : `PageView` global + `InitiateCheckout` (399 CAD) au clic sur le lien de paiement.
- Paiement : payment link GHL `https://link.fastpaydirect.com/payment-link/6a4dc0f6c981f3feae6e7ff5` (Stripe derrière). Aujourd'hui, **aucune redirection après paiement** → aucun événement Achat n'est envoyé à Meta.
- Campagnes : Meta seulement pour l'instant (fille de pub de Marion). Google Ads plus tard.
- La fille de pub doit confirmer que ses campagnes utilisent bien le pixel `1589844458973402`.

## Objectif

Meta reçoit un événement `Purchase` fiable (399 CAD) pour chaque inscription payée, afin d'optimiser les campagnes sur les acheteurs et de mesurer le ROAS.

## Phase 1 — navigateur (débloque la fille de pub tout de suite)

1. **Page `/merci`** (`app/merci/page.tsx`) : confirmation d'inscription, même design que le site. Contenu : « Ta place est réservée », rappel des dates (10-13 août, midis), prochaine étape (courriel de confirmation + checklist pré-travail : compte Claude Pro, app desktop, Gmail). `robots: noindex` (page accessible seulement après achat, pas de SEO).
2. **Événement `Purchase`** sur `/merci` : `fbq('track', 'Purchase', { value: 399, currency: 'CAD' })`, une seule fois au chargement.
3. **Redirection GHL** : configurer le payment link pour rediriger vers `https://formation.kalio.ca/merci` après paiement réussi (réglage dans GHL → Payments → Payment Links → confirmation/redirect). Étape manuelle dans GHL (navigateur), hors code.

Limite connue et acceptée : tracking navigateur → ~20-30 % de pertes (bloqueurs, iOS, gens qui ferment la page avant la redirection). Corrigé en phase 2.

## Phase 2 — serveur (Conversions API, source de vérité)

1. **Déclencheur** : GHL, paiement reçu sur ce payment link → webhook vers n8n (instance bright-owl, comme le reste de l'infra Kalio).
2. **Workflow n8n** : reçoit le paiement → envoie `Purchase` à la Conversions API Meta (pixel `1589844458973402`) avec : montant réel payé, devise, `event_id` = id de transaction GHL, données de correspondance hashées (courriel, téléphone, nom — meilleures correspondances que le pixel navigateur).
3. **Anti-doublon** : dès que la phase 2 est en prod et validée (achat test visible dans Events Manager), on **retire** le `Purchase` navigateur de `/merci` (la page reste pour l'expérience client et le PageView). Un seul canal envoie Purchase → aucun risque de double comptage, et le canal serveur capte aussi ceux qui ne se rendent jamais à /merci.
4. **Secret requis** : token Conversions API (Events Manager → Settings → section « Conversions API » → Generate access token). Stocké dans le coffre habituel, jamais en clair.

## Vérification (obligatoire avant de dire « c'est live »)

- Meta Events Manager → onglet **Test Events** : visiter le site (PageView), cliquer Réserver (InitiateCheckout), simuler /merci (Purchase).
- Achat test réel à 399 $ (remboursé ensuite) OU paiement test si le mode test GHL/Stripe le permet — à valider avec Marion avant toute dépense (règle : jamais de dépense sans son go).
- Phase 2 : achat test → événement serveur visible dans Events Manager avec l'event_id GHL.

## Hors scope (plus tard)

- Google Ads (tag + conversion import) — la page /merci servira aussi à ça.
- Agent IA autonome de gestion de campagnes — brainstorm séparé, prérequis = ce tracking.

## Erreurs possibles et comportement

- Utilisateur ferme la page Stripe avant redirection → phase 1 : achat perdu (connu) ; phase 2 : capté par le serveur.
- Webhook n8n en échec → alerte via le monitoring n8n existant (healthchecks/Telegram).
- Visite directe de /merci sans achat → Purchase navigateur faussé (limite phase 1, disparaît en phase 2 ; noindex réduit le risque).
