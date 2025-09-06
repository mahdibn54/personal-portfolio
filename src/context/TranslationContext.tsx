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
    'projects.adapt.title': 'ADAPT Fund Platform - Crédit Agricole',
    'projects.adapt.client': 'Crédit Agricole (EU-funded project)',
    'projects.adapt.description': 'Lead Developer & Technical Committee Manager for EU-funded digital platform automating fund allocation processes.\n\n• Designed complete software architecture with Spring Boot microservices, Angular frontend, relational/NoSQL databases, and CI/CD pipelines\n• Integrated WSO2 API Management for service exposure, governance, and security\n• Built scalable, modular, and evolutionary platform architecture\n• Developed dynamic form generator and flexible scoring engine for automated decision-making\n• Implemented customizable evaluation processes and eligibility verification systems\n• Created multi-role workflow management supporting hundreds of concurrent users\n• Led development committee and guided technological choices\n• Conducted code reviews and mentored junior developers\n• Drove technical standards and best practices adoption\n• Optimized APIs and data persistence for high-volume request handling\n• Implemented comprehensive security standards (Spring Security, OAuth2, Keycloak, WSO2 API Manager)\n• Ensured platform scalability and reliability under load\n• Established CI/CD pipelines (GitLab CI, Jenkins, SonarQube)\n• Managed Kubernetes deployment on AWS infrastructure\n• Guaranteed frequent and stable releases\n• Active participation in Scrum ceremonies (Daily, Sprint Planning, Review, Refinement)\n• Close collaboration with Product Owners and Business Analysts\n• Aligned development with business requirements and stakeholder needs\n\nTechnology Stack: Spring Boot, Java, RESTful APIs, Microservices, Angular, TypeScript, PostgreSQL, MongoDB, Redis, Spring Security, OAuth2, Keycloak, WSO2 API Manager, GitLab CI, Jenkins, SonarQube, Docker, Kubernetes, AWS (EKS, RDS, S3, CloudWatch), Prometheus, Grafana, ELK Stack, JUnit, Mockito, Cypress, Jest\n\nDelivered robust, modular, and scalable platform adopted by Crédit Agricole for digitalizing fund allocation processes, supporting automated decision-making and streamlined operations.',
    'projects.mae.title': 'Mobile App & Web Platform - MAE Insurance',
    'projects.mae.client': 'MAE (Mutuelle Assurance de l\'Enseignement)',
    'projects.mae.description': 'Lead Backend Developer / Full-Stack for digital services modernization of MAE (Teaching Mutual Insurance).\n\n• Designed and implemented Spring Boot backend services for mobile application (simulators, subscription management, auto, life, boat, building insurance contracts)\n• Built scalable REST APIs supporting comprehensive insurance product portfolio\n• Implemented secure data processing and business logic for insurance operations\n• Contributed to Laravel-based web platform development offering same functionalities as mobile app\n• Ensured consistent multi-channel user experience across platforms\n• Integrated responsive design for optimal cross-device compatibility\n• Participated in creating new information system based on Spring Boot and Angular\n• Replaced legacy management system to improve internal operational efficiency\n• Modernized data architecture and workflow processes\n• Implemented secure REST APIs with authentication and authorization\n• Integrated with existing systems and optimized data flow processes\n• Ensured system scalability and performance optimization\n• Worked in Scrum methodology (Daily, Sprint Planning, Review, Refinement)\n• Collaborated with multidisciplinary teams to align development with business needs\n• Maintained close communication with stakeholders and product owners\n\nTechnology Stack: Spring Boot, Java, Laravel, PHP, Angular, TypeScript, Responsive Web Design, REST API integration, MySQL, PostgreSQL, Spring Security, OAuth2, API Authentication, Agile/Scrum, Code Reviews, CI/CD\n\nDelivered complete digital ecosystem (mobile, web, and internal IS) improving policy subscription, management, and customer satisfaction for MAE.',
    'projects.cashless.title': 'NFC Payment Solution - Tourism & Resorts',
    'projects.cashless.client': 'Tourism & Resort Industry',
    'projects.cashless.description': 'Lead Developer & Business Analyst for NFC card-based digital payment solution targeting tourist complexes and hotels.\n\n• Designed backend architecture with Laravel and integration with establishment management systems (accounting, event management, billing)\n• Implemented authentication and authorization management via Keycloak\n• Developed client and NFC card management modules for streamlined operations\n• Created event management system (reservations, activities) and cashless payments for enhanced user experience\n• Built complex dashboards and analytical views (revenue, consumption history, transactions) for optimized management decision-making\n• Implemented security mechanisms to protect NFC transactions and real-time data flow optimization\n• Participated in Scrum ceremonies and stakeholder interactions to ensure alignment between business needs and technical developments\n• Ensured platform scalability and performance for high-volume transaction processing\n• Integrated with existing hotel management systems and POS terminals\n• Developed comprehensive reporting tools for financial tracking and operational insights\n• Implemented real-time transaction monitoring and fraud detection mechanisms\n• Created user-friendly interfaces for both staff and guest interactions\n\nTechnology Stack: Laravel, PHP, Keycloak, NFC Technology, MySQL, REST APIs, Real-time Processing, Dashboard Development, Security Implementation, System Integration, Agile/Scrum\n\nDelivered complete platform improving operational efficiency for resorts and customer satisfaction through simplified and secure payment experience.',
    'projects.customs.title': 'Digitization of Binding Information Management',
    'projects.customs.client': 'Tunisian Customs Authority (DGD)',
    'projects.customs.description': 'Project Lead / Full-Stack Developer for digitizing Binding Information management, ensuring compliance with WTO, African trade agreements, and government regulations.\n\n• Designed RESTful architecture with React/Angular frontend and Spring Boot backend supporting up to 80,000 users\n• Implemented BPMN workflows for various types of requests, enabling automated process management and tracking from submission to approval\n• Integrated electronic signatures for secure document processing and authentication\n• Developed real-time dashboards for statistics and reporting to streamline trade administration\n• Secured sensitive government and customs data via API Gateway, enforcing authentication, authorization, traffic filtering, and regulatory compliance\n• Coordinated development team, aligning technical implementation with business requirements\n• Ensured scalability, performance, and security for high-volume government operations\n• Implemented comprehensive audit trails and compliance reporting mechanisms\n• Developed multi-language support for international trade documentation\n• Created automated notification systems for process status updates\n• Integrated with existing customs systems and international trade databases\n• Implemented role-based access control for different user types and permissions\n• Optimized database performance for handling large volumes of trade data\n• Established monitoring and alerting systems for system health and performance\n\nTechnology Stack: Spring Boot, Java, React, Angular, BPMN, API Gateway, Electronic Signatures, RESTful APIs, Database Optimization, Security Implementation, Government Compliance, Agile/Scrum\n\nDelivered comprehensive digitization solution improving trade administration efficiency, regulatory compliance, and user experience for customs operations.',
    'projects.bazar.title': 'Mauritius Agricultural Marketplace',
    'projects.bazar.client': 'Bazar Moris',
    'projects.bazar.description': 'Backend Developer contributing to digital marketplace development connecting planters, retailers, wholesalers, and transformers.\n\n• Implemented real-time trading chat system enhancing user communication and engagement\n• Developed dynamic pricing engine for responsive market pricing and competitiveness\n• Built shop management modules using Laravel for comprehensive store operations\n• Created order processing systems for streamlined transaction management\n• Developed inventory tracking functionality for real-time stock management\n• Integrated WebSockets for real-time updates and notifications across the platform\n• Ensured e-commerce compliance and regulatory adherence for secure transactions\n• Implemented user data protection and privacy safeguards\n• Optimized database queries for handling high-volume agricultural trading data\n• Created API endpoints for mobile and web platform integration\n• Developed automated notification systems for order status updates\n• Implemented secure payment processing and transaction validation\n• Built comprehensive reporting tools for marketplace analytics\n• Ensured platform scalability for growing user base and transaction volumes\n\nTechnology Stack: Laravel, PHP, WebSockets, Real-time Processing, E-commerce Compliance, Database Optimization, API Development, Payment Processing, Security Implementation\n\nContributed to successful digital marketplace improving agricultural trade efficiency, connecting stakeholders, and enhancing market accessibility for Mauritius agricultural sector.',
    'projects.ancs.title': 'Multilingual Compliance & Security Platform – Tunisia',
    'projects.ancs.client': 'Tunisia\'s National Agency for Cybersecurity (ANCS)',
    'projects.ancs.description': 'Lead Developer & Project Committee Manager for national platform serving technology companies and audit firms in Tunisia, ensuring IT compliance and security.\n\n• Architecture & Design: Designed and implemented highly scalable cloud-based architecture based on Spring Boot and Laravel, integrating critical modules for content management and regulatory compliance\n• Key Development: Implemented advanced security reporting features (incidents, vulnerabilities, annual audits) enabling companies to ensure compliance tracking and audit firms to centralize their reports\n• Security & Compliance: Integrated strong authentication via TunTrust, Tunisia\'s unique electronic signature provider (cryptographic USB or registered email), OWASP cybersecurity standards compliance, and W3C/WAI accessibility standards adherence\n• Additional Modules: Implemented optimized SEO features and multilingual content management to enhance platform visibility and accessibility\n• Technical Leadership: Directed project committee, guided architectural decisions, provided technical mentorship to teams, and validated critical developments\n• Deliverables: Delivered robust and compliant solution enabling Tunisian technology companies and security firms to meet legal requirements and international standards\n\nTechnology Stack: Spring Boot, Java, Laravel, PHP, Cloud Architecture, Content Management Systems, Security Reporting, TunTrust Integration, Electronic Signatures, OWASP Security Standards, W3C/WAI Accessibility, SEO Optimization, Multilingual Support, Project Leadership, Database Management, API Development',
    
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
    'projects.adapt.title': 'Plateforme ADAPT - Crédit Agricole',
    'projects.adapt.client': 'Crédit Agricole (projet financé par l\'UE)',
    'projects.adapt.description': 'Développeur Principal & Responsable Comité Technique pour une plateforme numérique financée par l\'UE automatisant les processus d\'allocation de fonds.\n\n• Conception d\'une architecture logicielle complète avec microservices Spring Boot, frontend Angular, bases de données relationnelles/NoSQL et pipelines CI/CD\n• Intégration de WSO2 API Management pour l\'exposition, la gouvernance et la sécurisation des services\n• Construction d\'une architecture de plateforme évolutive, modulaire et évolutive\n• Développement d\'un générateur de formulaires dynamiques et d\'un moteur de scoring flexible pour la prise de décision automatisée\n• Implémentation de processus d\'évaluation personnalisables et de systèmes de vérification d\'éligibilité\n• Création d\'une gestion de workflow multi-rôles supportant des centaines d\'utilisateurs simultanés\n• Direction du comité de développement et orientation des choix technologiques\n• Réalisation de revues de code et mentorat des développeurs juniors\n• Promotion des standards techniques et adoption des meilleures pratiques\n• Optimisation des APIs et de la persistance des données pour gérer de gros volumes de requêtes\n• Implémentation de standards de sécurité complets (Spring Security, OAuth2, Keycloak, WSO2 API Manager)\n• Garantie de l\'évolutivité et de la fiabilité de la plateforme sous charge\n• Établissement de pipelines CI/CD (GitLab CI, Jenkins, SonarQube)\n• Gestion du déploiement Kubernetes sur infrastructure AWS\n• Garantie de livraisons fréquentes et stables\n• Participation active aux cérémonies Scrum (Daily, Sprint Planning, Review, Refinement)\n• Collaboration étroite avec les Product Owners et Business Analysts\n• Alignement du développement avec les exigences métier et les besoins des parties prenantes\n\nStack Technologique : Spring Boot, Java, APIs RESTful, Architecture Microservices, Angular, TypeScript, Design Responsive, PostgreSQL, MongoDB, Redis, Spring Security, OAuth2, Keycloak, WSO2 API Manager, GitLab CI, Jenkins, SonarQube, Docker, Kubernetes, AWS (EKS, RDS, S3, CloudWatch), Prometheus, Grafana, ELK Stack, JUnit, Mockito, Cypress, Jest\n\nLivraison d\'une plateforme robuste, modulaire et évolutive adoptée par le Crédit Agricole pour digitaliser les processus d\'allocation de fonds, supportant la prise de décision automatisée et les opérations rationalisées.',
    'projects.mae.title': 'Application Mobile & Plateforme Web - Assurance MAE',
    'projects.mae.client': 'MAE (Mutuelle Assurance de l\'Enseignement)',
    'projects.mae.description': 'Lead Développeur Backend / Full-Stack pour la modernisation des services digitaux de la MAE (Mutuelle Assurance de l\'Enseignement).\n\n• Conception et implémentation des services backend en Spring Boot pour l\'application mobile (simulateurs, gestion des abonnements, contrats d\'assurance auto, vie, bateau, bâtiment, etc.)\n• Construction d\'APIs REST évolutives supportant un portefeuille complet de produits d\'assurance\n• Implémentation du traitement sécurisé des données et de la logique métier pour les opérations d\'assurance\n• Contribution au développement d\'une plateforme web en Laravel offrant les mêmes fonctionnalités que l\'application mobile\n• Garantie d\'une expérience utilisateur multi-canal homogène entre les plateformes\n• Intégration d\'un design responsive pour une compatibilité optimale multi-appareils\n• Participation à la création d\'un nouveau système d\'information basé sur Spring Boot et Angular\n• Remplacement de l\'ancien système de gestion pour améliorer l\'efficacité des opérations internes\n• Modernisation de l\'architecture des données et des processus de workflow\n• Mise en place d\'APIs REST sécurisées avec authentification et autorisation\n• Intégration avec les systèmes existants et optimisation des flux de données\n• Garantie de l\'évolutivité du système et optimisation des performances\n• Travail en méthode Scrum (Daily, Sprint Planning, Review, Refinement)\n• Collaboration avec des équipes pluridisciplinaires pour aligner les développements sur les besoins métiers\n• Maintien d\'une communication étroite avec les parties prenantes et product owners\n\nStack Technologique : Spring Boot, Java, Laravel, PHP, Angular, TypeScript, Design Web Responsive, Intégration API REST, MySQL, PostgreSQL, Spring Security, OAuth2, Authentification API, Agile/Scrum, Revues de code, CI/CD\n\nLivraison d\'un écosystème digital complet (mobile, web et SI interne) améliorant la souscription, la gestion des polices et la satisfaction des clients de la MAE.',
    'projects.cashless.title': 'Solution de Paiement NFC - Secteur Tourisme & Resorts',
    'projects.cashless.client': 'Secteur Tourisme & Resorts',
    'projects.cashless.description': 'Lead Développeur & Analyste Fonctionnel pour solution de paiement numérique basée sur cartes NFC, destinée aux complexes touristiques et hôtels.\n\n• Conception de l\'architecture backend avec Laravel et intégration avec les systèmes de gestion des établissements (comptabilité, gestion d\'événements, facturation)\n• Gestion de l\'authentification et des droits via Keycloak\n• Implémentation des modules de gestion des clients et cartes NFC pour fluidifier les opérations\n• Création du système de gestion des événements (réservations, activités) et des paiements cashless pour améliorer l\'expérience utilisateur\n• Développement de tableaux de bord complexes et de vues analytiques (revenus, historique de consommation, transactions) pour optimiser la prise de décision des gestionnaires\n• Mise en place de mécanismes de sécurité pour protéger les transactions NFC et optimisation du traitement des flux de données en temps réel\n• Participation aux rituels Scrum et interaction avec les parties prenantes pour assurer l\'adéquation entre besoins métier et développements techniques\n• Garantie de l\'évolutivité de la plateforme et des performances pour le traitement de gros volumes de transactions\n• Intégration avec les systèmes de gestion hôtelière existants et terminaux de point de vente\n• Développement d\'outils de reporting complets pour le suivi financier et les insights opérationnels\n• Implémentation de la surveillance des transactions en temps réel et des mécanismes de détection de fraude\n• Création d\'interfaces conviviales pour les interactions du personnel et des clients\n\nStack Technologique : Laravel, PHP, Keycloak, Technologie NFC, MySQL, APIs REST, Traitement temps réel, Développement de tableaux de bord, Implémentation sécurité, Intégration système, Agile/Scrum\n\nLivraison d\'une plateforme complète améliorant l\'efficacité opérationnelle des resorts et la satisfaction des clients via une expérience de paiement simplifiée et sécurisée.',
    'projects.customs.title': 'Digitalisation de la Gestion des Renseignements Contraignants',
    'projects.customs.client': 'Direction Générale des Douanes Tunisiennes (DGD)',
    'projects.customs.description': 'Chef de Projet / Développeur Full-Stack pour la digitalisation de la gestion des Renseignements Contraignants, assurant la conformité avec l\'OMC, les accords commerciaux africains et les réglementations gouvernementales.\n\n• Conception d\'une architecture RESTful avec frontend React/Angular et backend Spring Boot supportant jusqu\'à 80 000 utilisateurs\n• Implémentation de workflows BPMN pour différents types de demandes, permettant la gestion automatisée des processus et le suivi de la soumission à l\'approbation\n• Intégration de signatures électroniques pour le traitement sécurisé des documents et l\'authentification\n• Développement de tableaux de bord en temps réel pour les statistiques et les rapports afin de rationaliser l\'administration commerciale\n• Sécurisation des données gouvernementales et douanières sensibles via une passerelle API, appliquant l\'authentification, l\'autorisation, le filtrage du trafic et la conformité réglementaire\n• Coordination de l\'équipe de développement, alignement de l\'implémentation technique avec les exigences métier\n• Garantie de l\'évolutivité, des performances et de la sécurité pour les opérations gouvernementales à haut volume\n• Implémentation de pistes d\'audit complètes et de mécanismes de reporting de conformité\n• Développement du support multilingue pour la documentation commerciale internationale\n• Création de systèmes de notification automatisés pour les mises à jour de statut des processus\n• Intégration avec les systèmes douaniers existants et les bases de données commerciales internationales\n• Implémentation du contrôle d\'accès basé sur les rôles pour différents types d\'utilisateurs et permissions\n• Optimisation des performances de base de données pour gérer de gros volumes de données commerciales\n• Établissement de systèmes de surveillance et d\'alerte pour la santé et les performances du système\n\nStack Technologique : Spring Boot, Java, React, Angular, BPMN, Passerelle API, Signatures Électroniques, APIs RESTful, Optimisation Base de Données, Implémentation Sécurité, Conformité Gouvernementale, Agile/Scrum\n\nLivraison d\'une solution de digitalisation complète améliorant l\'efficacité de l\'administration commerciale, la conformité réglementaire et l\'expérience utilisateur pour les opérations douanières.',
    'projects.bazar.title': 'Marketplace Agricole de Maurice',
    'projects.bazar.client': 'Bazar Moris',
    'projects.bazar.description': 'Développeur Backend contribuant au développement d\'une marketplace numérique connectant planteurs, détaillants, grossistes et transformateurs.\n\n• Implémentation d\'un système de chat commercial en temps réel améliorant la communication et l\'engagement des utilisateurs\n• Développement d\'un moteur de tarification dynamique pour une tarification de marché réactive et compétitive\n• Construction de modules de gestion de boutique utilisant Laravel pour des opérations de magasin complètes\n• Création de systèmes de traitement des commandes pour une gestion rationalisée des transactions\n• Développement de fonctionnalités de suivi d\'inventaire pour la gestion des stocks en temps réel\n• Intégration de WebSockets pour les mises à jour et notifications en temps réel sur la plateforme\n• Garantie de la conformité e-commerce et du respect réglementaire pour des transactions sécurisées\n• Implémentation de la protection des données utilisateur et des garanties de confidentialité\n• Optimisation des requêtes de base de données pour gérer des données de trading agricole à haut volume\n• Création d\'endpoints API pour l\'intégration des plateformes mobiles et web\n• Développement de systèmes de notification automatisés pour les mises à jour de statut des commandes\n• Implémentation du traitement sécurisé des paiements et de la validation des transactions\n• Construction d\'outils de reporting complets pour l\'analyse de la marketplace\n• Garantie de l\'évolutivité de la plateforme pour une base d\'utilisateurs et des volumes de transactions croissants\n\nStack Technologique : Laravel, PHP, WebSockets, Traitement temps réel, Conformité E-commerce, Optimisation Base de Données, Développement API, Traitement des Paiements, Implémentation Sécurité\n\nContribution au succès d\'une marketplace numérique améliorant l\'efficacité du commerce agricole, connectant les parties prenantes et améliorant l\'accessibilité du marché pour le secteur agricole mauricien.',
    'projects.ancs.title': 'Plateforme Multilingue de Conformité & Sécurité – Tunisie',
    'projects.ancs.client': 'Agence Nationale de Cybersécurité de Tunisie (ANCS)',
    'projects.ancs.description': 'Lead Développeur & Responsable Comité de Projet pour plateforme nationale destinée aux entreprises technologiques et cabinets d\'audit en Tunisie, visant à assurer la conformité et la sécurité informatique.\n\n• Architecture & Conception : Conception et mise en place d\'une architecture cloud-based reposant sur Spring Boot et Laravel, intégrant des modules critiques pour la gestion de contenu et la conformité réglementaire\n• Développement Clé : Implémentation de fonctionnalités avancées de reporting de sécurité (incidents, vulnérabilités, audits annuels), permettant aux entreprises d\'assurer leur suivi de conformité et aux cabinets d\'audit de centraliser leurs rapports\n• Sécurité & Conformité : Intégration de l\'authentification forte via TunTrust, l\'unique fournisseur de signature électronique en Tunisie (USB cryptographique ou email enregistré), respect des normes OWASP pour la cybersécurité et conformité aux standards W3C/WAI pour l\'accessibilité\n• Modules Supplémentaires : Mise en place de fonctionnalités de SEO optimisé et de gestion de contenu multilingue afin de renforcer la visibilité et l\'accessibilité de la plateforme\n• Leadership Technique : Direction du comité de projet, pilotage des décisions architecturales, mentorat technique des équipes et validation des développements critiques\n• Livrables : Livraison d\'une solution robuste et conforme, permettant aux entreprises tunisiennes du secteur technologique et aux cabinets de sécurité de répondre aux exigences légales et aux standards internationaux\n\nStack Technologique : Spring Boot, Java, Laravel, PHP, Architecture Cloud, Systèmes de Gestion de Contenu, Reporting de Sécurité, Intégration TunTrust, Signatures Électroniques, Standards de Sécurité OWASP, Accessibilité W3C/WAI, Optimisation SEO, Support Multilingue, Leadership de Projet, Gestion Base de Données, Développement API',
    
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
