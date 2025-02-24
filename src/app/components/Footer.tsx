import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900 to-gray-900 text-gray-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Información de contacto */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-playfair font-semibold text-white mb-4">
              CarieCero
            </h3>
            <p className="text-sm leading-relaxed">
              Av. Dental 1234<br/>
              Ciudad Odontológica<br/>
              contacto@cariecero.com
            </p>
            <p className="text-sm font-medium mt-4">
              Tel: (555) 123-4567
            </p>
          </div>

          {/* Horario */}
          <div className="space-y-4 text-center">
            <h4 className="text-lg font-semibold text-white mb-4">
              Horario de Atención
            </h4>
            <p className="text-sm">
              Lunes - Viernes: 8:00 - 20:00<br/>
              Sábados: 9:00 - 14:00<br/>
              Emergencias 24/7
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-4 text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-6">
              Síguenos
            </h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {[['M8.29 20.25c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'], 
              ['M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'], 
              ['M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z']].map(([d], index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-gradient-to-br from-blue-600/20 to-blue-400/20 rounded-full backdrop-blur-sm hover:from-blue-600/30 hover:to-blue-400/30 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm mb-2">
            &copy; 2024 CarieCero - Todos los derechos reservados
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <a href="#" className="hover:text-blue-300 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
    </footer>
  );
};

export default Footer;