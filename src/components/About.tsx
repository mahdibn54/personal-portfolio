import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';
import ProfilePhoto from './ProfilePhoto';

export default function About() {
  const { t } = useTranslation();
  return (
    <section id="about" className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* <ProfilePhoto /> */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-black">
            {t('about.title')}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">
            {t('about.summary')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
