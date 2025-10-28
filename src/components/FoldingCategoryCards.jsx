import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const FoldingCard = ({ category, index, totalCards }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"]
  });

  // Calculate the scale based on card position
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 0.92, 1]
  );

  // Calculate the y position for stacking effect
  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [50, 25, 0]
  );

  // Calculate rotation for folding effect - more subtle
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [8, 4, 0]
  );

  // Calculate opacity
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.5, 0.75, 1]
  );

  // Border radius animation
  const borderRadius = useTransform(
    scrollYProgress,
    [0, 1],
    [32, 24]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        y,
        rotateX,
        opacity,
        transformOrigin: "top center",
        top: `${50 + index * 15}px`
      }}
      className="sticky mb-4 md:mb-6 will-change-transform"
    >
      <Link to={`/category/${category.id}`} className="block">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] xl:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl group bg-white transition-shadow duration-300"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Background Image with overlay */}
          <div className="absolute inset-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
            {/* Professional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          
          {/* Content Area - Professional */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8 lg:p-10 text-white z-10">
            {/* Category Title */}
            <div className="mb-3 md:mb-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-2 leading-tight">
                {category.name}
              </h3>
              <div className="h-0.5 w-12 bg-red-600" />
            </div>
            
            {/* Description */}
            <p className="text-sm sm:text-base text-gray-200 mb-4 md:mb-5 font-normal">
              {category.hasSubcategories
                ? `${category.subcategories.length} sous-catégories`
                : `${category.products.length} produits`}
            </p>
            
            {/* CTA Button */}
            <div className="flex items-center">
              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-semibold group-hover:bg-red-700 transition-colors duration-200 shadow-md">
                <span>Découvrir</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const FoldingCategoryCards = ({ categories }) => {
  return (
    <div className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with warm gradient matching your design */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-50/30 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto relative">
        {/* Section Header - Professional */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Nos Catégories
          </h2>

          {/* Simple divider */}
          <div className="h-0.5 w-16 bg-red-600 mx-auto mb-6" />

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explorez notre gamme complète de produits professionnels
          </p>
        </motion.div>

        {/* Folding Cards Container */}
        <div className="relative pb-20 md:pb-32">
          {categories.map((category, index) => (
            <FoldingCard
              key={category.id}
              category={category}
              index={index}
              totalCards={categories.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoldingCategoryCards;
