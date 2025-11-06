import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, Briefcase } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    secteur: '',
    telephone: '',
    adresse: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact depuis le site - ${formData.nom} ${formData.prenom}`);
    const body = encodeURIComponent(
      `Nom: ${formData.nom}\n` +
      `Prénom: ${formData.prenom}\n` +
      `Secteur d'activité: ${formData.secteur}\n` +
      `Numéro de téléphone: ${formData.telephone}\n` +
      `Adresse: ${formData.adresse}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:contact@example.com?subject=${subject}&body=${body}`;
    
    // Reset form
    setFormData({ nom: '', prenom: '', secteur: '', telephone: '', adresse: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-16 sm:py-20 overflow-hidden border-b border-gray-800">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 px-4 py-2 rounded-full mb-6"
            >
              <Send className="w-4 h-4 text-red-500" />
              <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">Restons en contact</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Contactez-nous</h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner</p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { Icon: MapPin, title: "Adresse", content: "123 Avenue des Champs, 75008 Paris", link: null },
              { Icon: Phone, title: "Téléphone", content: "+33 1 23 45 67 89", link: "tel:+33123456789" },
              { Icon: Mail, title: "Email", content: "contact@example.com", link: "mailto:contact@example.com" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-700 h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600/20 to-red-500/30 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-gray-300 hover:text-red-500 transition-colors font-medium">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-300 font-medium">{item.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Business Hours Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl shadow-xl border-2 border-gray-700 h-full overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center border-2 border-red-500/30">
                      <Clock className="w-6 h-6 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-extrabold">Horaires d'ouverture</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-700">
                      <span className="text-gray-400 font-medium">Lundi - Vendredi</span>
                      <span className="font-bold">8h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-700">
                      <span className="text-gray-400 font-medium">Samedi</span>
                      <span className="font-bold">8h00 - 14h00</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-400 font-medium">Dimanche</span>
                      <span className="text-red-500 font-bold">Fermé</span>
                    </div>
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-8 p-4 bg-red-600/10 border-2 border-red-500/20 rounded-xl">
                    <p className="text-sm text-gray-400 leading-relaxed">
                      💡 <span className="font-bold">Conseil:</span> Pour une réponse rapide, contactez-nous durant nos heures d'ouverture.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border-2 border-red-500/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-600/20 rounded-2xl flex items-center justify-center border-2 border-red-500/30">
                    <Send className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="text-2xl font-extrabold text-gray-900">Envoyez-nous un message</h4>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        placeholder="Nom"
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
                      />
                    </div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        placeholder="Prénom"
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="secteur"
                      value={formData.secteur}
                      onChange={handleChange}
                      placeholder="Secteur d'activité"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="Numéro de téléphone"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      placeholder="Adresse"
                      required
                      className="w-full pl-11 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    />
                  </div>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin en détail..."
                    rows={6}
                    required
                    className="w-full px-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none resize-none transition-all"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 text-white py-4 rounded-xl font-extrabold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                  >
                    <span>Envoyer le message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
