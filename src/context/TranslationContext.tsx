import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Dictionary {
  [key: string]: { [key: string]: string };
}

const dictionary: Dictionary = {
  en: {
    // Hero Section
    // 'hero.tagline': 'Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.',
    // 'hero.subtitle': 'The combination of my passion for design, code & interaction positions me in a unique place in the web design world.',
    
    // Profile Hero Section
    'hero.name': 'Mahdi Ben Amor',
    'hero.title': 'Software Engineer',
    'hero.email': 'mahdibenamor13@gmail.com',
    'hero.phone': '(+216) 53 082 996',
    'hero.linkedin': 'LinkedIn',
    'hero.github': 'GitHub',
    
    // About Section
    'about.title': 'About',
    'about.summary': 'Results-driven Software Engineer with 4+ years of experience delivering scalable web and enterprise solutions. Proficient in backend development, frontend frameworks, AI/ML integration, and DevOps practices. Adept at translating business requirements into high-performing systems while ensuring on-time, on-budget delivery in Agile/Scrum environments.',
    
    // Skills Section
    'skills.title': 'Skills',
    
    // Experience Section
    'experience.title': 'Experience',
    'experience.current.role': 'Software Engineer / Full-Stack',
    'experience.current.company': 'Medianet',
    'experience.current.location': 'Tunis, Tunisia',
    'experience.current.period': 'Sep 2021 – Present',
    'experience.current.bullet1': 'Delivered 17+ enterprise projects; led 8 from design to deployment, ensuring on-time, on-budget delivery for clients in banking, telecommunications, and public sector.',
    'experience.current.bullet2': 'Developed AI-powered chatbot using OpenAI APIs, Qdrant vector database and LLMs with OCR, improving response accuracy by 40% and processing 500+ queries daily.',
    'experience.current.bullet3': 'Built and maintained scalable backend services with Spring Boot, PHP and Django, integrated with PostgreSQL and MySQL for 10,000+ daily users.',
    'experience.current.bullet4': 'Developed dynamic user interfaces with Angular 17, React and Next.js, improving user experience and increasing session time by 25%.',
    'experience.current.bullet5': 'Designed and optimized REST APIs and microservices, reducing latency by up to 30%.',
    'experience.current.bullet6': 'Implemented authentication and authorization with WSO2 and Keycloak, ensuring system security and regulatory compliance.',
    'experience.current.bullet7': 'Participated in architectural discussions and contributed to 5+ scalable system designs.',
    'experience.current.bullet8': 'Led cross-functional teams of 4-6 developers, coordinated sprints, mentored juniors and conducted code reviews.',
    'experience.current.bullet9': 'Improved CI/CD pipelines with Docker, Jenkins and SonarQube on Linux, reducing deployment time from 2 hours to 15 minutes.',
    'experience.intern.role': 'Software Engineer Intern – PFE Project',
    'experience.intern.company': 'Medianet',
    'experience.intern.location': 'Tunis, Tunisia',
    'experience.intern.period': 'Jan 2021 – Aug 2021',
    'experience.intern.bullet1': 'Developed a comprehensive coupon management solution for stores, administrators and users, processing 1,000+ monthly transactions.',
    'experience.intern.bullet2': 'Built backend services using PHP/Laravel and designed responsive multi-device compatible interfaces.',
    
    // Projects Section
    'projects.title': 'Projects',
    
    // Education Section
    'education.title': 'Education & Certifications',
    'education.msc.title': 'M.Sc. in Computer Science',
    'education.msc.institution': 'ESPRIT School of Engineering — Tunis, Tunisia',
    'education.msc.period': 'Sep 2021 – Jun 2025',
    'education.bsc.title': 'B.Sc. in Computer Science',
    'education.bsc.institution': 'Higher Institute of Technology (ISI) — Tunis, Tunisia',
    'education.bsc.period': 'Sep 2018 – Jun 2021',
    'education.certifications.title': 'Certifications',
    'education.certifications.aws': 'AWS Certified Developer – Associate (In Progress, Expected 2025)',
    'education.languages.title': 'Languages',
    'education.languages.text': 'French: Fluent | English: Fluent | Spanish: Beginner | Arabic: Native',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.message': 'Interested in working together? Let\'s discuss your project and see how we can create something exceptional.',
    'contact.email': 'Send Email',
    
    // Navigation
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact'
  },
  fr: {
    // Hero Section
    // 'hero.tagline': 'Aider les marques à se démarquer à l\'ère numérique. Ensemble, nous établirons le nouveau statu quo. Sans fioritures, toujours à la pointe.',
    // 'hero.subtitle': 'La combinaison de ma passion pour le design, le code et l\'interaction me positionne dans un lieu unique dans le monde du développement web.',
    
    // Profile Hero Section
    'hero.name': 'Mahdi Ben Amor',
    'hero.title': 'Ingénieur Logiciel',
    'hero.email': 'mahdibenamor13@gmail.com',
    'hero.phone': '(+216) 53 082 996',
    'hero.linkedin': 'LinkedIn',
    'hero.github': 'GitHub',
    
    // About Section
    'about.title': 'À Propos',
    'about.summary': 'Ingénieur logiciel orienté résultats avec plus de 4 ans d\'expérience dans la livraison de solutions web et d\'entreprise évolutives. Compétent en développement backend, frameworks frontend, intégration AI/ML et pratiques DevOps. Capable de traduire les besoins métier en systèmes performants et de garantir des livraisons ponctuelles et conformes au budget dans des environnements Agile/Scrum. Ouvert aux opportunités à distance dans le monde entier et à la relocation en Europe.',
    
    // Skills Section
    'skills.title': 'Compétences Techniques',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    'experience.current.role': 'Ingénieur Logiciel / Full-Stack',
    'experience.current.company': 'Medianet',
    'experience.current.location': 'Tunis, Tunisie',
    'experience.current.period': 'Sep 2021 – Présent',
    'experience.current.bullet1': 'Réalisation de plus de 17 projets d\'entreprise, dont 8 dirigés de la conception au déploiement, en garantissant des livraisons ponctuelles et conformes au budget pour des clients dans la banque, les télécommunications et le secteur public.',
    'experience.current.bullet2': 'Développement d\'un chatbot IA utilisant les APIs OpenAI, la base de données vectorielle Qdrant et des LLMs avec OCR, améliorant la précision des réponses de 40% et traitant plus de 500 requêtes par jour.',
    'experience.current.bullet3': 'Conception et maintenance de services backend scalables avec Spring Boot, PHP et Django, intégrés à PostgreSQL et MySQL pour plus de 10 000 utilisateurs quotidiens.',
    'experience.current.bullet4': 'Développement d\'interfaces utilisateurs dynamiques avec Angular 17, React et Next.js, améliorant l\'expérience utilisateur et augmentant le temps de session de 25%.',
    'experience.current.bullet5': 'Conception et optimisation d\'APIs REST et de microservices, réduisant la latence jusqu\'à 30%.',
    'experience.current.bullet6': 'Implémentation de l\'authentification et de l\'autorisation avec WSO2 et Keycloak, garantissant la sécurité des systèmes et la conformité réglementaire.',
    'experience.current.bullet7': 'Participation aux discussions architecturales et contribution à plus de 5 conceptions de systèmes évolutifs.',
    'experience.current.bullet8': 'Encadrement d\'équipes multidisciplinaires de 4 à 6 développeurs, coordination des sprints, mentorat des juniors et revue de code.',
    'experience.current.bullet9': 'Amélioration des pipelines CI/CD avec Docker, Jenkins et SonarQube sur Linux, réduisant le temps de déploiement de 2 heures à 15 minutes.',
    'experience.intern.role': 'Stagiaire Ingénieur Logiciel – Projet PFE',
    'experience.intern.company': 'Medianet',
    'experience.intern.location': 'Tunis, Tunisie',
    'experience.intern.period': 'Jan 2021 – Août 2021',
    'experience.intern.bullet1': 'Développement d\'une solution complète de gestion de coupons pour magasins, administrateurs et utilisateurs, traitant plus de 1 000 transactions mensuelles.',
    'experience.intern.bullet2': 'Création de services backend en PHP/Laravel et conception d\'interfaces responsives compatibles multi-appareils.',
    
    // Projects Section
    'projects.title': 'Projets',
    
    // Education Section
    'education.title': 'Formation & Certifications',
    'education.msc.title': 'Ingénierie Informatique',
    'education.msc.institution': 'École Supérieure Privée d\'Ingénierie et de Technologies (ESPRIT) — Tunis, Tunisie',
    'education.msc.period': 'Sep 2021 – Juin 2025',
    'education.bsc.title': 'Licence en Sciences de l\'Informatique',
    'education.bsc.institution': 'Institut Supérieur d\'Informatique (ISI) — Tunis, Tunisie',
    'education.bsc.period': 'Sep 2018 – Juin 2021',
    'education.certifications.title': 'Certifications',
    'education.certifications.aws': 'En cours : AWS Certified Developer – Associate (Prévu 2025)',
    'education.languages.title': 'Langues',
    'education.languages.text': 'Français : Courant | Anglais : Courant | Espagnol : Débutant | Arabe : Langue maternelle',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.message': 'Intéressé par une collaboration ? Contactez-moi pour discuter de vos projets et voir comment nous pouvons créer quelque chose d\'exceptionnel ensemble.',
    'contact.email': 'Envoyer un email',
    
    // Navigation
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.experience': 'Expérience',
    'nav.education': 'Formation',
    'nav.contact': 'Contact'
  }
};

interface TranslationContextProps {
  locale: keyof typeof dictionary;
  setLocale: (l: keyof typeof dictionary) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<keyof typeof dictionary>('en');
  const t = (key: string) => dictionary[locale][key] || key;
  return (
    <TranslationContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(TranslationContext);
  if (!ctx) throw new Error('useTranslation must be used within TranslationProvider');
  return ctx;
}
