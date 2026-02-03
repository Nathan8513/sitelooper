import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import MusicSection from '@/components/home/MusicSection';
import GallerySection from '@/components/home/GallerySection';
import LiveSection from '@/components/home/LiveSection';
import PressSection from '@/components/home/PressSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <GallerySection />
      <LiveSection />
      <PressSection />
      <ContactSection />
      <Footer />
    </div>
  );
}