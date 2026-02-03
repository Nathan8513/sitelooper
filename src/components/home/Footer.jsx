import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black tracking-tighter">Løøper</h3>
            <p className="text-gray-500 text-sm mt-2">
              Pop · Rock · Blues — Vendée, France
            </p>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-gray-500">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#music" className="hover:text-white transition-colors">Musique</a>
            <a href="#live" className="hover:text-white transition-colors">Live</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Løøper. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}