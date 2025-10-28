import React from 'react';
import { motion } from 'framer-motion';

const HorizontalScroll = () => {
  // Brands array
  const brands = [
    { src: "/Brandes/aromalux.PNG", name: "Aromalux" },
    { src: "/Brandes/baristella.PNG", name: "Baristella" },
    { src: "/Brandes/dokrem.PNG", name: "Dokrem" },
    { src: "/Brandes/fructa.PNG", name: "Fructa" },
    { src: "/Brandes/gadida.PNG", name: "Gadida" },
    { src: "/Brandes/gias.PNG", name: "Gias" },
    { src: "/Brandes/Lartisto.PNG", name: "Lartisto" },
    { src: "/Brandes/said.PNG", name: "Said" },
    { src: "/Brandes/vanoise.PNG", name: "Vanoise" },
  ];

  // Triple the array for seamless infinite scroll
  const allBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative py-12 md:py-20 overflow-hidden bg-transparent">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Nos Marques Partenaires</h2>
        <p className="text-gray-600 text-lg">Des marques de confiance pour votre réussite</p>
      </motion.div>

      {/* Auto-scrolling container with manual scroll support */}
      <div 
        className="overflow-x-auto cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <motion.div 
          animate={{ x: ["-0%", "-33.33%"] }}
          transition={{
            x: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="flex gap-4 md:gap-6 px-4"
        >
        {allBrands.map((brand, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[160px] h-[110px] md:w-[200px] md:h-[140px] rounded-xl overflow-hidden bg-gray-100 shadow-md"
          >
            <img 
              src={brand.src} 
              alt={brand.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;