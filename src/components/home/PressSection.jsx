import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Award, Newspaper } from 'lucide-react';

const pressItems = [
  {
    source: 'L\'Union',
    description: 'Première partie de Pierre Garnier',
    type: 'Article',
  },
  {
    source: 'Ouest France',
    description: 'Interview',
    type: 'Interview',
  },
  {
    source: 'TLSV',
    description: 'Looper à ses débuts',
    type: 'Reportage',
  },
  {
    source: 'Studyrama / AuFutur',
    description: 'Interview',
    type: 'Interview',
  },
];

const achievements = [
  {
    title: 'Prix du public',
    event: 'Tremplin Premières Scènes',
    icon: Award,
  },
];

export default function PressSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="press" className="py-32 px-6 bg-gradient-to-b from-black to-slate-950 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Presse
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Vu sur
          </h2>
        </motion.div>

        {/* Achievement */}
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 p-8 bg-gradient-to-r from-yellow-600/10 via-amber-600/5 to-yellow-600/10 rounded-3xl border border-yellow-500/20 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Award className="w-6 h-6 text-yellow-500" />
              <span className="text-sm font-medium tracking-wider uppercase text-yellow-500">
                Distinction
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">{achievement.title}</h3>
            <p className="text-gray-400 mt-2">{achievement.event}</p>
          </motion.div>
        ))}

        {/* Press grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pressItems.map((item, index) => (
            <motion.div
              key={item.source}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-gray-900/50 rounded-2xl border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center">
                  <Newspaper className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
                  {item.type}
                </span>
              </div>
              <h4 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
                {item.source}
              </h4>
              <p className="text-gray-500 text-sm mt-1">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}