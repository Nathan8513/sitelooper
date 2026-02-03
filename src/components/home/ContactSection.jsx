import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Instagram, Music2, Facebook } from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@looper_off',
    url: 'https://www.instagram.com/looper_off/',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    handle: '@looper_off',
    url: 'https://www.tiktok.com/@looper_off',
    icon: Music2,
  },
  {
    name: 'Facebook',
    handle: 'loopereffect',
    url: 'https://www.facebook.com/loopereffect',
    icon: Facebook,
  },
];

export default function ContactSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 bg-slate-950 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Restons en contact
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Main contact */}
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:looper.pro.contact@gmail.com"
              className="group flex items-center gap-5 p-6 bg-gray-900/50 rounded-2xl border border-gray-800/50 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <span className="text-sm text-gray-500">Email professionnel</span>
                <p className="font-medium text-lg mt-1 group-hover:text-blue-400 transition-colors">
                  looper.pro.contact@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+33684410338"
              className="group flex items-center gap-5 p-6 bg-gray-900/50 rounded-2xl border border-gray-800/50 hover:border-green-500/30 hover:bg-gray-900/80 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600/20 to-green-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <span className="text-sm text-gray-500">Téléphone</span>
                <p className="font-medium text-lg mt-1 group-hover:text-green-400 transition-colors">
                  06 84 41 03 38
                </p>
              </div>
            </a>
          </div>

          {/* Social links */}
          <div className="pt-8">
            <h3 className="text-sm font-medium tracking-widest text-gray-500 uppercase text-center mb-6">
              Réseaux sociaux
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group flex items-center gap-3 px-6 py-4 bg-gray-900/50 rounded-full border border-gray-800/50 hover:border-gray-700/50 hover:bg-gray-900/80 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {social.handle}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}