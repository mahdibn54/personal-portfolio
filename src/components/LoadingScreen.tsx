import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const greetings = [
    'Hello',        // English
    'Bonjour',      // French
    'مرحبا',        // Arabic
    'Hola',         // Spanish
    'Olá',          // Portuguese
    'Hej',          // Swedish/Danish/Norwegian
    'Hallo',        // Dutch
    'Ciao',         // Italian
    'こんにちは',    // Japanese
    '早上好',      // chinese
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < greetings.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Start exit animation
        setIsComplete(true);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [currentStep, greetings.length, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white"
              >
                {greetings[currentStep]}
              </motion.h1>
            </AnimatePresence>
            
            {/* Progress indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / greetings.length) * 100}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="h-px bg-white/30 mt-8 mx-auto max-w-xs"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
