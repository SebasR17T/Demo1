import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative pt-40 pb-32 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1588776813677-77d08bfba0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-900/90"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
        <div className="space-y-8" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-playfair">
            <span className="text-blue-300">Tu Sonrisa,</span><br />
            Nuestra Pasión
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Cuidado dental excepcional con tecnología de vanguardia y calidez humana
          </p>
          
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-400 hover:bg-blue-300 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Reservar Cita
            </button>
            <button className="border-2 border-blue-300 hover:border-blue-200 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-white/10">
              Conoce Más
            </button>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;