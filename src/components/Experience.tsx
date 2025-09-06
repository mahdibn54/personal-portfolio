import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from '@/context/TranslationContext';
import { FiX, FiMapPin, FiCalendar } from 'react-icons/fi';
import { SiSpringboot, SiPhp, SiDjango, SiDocker, SiJenkins, SiOpenai, SiPostgresql, SiPython, SiLaravel, SiReact, SiAngular, SiNextdotjs } from 'react-icons/si';

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
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  
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
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'Python', icon: SiPython },
      { label: 'Laravel', icon: SiLaravel },
      { label: 'React', icon: SiReact },
      { label: 'Angular', icon: SiAngular },
      { label: 'Next.js', icon: SiNextdotjs },
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
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.period}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -4 }}>
            <button
              onClick={() => setSelectedExperience(exp)}
              className="group bg-gray-50 hover:bg-white p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 w-full text-left cursor-pointer">
              <h3 className="text-lg font-light text-black group-hover:text-gray-700 transition-colors duration-300 mb-2">
                {exp.role}
              </h3>
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-4 font-medium">
                {exp.company} — {exp.location}
              </p>
              
              {/* Tech badges - show first 4 */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.slice(0, 4).map(({ label, icon: Icon }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-2 py-1 text-xs font-light">
                    <Icon size={14} /> {label}
                  </span>
                ))}
                {exp.tech.length > 4 && (
                  <span className="inline-flex items-center px-2 py-1 text-xs text-gray-500 bg-gray-100 border border-gray-200">
                    +{exp.tech.length - 4} more
                  </span>
                )}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Experience Modal */}
      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExperience(null)}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div className="relative bg-gray-50 p-6 border-b border-gray-100">
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 p-2 bg-white hover:bg-gray-100 rounded-full transition-colors">
                  <FiX size={20} />
                </button>
                
                <div className="pr-12">
                  <h2 className="text-2xl md:text-3xl font-light text-black mb-2">
                    {selectedExperience.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{selectedExperience.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiMapPin size={14} />
                      <span className="text-sm">{selectedExperience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiCalendar size={14} />
                      <span className="text-sm">{selectedExperience.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="space-y-6">
                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-lg font-medium text-black mb-4">Key Responsibilities & Achievements</h3>
                    <ul className="space-y-3">
                      {selectedExperience.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-medium text-black mb-4">Technologies & Tools</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedExperience.tech.map(({ label, icon: Icon }) => (
                        <div key={label} className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                          <Icon size={18} />
                          <span className="font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Close Button */}
                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
