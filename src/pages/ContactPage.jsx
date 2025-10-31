import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
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
    window.location.href = `mailto:contact@brocaramilou.tn?subject=${subject}&body=${body}`;
    
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
    <div className="min-h-screen bg-white text-gray-900 pt-20">
      <div className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-gray-600 text-lg">Notre équipe est à votre disposition pour répondre à vos questions</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                {[
                  { Icon: MapPin, title: "Adresse", content: "Tunis, Tunisie" },
                  { Icon: Phone, title: "Téléphone", content: "+216 XX XXX XXX" },
                  { Icon: Mail, title: "Email", content: "contact@brocaramilou.tn" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: idx * 0.1 + 0.3, duration: 0.5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-1">{item.title}</div>
                      <div className="text-gray-600">{item.content}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 rounded-2xl shadow-xl"
            >
              <h4 className="text-2xl font-bold mb-6">Envoyez-nous un message</h4>
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Nom"
                  required
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  placeholder="Prénom"
                  required
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="secteur"
                  value={formData.secteur}
                  onChange={handleChange}
                  placeholder="Secteur d'activité"
                  required
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="Numéro de téléphone"
                  required
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  placeholder="Adresse"
                  required
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition-all"
                />
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={5}
                  required
                  className="w-full px-4 py-3.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none text-white placeholder-gray-400 resize-none transition-all"
                />
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-red-600 text-white py-3.5 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg"
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
