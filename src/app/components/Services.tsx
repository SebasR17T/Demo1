import React from 'react';
import { FaTooth, FaStethoscope, FaPalette } from 'react-icons/fa';
import { FaTooth as FaProsthesis } from "react-icons/fa6";
import { MdOutlineBrush } from 'react-icons/md';
import { GiTooth } from "react-icons/gi";

const serviceData = [
  {
    title: 'Consultas Iniciales',
    description: 'Evaluación completa de tu salud dental para un plan de tratamiento personalizado.',
    icon: FaStethoscope,
  },
  {
    title: 'Limpieza Dental',
    description: 'Eliminación de placa y sarro para una sonrisa más brillante y saludable.',
    icon: MdOutlineBrush,
  },
  {
    title: 'Endodoncia',
    description: 'Tratamiento de conducto para salvar dientes dañados o infectados.',
    icon: GiTooth,
  },
  {
    title: 'Prótesis Dentales',
    description: 'Reemplazo de dientes perdidos con prótesis fijas o removibles.',
    icon: FaProsthesis,
  },
  {
    title: 'Blanqueamiento Dental',
    description: 'Aclara el color de tus dientes para una sonrisa más atractiva.',
    icon: FaPalette,
  },
  {
    title: 'Ortodoncia',
    description: 'Corrección de la posición de los dientes con brackets u otros aparatos.',
    icon: FaTooth,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-blue-50 to-white/50">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-gray-800">
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Nuestros Servicios
          </span>
          <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 hover:border-blue-100/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl group-hover:bg-blue-400/20 transition-colors"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center relative">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 font-playfair">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Services;