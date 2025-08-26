import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';
import { FiMail } from 'react-icons/fi';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}>
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-black">Get in Touch</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            {t('contact.title')} Currently open to full-time, remote, and freelance opportunities worldwide. Let's connect and build impactful solutions together.
          </p>
          <a href={`mailto:${t('contact.email')}`} className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-light border border-gray-300 hover:bg-gray-900 hover:scale-105 transition-all">
            <FiMail size={24} /> Say Hello
          </a>
        </div>
      </motion.div>
    </section>
  );
}
