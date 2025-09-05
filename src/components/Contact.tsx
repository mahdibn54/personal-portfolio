import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

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
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-xl">
            {t('contact.title')} Currently open to full-time, remote, and freelance opportunities worldwide. Let's connect and build impactful solutions together.
          </p>
          
          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href={`mailto:${t('hero.email')}`}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 rounded-lg min-w-[200px]">
              <FiMail size={20} />
              <span className="font-light">{t('hero.email')}</span>
            </a>
            
            <a 
              href={`tel:${t('hero.phone')}`}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 rounded-lg min-w-[200px]">
              <FiPhone size={20} />
              <span className="font-light">{t('hero.phone')}</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mahdi-ben-amor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 rounded-lg min-w-[200px]">
              <FiLinkedin size={20} />
              <span className="font-light">LinkedIn</span>
            </a>
          </div>
          
          {/* Primary CTA */}
          <a 
            href={`mailto:${t('hero.email')}`} 
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-light hover:bg-gray-900 hover:scale-105 transition-all duration-300 rounded-lg">
            <FiMail size={24} /> 
            Say Hello
          </a>
        </div>
      </motion.div>
    </section>
  );
}
