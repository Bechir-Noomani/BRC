import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform, useScroll } from 'framer-motion';
import { Award, Package, Grid3x3, Star, TrendingUp } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2, suffix = '', prefix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

const StatsShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const stats = [
    {
      value: 500,
      suffix: '+',
      label: 'Marques Premium',
      description: 'Partenaires de confiance',
      icon: '/icons/trend-up.svg',
    },
    {
      value: 10000,
      suffix: '+',
      label: 'Produits Disponibles',
      description: 'Catalogue complet',
      icon: '/icons/shopping-cart.svg',
    },
    {
      value: 50,
      suffix: '+',
      label: 'Catégories',
      description: 'Gamme variée',
      icon: '/icons/category-2.svg',
    },
    {
      value: 5000,
      suffix: '+',
      label: 'Clients Satisfaits',
      description: 'Depuis 1995',
      icon: '/icons/users.svg',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 overflow-hidden bg-transparent">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(220 38 38) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-red-600 rounded-full opacity-20" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-red-600 rounded-full opacity-20" />
      <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-red-600 rounded-full opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4 text-red-600" />
            <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Performance</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Notre Impact en Chiffres
          </h2>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600" />
            <div className="h-1 w-1 rounded-full bg-red-600" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600" />
          </div>

          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Des chiffres qui témoignent de notre engagement envers l'excellence et la satisfaction client
          </p>
        </motion.div>

        {/* Stats Grid - Enhanced Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="relative group"
            >
              {/* Card with subtle border */}
              <div className="relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-red-50 transform rotate-45 translate-x-4 -translate-y-4" />
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <img src={stat.icon} alt="" className="w-8 h-8" style={{ filter: 'invert(23%) sepia(89%) saturate(2476%) hue-rotate(346deg) brightness(94%) contrast(97%)' }} />
                    </div>
                    {/* Small indicator dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-white" />
                  </div>
                </div>

                {/* Counter - Large and Bold */}
                <div className="text-5xl md:text-6xl font-bold mb-2 text-gray-900 tracking-tight">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 font-medium">
                  {stat.description}
                </p>
              </div>

              {/* Connecting line between stats (desktop only) */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gray-200 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-50 to-red-50 rounded-2xl border border-gray-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                ✓
              </div>
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                ✓
              </div>
              <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                ✓
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-gray-900">Certifié et Vérifié</p>
              <p className="text-xs text-gray-600">Leader depuis 1995</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsShowcase;
