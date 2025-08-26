import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <footer className="bg-gray-50 border-t border-gray-200 py-20">
      <div className="grid-aligned">
        <div className="col-span-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-light text-black tracking-wide">
              © 2024 Mahdi Ben Amor
            </p>
            <p className="text-xs font-light text-gray-500 tracking-wide">
              Crafted with precision and attention to detail
            </p>
          </div>
          
          <div className="flex gap-10">
            <a 
              href="mailto:mahdi.benamor@example.com" 
              className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/mahdibenamor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/mahdibenamor" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300 tracking-wide"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      </footer>
    </motion.div>
  );
}
