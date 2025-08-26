import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/context/TranslationContext';
import { 
  FiDollarSign, 
  FiRadio, 
  FiMapPin, 
  FiShoppingBag, 
  FiShield 
} from 'react-icons/fi';

interface Project {
  title: string;
  client: string;
  description: string;
  image: string;
  link?: string;
  url?: string;
  domain: string;
}

interface Domain {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  bgColor: string;
}

const domains: Domain[] = [
  {
    id: 'banking',
    title: 'Banking & Insurance',
    icon: FiDollarSign,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'telecom',
    title: 'Telecommunications & Media',
    icon: FiRadio,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 'tourism',
    title: 'Tourism & Transport',
    icon: FiMapPin,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'retail',
    title: 'Retail & Consumer',
    icon: FiShoppingBag,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'public',
    title: 'Public Sector & International',
    icon: FiShield,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

const projects: Project[] = [
  {
    title: 'ADAPT Fund Platform',
    client: 'Italian Agency for Development Cooperation (AICS)',
    description: 'Led development of EU-funded digital platform for private investments in Tunisia\'s agriculture and fishing sectors. Implemented scalable architecture with auto-evaluation scoring, eligibility checks, document uploads, and multi-role workflows for hundreds of users.',
    image: '/projects/adapt.jpg',
    domain: 'public',
    url: 'https://plateforme.adapt-tunisie.org/'
  },
  {
    title: 'Binding Information Management Platform',
    client: 'Tunisian Customs Authority (DGD)',
    description: 'Led development of web application to digitize Binding Information management, aligning with WTO and African trade agreements. RESTful architecture with React/Angular frontend, Spring Boot backend, supporting up to 80,000 users with electronic signatures and real-time stats.',
    image: '/projects/customs.jpg',
    domain: 'public',
    url: 'http://rc.douane.gov.tn/login'
  },
  {
    title: 'National Agency for Cybersecurity Website',
    client: 'Tunisia\'s National Agency for Cybersecurity (ANCS)',
    description: 'Led development of multilingual (Arabic, French, English) website with cloud-based architecture. Integrated modules for content management, incident/vulnerability reporting, 2FA authentication, SEO, OWASP security, and W3C/WAI compliance.',
    image: '/projects/ancs.jpg',
    domain: 'public',
    url: 'https://www.ancs.tn'
  },
  {
    title: 'Bazar Moris Agricultural Marketplace',
    client: 'JSB COVID PREP Project',
    description: 'Contributed as backend developer to Mauritius Agricultural Marketplace. Implemented real-time trading chat system and dynamic pricing system, supporting planters, retailers, wholesalers, and transformers with shop management and order processing.',
    image: '/projects/bazar.jpg',
    domain: 'retail',
    url: 'https://bazarmoris.mu/en'
  },
  {
    title: 'Cashless Wallet System',
    client: 'Tourism & Resort Industry',
    description: 'Led development and business analysis for NFC card-based payment solution targeting resorts and tourism. Designed complex dashboards, revenue/history tables, event management system, and client/card management features for enhanced operational efficiency.',
    image: '/projects/cashless.jpg',
    domain: 'retail'
  }
];

export default function ProjectsList() {
  const { t } = useTranslation();
  
  const groupedProjects = domains.map(domain => ({
    ...domain,
    projects: projects.filter(p => p.domain === domain.id)
  })).filter(domain => domain.projects.length > 0);

  return (
    <section id="projects" className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-light text-center mb-4 text-black">
            {t('projects.title')}
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            Featured projects across diverse industries, showcasing scalable solutions and technical expertise
          </p>
        </motion.div>

        <div className="space-y-16">
          {groupedProjects.map((domain, domainIndex) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: domainIndex * 0.1 }}
              viewport={{ once: true }}>
              
              {/* Domain Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${domain.bgColor}`}>
                  <domain.icon size={24} className={domain.color} />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-black">{domain.title}</h3>
                  <p className="text-sm text-gray-500">{domain.projects.length} project{domain.projects.length > 1 ? 's' : ''}</p>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {domain.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: projectIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -4 }}>
                    <a
                      href={project.url ?? project.link ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden group border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg">
                    
                    <div className="relative h-48 md:h-56 bg-gray-50">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23374151'%3E${project.title}%3C/text%3E%3C/svg%3E`;
                        }}
                      />
                      {/* Domain badge */}
                      <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2 py-1 ${domain.bgColor} rounded-full`}>
                        <domain.icon size={12} className={domain.color} />
                        <span className={`text-xs font-medium ${domain.color}`}>{domain.title.split(' ')[0]}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-white">
                      <h4 className="text-base font-light mb-2 text-black group-hover:text-gray-700 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-500 text-xs uppercase tracking-wide mb-3 font-medium">{project.client}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}>
          <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-gray-50 border border-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-light text-black">{groupedProjects.length}</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Industries</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-black">{projects.length}</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-black">17+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Clients</div>
            </div>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
