import React from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Users, Sparkles } from 'lucide-react';

const highlights = [
  {
    event: 'Foire en Scène',
    description: 'Première partie de Pierre Garnier',
    year: '2025',
    icon: Sparkles,
  },
  {
    event: 'N\'Joy Festival',
    description: 'Warm-up officiel',
    year: '2025',
    icon: Users,
  },
];

export default function LiveSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="live" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Concerts
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Live
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Sur scène, Looper se démarque par son intensité et sa proximité avec le public. 
            Après des tournées estivales, le groupe continue de séduire de nouveaux publics à chaque concert.
          </p>
        </motion.div>

        {/* Live photo showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-3xl overflow-hidden border border-gray-800/50"
        >
          <img 
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop"
            alt="Looper concert"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.event}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-3xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-500">{item.year}</span>
                  <h3 className="text-xl font-semibold mt-1 group-hover:text-blue-400 transition-colors">
                    {item.event}
                  </h3>
                  <p className="text-gray-400 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center p-12 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl border border-gray-800/50"
        >
          <h3 className="text-2xl font-bold mb-4">Vous souhaitez nous booker ?</h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Pour toute demande de concert, festival ou événement privé, contactez notre équipe.
          </p>
          <a
            href="mailto:looper.pro.contact@gmail.com"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300"
          >
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}