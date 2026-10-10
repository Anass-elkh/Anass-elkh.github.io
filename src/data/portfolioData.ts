export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'industrial' | 'fullstack' | 'bi' | 'systems';
  role: string;
  period: string;
  organization: string;
  description: string;
  metrics: string[];
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  role: string;
  location: string;
  description: string;
  technologies: string[];
  type: 'education' | 'experience';
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; category: string }[];
}

export const PERSONAL_INFO = {
  name: "EL KHARBAOUI ANASS",
  headline: "Ingénieur d'État en Génie Informatique",
  subheadline: "Full Stack Software Engineering • Industrial IoT & Systems • Business Intelligence",
  institution: "École Nationale des Sciences Appliquées de Fès (ENSA Fès)",
  graduationYear: "2021 – 2026",
  email: "anasselkh13@gmail.com",
  phone: "+212 619359491",
  location: "Fès, Maroc",
  github: "https://github.com/Anass-elkh",
  cvDownload: "CV_El_KHARBAOUI_ANASS.pdf",
  bio: "Ingénieur d'État diplômé de l'ENSA Fès, alliant rigueur mathématique et sens aigu de l'ingénierie applicative. Spécialisé dans la conception d'architectures logicielles distribuées, la digitalisation des flux industriels (Lean Manufacturing) et la valorisation décisionnelle des données."
};

