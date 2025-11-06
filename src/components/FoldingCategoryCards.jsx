import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const FoldingCard = ({ category, index }) => {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start center"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 25, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 4, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.75, 1]);

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
          className="relative h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl group bg-white transition-shadow duration-300"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
              style={{ filter: 'blur(0.3px)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
          </div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-white z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-3xl md:text-4xl font-bold">{category.name}</h3>
              
              <p className="text-gray-200 text-base md:text-lg max-w-2xl">
                {category.description || 'Découvrez notre gamme de produits professionnels'}
              </p>

              <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg text-base font-semibold group-hover:bg-red-700 transition-colors duration-200 shadow-md">
                <span>Explorer la catégorie</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const FoldingCategoryCards = ({ categories }) => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nos Catégories</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Découvrez notre large gamme de produits professionnels pour tous vos besoins
          </p>
        </motion.div>

        <div className="relative">
          {categories.map((category, index) => (
            <FoldingCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoldingCategoryCards;
