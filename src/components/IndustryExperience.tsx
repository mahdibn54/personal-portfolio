import { motion } from 'framer-motion';
import { useTranslation } from '@/context/TranslationContext';
import { 
  FiDollarSign, 
  FiRadio, 
  FiMapPin, 
  FiShoppingBag, 
  FiShield 
} from 'react-icons/fi';

const industries = [
  {
    icon: FiDollarSign,
    title: 'Banking & Insurance',
    clients: ['Attijari Bank', 'Attijari Leasing', 'MAE Assurance', 'Adapt'],
    color: 'text-blue-600'
  },
  {
    icon: FiRadio,
    title: 'Telecommunications & Media',
    clients: ['Ooredoo', 'Tunisie Télécom', 'Mattel'],
    color: 'text-purple-600'
  },
  {
    icon: FiMapPin,
    title: 'Tourism & Transport',
    clients: ['Magic Life Hotels & Resorts', 'Tunisair'],
    color: 'text-green-600'
  },
  {
    icon: FiShoppingBag,
    title: 'Retail & Consumer',
    clients: ['Magasin Générale', 'Fatales', 'La Cave Privée'],
    color: 'text-orange-600'
  },
  {
    icon: FiShield,
    title: 'Public Sector & International',
    clients: ['Tunisian Customs', 'National Cybersecurity Agency', 'European Union', 'GIZ'],
    color: 'text-red-600'
  }
];

export default function IndustryExperience() {
  const { t } = useTranslation();
  
  return (
    <section id="industry-experience" className="min-h-screen px-6 py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-light text-center mb-4 text-black">
          Industry Experience
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Delivered solutions across diverse industries, from financial services to public sector initiatives
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300 mb-6`}>
                <industry.icon size={24} className={`${industry.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-light text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {industry.title}
              </h3>

              {/* Clients */}
              <div className="space-y-2">
                {industry.clients.map((client, clientIndex) => (
                  <div
                    key={client}
                    className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${industry.color.replace('text-', 'bg-')} mr-3 opacity-60`}></div>
                    {client}
                  </div>
                ))}
              </div>

              {/* Client count badge */}
              <div className="mt-6 pt-4 border-t border-gray-50">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded-full">
                  {industry.clients.length} client{industry.clients.length > 1 ? 's' : ''}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white border border-gray-100 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-light text-black">5</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Industries</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-black">17+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Clients</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-light text-black">4+</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">Years</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
