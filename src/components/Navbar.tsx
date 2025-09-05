import Link from 'next/link';
import { useTranslation } from '@/context/TranslationContext';
import { motion } from 'framer-motion';

const links = [
  { href: '#about', key: 'nav.about' },
  { href: '#projects', key: 'nav.projects' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#experience', key: 'nav.experience' },
  // { href: '#education', key: 'nav.education' },
  { href: '#contact', key: 'nav.contact' },
];

export default function Navbar() {
  const { locale, setLocale, t } = useTranslation();
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
    >
      <div className="grid-aligned py-6">
        <div className="flex items-center justify-between col-span-12">
          <Link href="#" className="text-xl font-light tracking-tight text-black">
            <span>MB</span>
          </Link>
          <ul className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-light">
            {links.map(({ href, key }) => (
              <li key={href}>
                <Link href={href} className="text-gray-600 hover:text-black transition-colors text-wide">
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            {(['en', 'fr'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`uppercase text-sm font-light tracking-wide transition-colors ${
                  locale === l ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
