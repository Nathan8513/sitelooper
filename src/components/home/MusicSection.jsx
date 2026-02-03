import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, ExternalLink, Calendar } from 'lucide-react';

const releases = [
  {
    title: 'Comment t\'aimer',
    type: 'Single',
    date: '12 décembre 2025',
    description: 'Un virage plus énergique, résolument tourné vers le pop rock. Le morceau déploie une énergie impactante et une intensité qui reflètent pleinement l\'identité du groupe sur scène.',
    spotifyUrl: 'https://open.spotify.com',
    featured: true,
  },
  {
    title: 'Dernier Verre',
    type: 'Album',
    date: '6 juillet 2025',
    description: 'Le premier album de Looper pose les bases de leur univers musical. Entre pop, rock et bossa nova, le groupe développe un son moderne et chaleureux.',
    spotifyUrl: 'https://open.spotify.com',
    featured: false,
  },
];

export default function MusicSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" className="py-32 px-6 bg-gradient-to-b from-black via-slate-950 to-black relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Discographie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Notre Musique
          </h2>
        </motion.div>

        <div className="space-y-8">
          {releases.map((release, index) => (
            <motion.div
              key={release.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative overflow-hidden rounded-3xl ${
                release.featured 
                  ? 'bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-slate-900 border border-blue-500/20' 
                  : 'bg-gradient-to-br from-gray-900 to-slate-900/50 border border-gray-800/50'
              } hover:border-gray-700/50 transition-all duration-500`}
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-4">
                      <span className={`text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full ${
                        release.featured 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-gray-800 text-gray-400'
                      }`}>
                        {release.type}
                      </span>
                      {release.featured && (
                        <span className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 text-white">
                          Nouveau
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold">{release.title}</h3>
                    
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{release.date}</span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {release.description}
                    </p>
                  </div>

                  <a
                    href={release.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full transition-all duration-300 ${
                      release.featured
                        ? 'bg-white text-black hover:scale-110'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spotify embed placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
          >
            <span>Découvrir toute la discographie</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}