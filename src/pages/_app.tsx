import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { TranslationProvider } from '@/context/TranslationContext';
import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <TranslationProvider>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && <Component {...pageProps} />}
    </TranslationProvider>
  );
}
