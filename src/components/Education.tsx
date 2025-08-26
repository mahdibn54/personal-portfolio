import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';

export default function Education() {
  const { t } = useTranslation();
  return (
    <section id="education" className="min-h-screen px-6 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <h2 className="text-4xl md:text-6xl font-light text-center mb-12 text-black">
          {t('education.title')}
        </h2>
      </motion.div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 text-black">
        {/* Education */}
        <div>
          <h3 className="text-xl font-light">{t('education.msc.title')}</h3>
          <p className="text-gray-600">{t('education.msc.institution')}</p>
          <p className="text-sm text-gray-500">{t('education.msc.period')}</p>
        </div>
        <div>
          <h3 className="text-xl font-light">{t('education.bsc.title')}</h3>
          <p className="text-gray-600">{t('education.bsc.institution')}</p>
          <p className="text-sm text-gray-500">{t('education.bsc.period')}</p>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-light">{t('education.certifications.title')}</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>{t('education.certifications.aws')}</li>
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-xl font-light">{t('education.languages.title')}</h3>
          <p>{t('education.languages.text')}</p>
        </div>
      </div>
    </section>
  );
}
