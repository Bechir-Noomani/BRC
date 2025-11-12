import React from 'react';
import { motion } from 'framer-motion';

const HorizontalScroll = () => {
  // Brands array
  const brands = [
    { src: "/logo/sahliya-logo.png", name: "Sahliya" },
    { src: "/logo/bkfood-logo.png", name: "BK Food" },
    { src: "/logo/la_vague_bleue-logo.png", name: "La Vague Bleue" },
    { src: "/logo/Sabra_logo.webp", name: "Sabra" },
    { src: "/logo/bonna_logo.webp", name: "Bonna" },
    { src: "/logo/dorella_logo.webp", name: "Dorella" },
    { src: "/logo/mayola_logo.webp", name: "Mayola" },
    { src: "/logo/elmazraa-logo.webp", name: "El Mazraa" },
    { src: "/logo/fattoriecovelli_logo.webp", name: "Fattorie Covelli" },
    { src: "/logo/landor_logo.webp", name: "Landor" },
    { src: "/logo/montregal_logo.webp", name: "Montregal" },
    { src: "/logo/lefondant_logo.webp", name: "Le Fondant" },
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
            className="flex-shrink-0 w-[160px] h-[110px] md:w-[200px] md:h-[140px]"
          >
            <img 
              src={brand.src} 
              alt={brand.name}
              className="w-full h-full object-contain p-4"
            />
          </div>
        ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HorizontalScroll;