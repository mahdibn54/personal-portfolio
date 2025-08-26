import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';

import { SiSpringboot, SiPhp, SiDjango, SiDocker, SiJenkins, SiOpenai, SiPostgresql, SiPython, SiLaravel } from 'react-icons/si';

interface Tech {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
}

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: Tech[];
}

export default function Experience() {
  const { t } = useTranslation();
  
  const experiences = [
    {
      role: t('experience.current.role'),
      company: t('experience.current.company'),
      location: t('experience.current.location'),
      period: t('experience.current.period'),
      bullets: [
        t('experience.current.bullet1'),
        t('experience.current.bullet2'),
        t('experience.current.bullet3'),
        t('experience.current.bullet4'),
        t('experience.current.bullet5'),
        t('experience.current.bullet6'),
        t('experience.current.bullet7'),
        t('experience.current.bullet8'),
        t('experience.current.bullet9')
      ],
    tech: [
      { label: 'Spring Boot', icon: SiSpringboot },
      { label: 'PHP', icon: SiPhp },
      { label: 'Django', icon: SiDjango },
      { label: 'Docker', icon: SiDocker },
      { label: 'Jenkins', icon: SiJenkins },
      { label: 'OpenAI', icon: SiOpenai },
      { label: 'PostgreSQL', icon: SiPostgresql }
    ]
    },
    {
      role: t('experience.intern.role'),
      company: t('experience.intern.company'),
      location: t('experience.intern.location'),
      period: t('experience.intern.period'),
      bullets: [
        t('experience.intern.bullet1'),
        t('experience.intern.bullet2')
      ],
    tech: [
      { label: 'PHP', icon: SiPhp },
      { label: 'Laravel', icon: SiLaravel },
      { label: 'PostgreSQL', icon: SiPostgresql }
    ]
    }
  ];
  return (
    <section id="experience" className="min-h-screen px-6 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl md:text-6xl font-light text-center mb-12 text-black">
          {t('experience.title')}
        </h2>
      </motion.div>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp) => (
          <motion.div
            key={exp.role + exp.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <div className="group bg-gray-50 hover:bg-white p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300">
            <h3 className="text-xl font-light text-black group-hover:text-gray-700 transition-colors duration-300">
              {exp.role}
            </h3>
            <p className="text-gray-500 text-sm uppercase tracking-wide mb-1 font-medium">
              {exp.company} — {exp.location}
            </p>
            <p className="text-xs text-gray-400 mb-6">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm leading-relaxed mb-6">
              {exp.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            {/* Tech badges */}
            <div className="flex flex-wrap gap-3">
              {exp.tech.map(({ label, icon: Icon }) => (
                <span key={label} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-3 py-1.5 text-xs font-light hover:border-gray-300 transition-colors duration-200">
                  <Icon size={16} /> {label}
                </span>
              ))}
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
