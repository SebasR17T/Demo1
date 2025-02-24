'use client';

import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add your form submission logic here
    setTimeout(() => setIsLoading(false), 2000); // Simulate API call
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-blue-50 to-white/50">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Contáctanos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Envíanos tu mensaje y te responderemos en menos de 24 horas.
          </p>
          <div className="mt-6 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </div>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-8 p-12 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 hover:border-blue-100/30 transition-all duration-300"
        >
          <div className="group relative">
            <label className="text-sm font-medium text-gray-700 mb-3 block" htmlFor="name">
              Nombre Completo
            </label>
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/80 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                id="name"
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300 hover:border-blue-200 bg-white/50"
                placeholder="Tu nombre"
                required
              />
            </div>
          </div>

          <div className="group relative">
            <label className="text-sm font-medium text-gray-700 mb-3 block" htmlFor="email">
              Correo Electrónico
            </label>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/80 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="email"
                id="email"
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300 hover:border-blue-200 bg-white/50"
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="group relative">
            <label className="text-sm font-medium text-gray-700 mb-3 block" htmlFor="message">
              Mensaje
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-4 top-5 text-blue-500/80 group-focus-within:text-blue-600 transition-colors" />
              <textarea
                id="message"
                rows={5}
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300 hover:border-blue-200 resize-none bg-white/50"
                placeholder="¿En qué podemos ayudarte?"
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-5 px-8 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 group shadow-lg hover:shadow-xl"
          >
            <span className="font-semibold text-lg">
              {isLoading ? 'Enviando...' : 'Enviar Mensaje'}
            </span>
            {!isLoading && (
              <FiSend className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            )}
            {isLoading && (
              <svg 
                className="animate-spin h-5 w-5 ml-2" 
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeDasharray="85" 
                  strokeDashoffset="25"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
          </button>
        </form>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default ContactForm;