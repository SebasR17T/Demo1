import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-gray-800">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            ¿Por qué elegirnos?
          </span>
          <div className="mt-4 mx-auto w-24 h-1 bg-blue-400 rounded-full"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 px-4" data-aos="fade-up">
          {/* Card 1 */}
          <div className="group p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:border-blue-100/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl group-hover:bg-blue-400/20 transition-colors"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 4v7l3-3.5L15 11V4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-playfair">
              Expertos Certificados
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Equipo de especialistas con más de 15 años de experiencia y formación continua en las últimas técnicas dentales.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:border-blue-100/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl group-hover:bg-blue-400/20 transition-colors"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-playfair">
              Tecnología de Vanguardia
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Equipamiento digital de última generación para diagnósticos precisos y tratamientos mínimamente invasivos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:border-blue-100/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl group-hover:bg-blue-400/20 transition-colors"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-playfair">
              Atención Premium
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Experiencia personalizada con planes de tratamiento individualizados y seguimiento continuo.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
    </section>
  );
};

export default WhyChooseUs;