export const PROJECTS: Project[] = [
  {
    id: "pfe-industrial",
    title: "Système Intelligent de Gestion des Terminaux Industriels",
    subtitle: "Digitalisation, traçabilité par code-barres et pilotage Lean Kanban en usine",
    category: "industrial",
    role: "Ingénieur Stagiaire PFE",
    period: "Fév 2026 – Juin 2026",
    organization: "Lear Corporation — Département Cutting",
    description: "Système complet de gestion centralisée et de localisation spatiale matricielle des terminaux de câblage automobile. Détection en temps réel des ruptures, intégration de douchette code-barres et génération d'indicateurs de performance Power BI.",
    metrics: [
      "Localisation instantanée en alvéole 3D",
      "Élimination des erreurs de sertissage par scan",
      "Boucle de réapprovisionnement Kanban automatisée"
    ],
    tags: ["Microsoft Access", "VBA", "SQL", "Power BI", "Barcode Scanner", "Lean 5S/PDCA"],
    githubUrl: "https://github.com/Anass-elkh/smart-industrial-terminal-management",
    featured: true
  },
  {
    id: "luxury-watch",
    title: "SOUYIE H66PRO // Luxury Horology Landing",
    subtitle: "Expérience interactive 3D haut de gamme avec scrub vidéo par défilement",
    category: "fullstack",
    role: "Lead Frontend Engineer",
    period: "Septembre 2026",
    organization: "Production Interactive",
    description: "Landing page horologique d'ultra-luxe combinant le rendu 3D Three.js, un moteur de scrub de 192 images synchronisé à la vélocité du scroll, un lissage inertiel GSAP/Lenis et des synthétiseurs audio procéduraux Web Audio API.",
    metrics: [
      "Scrubbing fluide 60–120 FPS Retina",
      "Rendu WebGL / Three.js réactif",
      "Expérience audio procédurale sans latence"
    ],
    tags: ["React 19", "Three.js", "GSAP ScrollTrigger", "Lenis", "Tailwind CSS v4", "TypeScript"],
    githubUrl: "https://github.com/Anass-elkh/luxury-smartwatch-landing",
    liveUrl: "https://anass-elkh.github.io/luxury-smartwatch-landing/",
    featured: true
  },
  {
    id: "stock-infodix",
    title: "Système de Gestion de Stock en Temps Réel",
    subtitle: "Plateforme Full Stack de traçabilité d'inventaire et flux logistiques IT",
    category: "fullstack",
    role: "Développeur Full Stack Stagiaire",
    period: "Juil 2025 – Sept 2025",
    organization: "INFODIX SARL",
    description: "Application d'inventaire réactive avec actualisation temps réel, gestion des seuils d'alerte, suivi des fournisseurs et journal d'audit des mouvements (entrées, sorties, transferts). Conçue sur une pile moderne React, Node.js, cache Redis et base PostgreSQL.",
    metrics: [
      "Cache Redis pour temps de réponse < 15ms",
      "Triggers PostgreSQL pour audit automatique des stocks",
      "Déploiement conteneurisé Docker Compose"
    ],
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    githubUrl: "https://github.com/Anass-elkh/stock-management-infodix",
    liveUrl: "https://anass-elkh.github.io/stock-management-infodix/",
    featured: true
  },
  {
    id: "bank-loan",
    title: "Tableau de Bord Décisionnel // Risque Crédit Bancaire",
    subtitle: "Modélisation financière et analyse décisionnelle multi-outils de 38 000+ prêts",
    category: "bi",
    role: "Data Analyst & BI Engineer",
    period: "Novembre 2025",
    organization: "Projet Analytique",
    description: "Analyse approfondie des performances du portefeuille de prêts bancaires (Good vs Bad Loans), matrices DTI (Debt-to-Income), segmentation par grades et États. Conçu sous Power BI, Tableau, Excel Avancé et requêtes d'agrégation SQL.",
    metrics: [
      "Analyse de plus de 38 700 dossiers financiers",
      "Modélisation en schéma en étoile (Star Schema)",
      "Matrices croisées Power BI, Tableau et Excel VBA"
    ],
    tags: ["Power BI", "Tableau", "Microsoft Excel", "SQL Server", "DAX", "Financial Modeling"],
    githubUrl: "https://github.com/Anass-elkh/bank-loan-analytics-dashboard",
    featured: true
  },
  {
    id: "ecommerce-bi",
    title: "E-Commerce Profitability & Sales Intelligence",
    subtitle: "Optimisation de rentabilité et comportement d'achat omnicanal",
    category: "bi",
    role: "BI Developer",
    period: "Janvier 2026",
    organization: "Projet Analytique",
    description: "Dashboard analytique Power BI pour l'optimisation des marges bénéficiaires e-commerce, détection des tendances de saisonnalité (Q1-Q4), analyse de rentabilité par sous-catégorie et segmentation par mode de paiement.",
    metrics: [
      "Calcul dynamique des marges nettes par SKU",
      "Filtres interactifs et slicers temporels",
      "Mesures DAX avancées (YTD, Profit Ratio, AOV)"
    ],
    tags: ["Power BI", "DAX", "Power Query", "Star Schema", "E-Commerce Analytics"],
    githubUrl: "https://github.com/Anass-elkh/ecommerce-sales-analytics-powerbi",
    featured: false
  },
  {
    id: "helpdesk-alomrane",
    title: "Application Helpdesk & Ticketing Support",
    subtitle: "Plateforme centralisée de gestion des incidents et demandes d'assistance",
    category: "fullstack",
    role: "Développeur Web Stagiaire",
    period: "Juil 2024 – Sept 2024",
    organization: "Al Omrane",
    description: "Application web de gestion des tickets d'assistance technique avec matrice de criticité (anomalie, amélioration, tâche), files de traitement par département et messagerie collaborative intégrée.",
    metrics: [
      "Réduction significative du délai de prise en charge",
      "Classification par gravité et type de demande",
      "Gestion multi-rôles (utilisateurs & techniciens)"
    ],
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Architecture MVC"],
    githubUrl: "https://github.com/Anass-elkh/helpdesk-ticketing-system",
    featured: false
  },
  {
    id: "grades-webservices",
    title: "Plateforme Distribuée de Gestion des Notes",
    subtitle: "Architecture de services web hybride REST (JAX-RS) et SOAP (JAX-WS)",
    category: "systems",
    role: "Software Architect",
    period: "Mai 2024 – Juin 2024",
    organization: "ENSA Fès",
    description: "Développement d'une suite de services web JEE pour la gestion des relevés académiques et le calcul automatisé des moyennes pondérées. Double exposition RESTful JSON et SOAP XML avec WSDL et collection Postman.",
    metrics: [
      "Exposition double contrat REST (Jersey) et SOAP (Metro)",
      "Gestion JAXB et typage fort",
      "Suite complète de tests unitaires et Postman"
    ],
    tags: ["Java 17", "Jakarta EE", "JAX-RS", "JAX-WS SOAP", "Postman", "Maven"],
    githubUrl: "https://github.com/Anass-elkh/grades-management-webservices",
    featured: false
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: "2026",
    title: "Projet de Fin d'Études (PFE) — Ingénieur d'État",
    organization: "Lear Corporation (Département Cutting)",
    role: "Ingénieur Stagiaire en Systèmes Industriels & Informatique",
    location: "Fès / Région Industrielle",
    description: "Conception et déploiement du Système Intelligent de Gestion des Terminaux : traçabilité par scan code-barres, localisation matricielle des racks, gestion Kanban et intégration de tableaux de bord Power BI en environnement de production automobile certifié IATF 16949.",
    technologies: ["Microsoft Access", "VBA", "SQL", "Power BI", "Lean Manufacturing (PDCA, 5S, Kaizen)"],
    type: "experience"
  },
  {
    year: "2021 – 2026",
    title: "Diplôme d'Ingénieur d'État en Génie Informatique",
    organization: "École Nationale des Sciences Appliquées de Fès (ENSA Fès)",
    role: "Élève Ingénieur d'État",
    location: "Fès, Maroc",
    description: "Formation d'excellence en 5 ans : algorithmique avancée, architecture des ordinateurs, génie logiciel, bases de données relationnelles et NoSQL, réseaux, sécurité informatique et gestion de projet Agile.",
    technologies: ["Java/JEE", "C/C++", "Python", "SQL & PL/SQL", "Web Full Stack", "DevOps"],
    type: "education"
  },
  {
    year: "2025",
    title: "Stage Ingénieur Full Stack — Gestion de Stock Temps Réel",
    organization: "INFODIX SARL",
    role: "Développeur Full Stack",
    location: "Fès, Maroc",
    description: "Développement d'une application d'inventaire en temps réel pour le matériel réseau et infrastructure. Architecture micro-services avec React, Node.js, mise en cache Redis et stockage PostgreSQL sous Docker.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    type: "experience"
  },
  {
    year: "2024",
    title: "Stage Développement Web — Système Helpdesk",
    organization: "Al Omrane",
    role: "Développeur Web",
    location: "Fès, Maroc",
    description: "Mise en place d'une solution de ticketing interne pour le support technique. Modélisation de la base de données MySQL, développement en PHP modulaire et interface Bootstrap responsive.",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript", "HTML/CSS"],
    type: "experience"
  },
  {
    year: "2020",
    title: "Baccalauréat Sciences Physiques — Mention Très Bien",
    organization: "Académie Régionale de l'Éducation et de la Formation",
    role: "Lycéen",
    location: "Fès, Maroc",
    description: "Bases solides en mathématiques pures, mécanique et physique appliquée.",
    technologies: ["Mathématiques", "Physique-Chimie"],
    type: "education"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Langages & Programmation",
    skills: ["JavaScript / TypeScript", "Java (JEE)", "PHP", "C# / ASP.NET", "C / C++", "Python", "SQL & PL/SQL"]
  },
  {
    name: "Développement Web & Frameworks",
    skills: ["React", "Node.js & Express", "Tailwind CSS", "Bootstrap", "RESTful Web Services", "SOAP (JAX-WS)", "HTML5 & CSS3"]
  },
  {
    name: "Bases de Données & Caching",
    skills: ["PostgreSQL", "MySQL & MariaDB", "SQL Server", "Oracle PL/SQL", "Redis (Cache)", "Microsoft Access"]
  },
  {
    name: "Business Intelligence & Data",
    skills: ["Power BI", "DAX", "Power Query", "Tableau", "Microsoft Excel Avancé", "VBA Automation", "Star Schema"]
  },
  {
    name: "Méthodologies & Ingénierie",
    skills: ["Lean Manufacturing", "Kanban & 5S", "Cycle PDCA", "Agile Scrum", "Docker & Docker-Compose", "Git & GitHub Actions"]
  }
];
