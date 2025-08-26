import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '../context/TranslationContext';

export default function ProfileHero() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-12">
          <div className="relative group">
            {/* Main photo container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-gray-100 group-hover:border-gray-200 transition-all duration-500 shadow-lg group-hover:shadow-xl">
              <Image
                src="/images/profile.jpeg"
                alt={t('hero.name')}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                priority
                onError={(e) => {
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Ccircle cx='150' cy='150' r='150' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='16' fill='%23374151'%3E${t('hero.name')}%3C/text%3E%3C/svg%3E`;
                }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            </div>
            
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border border-gray-50 group-hover:border-gray-100 transition-colors duration-500"></div>
            
            {/* Floating accent */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-4 text-black">
            {t('hero.name')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light tracking-wide">
            {t('hero.title')}
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-light">
          <a 
            href={`mailto:${t('hero.email')}`}
            className="hover:text-black transition-colors duration-300"
          >
            {t('hero.email')}
          </a>
          <span className="hidden md:inline">|</span>
          <span>{t('hero.phone')}</span>
          <span className="hidden md:inline">|</span>
          <a 
            href="https://www.linkedin.com/in/mahdi-ben-amor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            {t('hero.linkedin')}
          </a>
          <span className="hidden md:inline">|</span>
          <a 
            href="https://github.com/mahdibenamor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-300"
          >
            {t('hero.github')}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-gray-300 to-transparent"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full mx-auto mt-2 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
}
