import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center mb-16">
      <div className="relative group">
        {/* Photo container */}
        <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden border border-gray-200 group-hover:border-gray-300 transition-all duration-300">
          <Image
            src="/images/profile.jpeg" // You can replace this with your actual photo path
            alt="Mahdi Ben Amor"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            priority
            onError={(e) => {
              // Fallback to a placeholder if image fails to load
              e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%23374151'%3EProfile Photo%3C/text%3E%3C/svg%3E";
            }}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Decorative border */}
        <div className="absolute -inset-2 border border-gray-100 -z-10 group-hover:border-gray-200 transition-colors duration-300"></div>
      </div>
    </motion.div>
  );
}
