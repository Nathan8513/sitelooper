import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const bandMembers = [
  { name: 'Nathan Ricard', role: 'Guitare' },
  { name: 'Zacharie Rivoisy', role: 'Basse & Chant' },
  { name: 'Abraham Dagbert', role: 'Batterie' },
  { name: 'Quentin Vuillemin', role: 'Piano & Chant' },
];

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-black relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />
      
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Band photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-800/50">
              <img 
                src="https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=2069&auto=format&fit=crop"
                alt="Looper band"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Text content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
                Le Groupe
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
                Né d'une amitié et d'une passion commune
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Looper voit le jour en Vendée avec une envie claire : <span className="text-white font-medium">créer une musique instinctive et sans frontières</span>. Au fil des années, le groupe affine son identité, mêlant pop, rock et blues dans un son à la fois libre et sincère.
              </p>
              <p>
                Porté par une <span className="text-white font-medium">forte cohésion et une énergie naturelle</span>, Looper s'impose rapidement sur scène. Après une série de concerts estivaux, le groupe se fait remarquer au warm-up du N'Joy Festival avant de conquérir le public en première partie de <span className="text-white font-medium">Pierre Garnier</span> à la Foire en Scène.
              </p>
            </div>
          </div>

          {/* Band members - removed since we have it displayed elsewhere */}
          <div className="lg:hidden space-y-6 order-3">
            <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
              Les Membres
            </span>
            <div className="grid grid-cols-2 gap-4">
              {bandMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}