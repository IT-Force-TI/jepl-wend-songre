// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CS / JEPL WEND-SONGRE — Kalyara, Cinkassé (Cinkassé 1, Région des Savanes)
//  Jardin d'Enfants et École Privée Laïque, inspection de Cinkassé.
//  Données vérifiées : nom, fondateur (DJINTOU Kouta Issaka), statut (privé laïc agréé
//  par le MEPST), téléphone, quartier et repère (près du Lycée de Cinkassé), cycles
//  préscolaire et primaire, CEPE, pièces d'inscription, modalités de paiement.
//  À CONFIRMER : extension collège (6e–3e) — non affichée, la dénomination JEPL couvrant
//  le jardin d'enfants et l'école primaire.
//  Données FICTIVES : slogan, e-mail, horaires, tarifs, textes de présentation.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'jepl-wend-songre-cinkasse',
  logo: '/wend-songre-logo.png',
  settings: {
    name: 'Jardin d’Enfants et École Privée Laïque Wend-Songre',
    shortName: 'CS Wend-Songre',
    slogan: 'ACCOMPAGNER CHAQUE ENFANT VERS LA RÉUSSITE',
    address: 'Quartier Kalyara, près du Lycée de Cinkassé — Cinkassé, Togo',
    email: 'contact@jepl-wendsongre.tg',
    phone: '+228 90 10 05 30',
    phone2: '',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 45000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Jardin d’enfants et école primaire privés laïcs, agréés par l’État togolais, à Kalyara (Cinkassé) : un accompagnement bienveillant et exigeant pour chaque enfant, de la petite section au CEPE.',
  hero: {
    eyebrow: 'BIENVEILLANCE - DISCIPLINE - ESPOIR',
    titleLines: ['Jardin d’Enfants et', 'École Privée Laïque'],
    highlight: 'Wend-Songre',
    intro:
      'Bienvenue au Complexe Scolaire Wend-Songre, à Cinkassé, près du Lycée. En moré, « Wend-Songre » signifie « l’aide de Dieu » : un nom qui dit notre mission, accompagner chaque enfant avec bienveillance et discipline, du jardin d’enfants jusqu’au CEPE.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'M. DJINTOU Kouta Issaka, fondateur du Complexe Scolaire Wend-Songre',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Aider chaque enfant', 'à grandir et à réussir.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'En créant le Complexe Scolaire Wend-Songre à Cinkassé, j’ai voulu offrir aux familles de notre ville une école où chaque enfant se sent accueilli, soutenu et encouragé, dès ses premiers pas au jardin d’enfants.',
      '« Wend-Songre », l’aide de Dieu, est pour nous un message d’espoir. Établissement laïc agréé par l’État, nous accueillons tous les enfants sans distinction et les accompagnons avec bienveillance et discipline jusqu’à la réussite au CEPE.',
    ],
    signature: 'DJINTOU Kouta Issaka, Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire Wend-Songre (Jardin d’Enfants et École Privée Laïque) est implanté dans le quartier Kalyara, à Cinkassé (commune de Cinkassé 1, Région des Savanes), à proximité du Lycée de Cinkassé, un repère bien connu des parents et des élèves.',
      'Fondé par M. DJINTOU Kouta Issaka, il porte un nom moré, langue très parlée dans cette zone frontalière avec le Burkina Faso : « Wend-Songre », qui signifie « l’aide de Dieu » ou « que Dieu vienne en aide ».',
      'Agréé par le Ministère des Enseignements Primaire, Secondaire et Technique et placé sous l’inspection de Cinkassé, l’établissement suit le programme officiel togolais, du jardin d’enfants au CM2, et prépare ses élèves à l’examen national du CEPE.',
    ],
    stats: [
      { value: '2', label: 'Cycles : jardin d’enfants et primaire' },
      { value: '9', label: 'Niveaux, de la petite section au CM2' },
      { value: '100%', label: 'Engagement pour la réussite au CEPE' },
    ],
  },
  values: [
    {
      icon: 'heart',
      title: 'Accompagnement bienveillant',
      text: 'Chaque enfant est écouté, encouragé et soutenu dans ses progrès.',
    },
    {
      icon: 'shield',
      title: 'Discipline',
      text: 'Ponctualité, respect et sérieux, dès le plus jeune âge.',
    },
    {
      icon: 'idea',
      title: 'Espoir',
      text: 'Croire en chaque enfant et en l’avenir de la jeunesse de Cinkassé.',
    },
    {
      icon: 'graduation',
      title: 'Réussite éducative',
      text: 'Des bases solides et une préparation sérieuse au CEPE.',
    },
  ],
  faq: [
    {
      q: 'Que signifie « Wend-Songre » ?',
      a: 'En moré, « Wend-Songre » signifie « l’aide de Dieu » ou « que Dieu vienne en aide ». Ce nom exprime l’esprit de l’école : accompagner chaque enfant avec bienveillance. L’établissement reste laïc et accueille tous les enfants sans distinction.',
    },
    {
      q: 'Où se trouve l’établissement ?',
      a: 'À Cinkassé, dans le quartier Kalyara, à proximité du Lycée de Cinkassé. Appelez-nous ou écrivez-nous sur WhatsApp au +228 90 10 05 30 pour être guidé.',
    },
    {
      q: 'L’établissement est-il reconnu par l’État ?',
      a: 'Oui. C’est un établissement d’enseignement général privé laïc, agréé par le Ministère des Enseignements Primaire, Secondaire et Technique, sous l’inspection de Cinkassé.',
    },
    {
      q: 'Quels cycles proposez-vous ?',
      a: 'Le jardin d’enfants (petite, moyenne et grande section) et l’école primaire (du CP1 au CM2), avec préparation et présentation des élèves au CEPE.',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Quelles sont les modalités de paiement ?',
      a: 'Des frais d’inscription sont réglés chaque année à l’inscription. La scolarité se paie ensuite par tranches, selon le calendrier communiqué par l’établissement.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Jardin d’enfants',
      slug: 'jardin-enfants',
      age: '3 à 6 ans',
      text: 'Le jardin d’enfants (cycle préscolaire) est la première étape du parcours scolaire. Dans un cadre chaleureux et sécurisant, l’enfant s’éveille, apprend à vivre avec les autres et découvre ses premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil, motricité et expression corporelle',
        'Développement du langage',
        'Socialisation et vie en groupe',
        'Initiation aux lettres et aux nombres',
      ],
      programs: [
        {
          icon: 'heart',
          title: 'Chants et comptines',
          text: 'Chanter, réciter et jouer pour apprendre en s’amusant.',
        },
        {
          icon: 'idea',
          title: 'Éveil et créativité',
          text: 'Dessin, peinture, activités manuelles et jeux éducatifs.',
        },
        {
          icon: 'users',
          title: 'Socialisation',
          text: 'Apprendre à partager, à attendre son tour et à respecter les autres.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2, selon le programme officiel togolais. Les élèves sont préparés et présentés à l’examen national du CEPE (Certificat d’Études du Premier Cycle), qui ouvre l’entrée en 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique et morale',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'users',
          title: 'Suivi personnalisé',
          text: 'Devoirs suivis et dialogue régulier avec les parents.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) acte de naissance',
      'Les bulletins des trimestres précédents (sauf entrée au jardin d’enfants)',
      'Un certificat de transfert (pour un élève venant d’une autre école)',
      'Deux (2) photos d’identité récentes',
      'Le reçu de paiement des frais d’inscription annuels',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
