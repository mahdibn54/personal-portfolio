import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';
import { 
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiNodedotjs, SiAngular, SiSpringboot, SiLaravel, SiDjango, 
  SiPostgresql, SiMysql, SiMongodb, SiDocker, SiJenkins
} from 'react-icons/si';

const skills = [
  { icon: SiJavascript, label: 'JavaScript' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiReact, label: 'React' },
  { icon: SiNextdotjs, label: 'Next.js' },
  { icon: SiTailwindcss, label: 'Tailwind CSS' },
  { icon: SiFramer, label: 'Framer Motion' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiAngular, label: 'Angular' },
  { icon: SiSpringboot, label: 'Spring Boot' },
  { icon: SiLaravel, label: 'Laravel' },
  { icon: SiDjango, label: 'Django' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiMysql, label: 'MySQL' },
  { icon: SiMongodb, label: 'MongoDB' },
  { icon: SiDocker, label: 'Docker' },
  { icon: SiJenkins, label: 'Jenkins' }
];

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="min-h-screen px-6 py-24 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-light text-center mb-12 text-black">
        {t('skills.title')}
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            className="group flex flex-col items-center text-center p-8 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300"
            whileHover={{ scale: 1.02, y: -2 }}>
            <Icon size={48} className="text-gray-700 group-hover:text-black mb-4 transition-colors duration-300" />
            <span className="text-sm font-light text-gray-600 group-hover:text-black transition-colors duration-300">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
