import React from 'react';
import { motion, useInView } from 'framer-motion';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop',
    alt: 'Concert live 1',
    span: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop',
    alt: 'Concert live 2',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop',
    alt: 'Concert live 3',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop',
    alt: 'Concert live 4',
    span: 'col-span-1 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2074&auto=format&fit=crop',
    alt: 'Concert live 5',
    span: 'col-span-2 row-span-1',
  },
];

export default function GallerySection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-widest text-gray-500 uppercase">
            Galerie
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Sur Scène
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${image.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}