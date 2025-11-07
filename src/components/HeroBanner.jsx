import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronRight, Package, Award, Truck, CheckCircle } from 'lucide-react';

const HeroBanner = () => {
  const heroRef = useRef(null);
  
  // Scroll progress for the hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect with smooth spring physics
  const yRaw = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.7, 0.3]);
  
  // Add spring physics for smooth inertia effect when scrolling stops
  const y = useSpring(yRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const opacity = useSpring(opacityRaw, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const checklistVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative bg-transparent">
      {/* Full-Screen Hero Image Section with Creative Text */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Scroll Effect */}
        <motion.div 
          className="absolute will-change-transform"
          style={{
            y,
            top: '-10%',
            left: 0,
            right: 0,
            bottom: '-10%',
          }}
        >
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/hero.jpg)',
              backgroundAttachment: 'scroll'
            }}
          />
        </motion.div>
        
        {/* Dark Filter Overlay */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" 
        />

        {/* Professional Hero Content */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2.5 rounded-lg">
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-200">Depuis 2009</span>
              <span className="w-1 h-1 rounded-full bg-red-500" />
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-gray-200">Tunisie</span>
            </div>
          </motion.div>

          {/* Main Logo - Clean & Professional */}
         <motion.div 
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                     className="mb-6 flex justify-center"
                   >
                     <img 
                       src="/logo/herologo.png" 
                       alt="BROCARAMILOU" 
                       className="h-24 sm:h-28 md:h-32 lg:h-40 w-auto object-contain"
                     />
                   </motion.div>
         

          {/* Subtitle - Refined Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="mb-6"
          >
           
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-red-500">
              Pâtisserie • Restauration • Café
            </p>
          </motion.div>

          {/* Description - Professional Copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Votre partenaire de confiance en équipements et fournitures professionnelles de haute qualité
          </motion.p>

          {/* CTA Buttons - Professional Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/categories"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3.5 rounded-lg font-semibold text-base shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>Découvrir nos produits</span>
              <ChevronRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-3.5 rounded-lg font-semibold text-base border-2 border-white/20 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span>Nous contacter</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator - At Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.6 },
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-25 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer">
            <span className="text-xs uppercase tracking-widest font-medium">Défiler</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Overlay Section - Like Global Trade */}
      <div className="relative bg-transparent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.img 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                src="/hero.jpg" 
                alt="Produits Brocaramilou" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Right Content Box */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={containerVariants}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 sm:p-12 lg:p-16 rounded-2xl shadow-2xl"
            >
              {/* Brand Tag */}
              <motion.div variants={itemVariants} className="mb-6">
                <div className="inline-block border-l-4 border-red-600 pl-4">
                  <p className="text-sm font-semibold tracking-wider uppercase text-gray-300">
                    BROCARAMILOU
                  </p>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              >
                Leaders de
                <span className="block text-red-500 mt-2">
                  Pâtisserie & Restauration
                </span>
                <span className="block mt-2">
                  en Tunisie
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 text-base lg:text-lg mb-8 leading-relaxed"
              >
                Fondé en Tunisie, nous sommes spécialisés dans la fourniture de produits de haute qualité pour le secteur de la pâtisserie et de la restauration.
              </motion.p>

              {/* Feature Checklist */}
              <motion.div 
                variants={containerVariants}
                className="space-y-4 mb-10"
              >
                <motion.div variants={checklistVariants} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-base font-medium">Large gamme de produits de haute qualité</span>
                </motion.div>
                <motion.div variants={checklistVariants} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-base font-medium">Étude des besoins personnalisée</span>
                </motion.div>
                <motion.div variants={checklistVariants} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-base font-medium">Livraison dans les délais</span>
                </motion.div>
                <motion.div variants={checklistVariants} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <span className="text-base font-medium">Satisfaction garantie</span>
                </motion.div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.a
                  href="/categories"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors shadow-lg"
                >
                  <span>VOIR PLUS</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section Below Hero */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-center space-y-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-full flex items-center justify-center">
                  <Package className="w-10 h-10 text-red-500" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Large gamme de produits</h3>
              <p className="text-gray-600 text-lg">
                Une sélection complète de fournitures pour répondre à tous vos besoins professionnels
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-center space-y-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-red-500" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Qualité garantie</h3>
              <p className="text-gray-600 text-lg">
                Produits certifiés et testés pour assurer la satisfaction de nos clients
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
              className="text-center space-y-4"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-full flex items-center justify-center">
                  <Truck className="w-10 h-10 text-red-500" />
                </div>
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Livraison rapide</h3>
              <p className="text-gray-600 text-lg">
                Service de livraison efficace dans toute la Tunisie
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;