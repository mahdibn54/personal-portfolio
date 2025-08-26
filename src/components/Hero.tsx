import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from '@/context/TranslationContext';
import NoiseBackground from './NoiseBackground';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen w-full relative flex flex-col justify-center overflow-hidden bg-white" id="hero">
      <NoiseBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20 w-full">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.9] mb-8 text-black col-span-12">
            Mahdi Ben Amor—
          </h1>
        </motion.div>
        
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-16 col-span-12">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl">
            {/* {t('hero.tagline')} */}
          </p>
        </motion.div>
        
        {/* Recent work section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="col-span-12">
          <h2 className="text-xs uppercase tracking-widest text-gray-400 mb-8 font-medium">
            Recent work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI Claims Chatbot', client: 'MAE Assurance', year: '2024' },
              { title: 'Digital Banking Portal', client: 'Attijari Bank', year: '2024' },
              { title: 'Telecom Self-Care App', client: 'Ooredoo', year: '2023' },
              { title: 'E-passport Verification', client: 'Tunisian Customs', year: '2023' }
            ].map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
                className="group cursor-pointer transform hover:scale-[1.02] hover:opacity-80 transition-all duration-300">
                <div className="aspect-[4/3] bg-gray-50 mb-4 overflow-hidden border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 via-gray-75 to-gray-100 group-hover:from-gray-100 group-hover:to-gray-200 transition-all duration-500 relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-t from-black transition-opacity duration-300"></div>
                  </div>
                </div>
                <h3 className="text-base font-light mb-1 text-black">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 font-light">
                  {project.client} • {project.year}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
