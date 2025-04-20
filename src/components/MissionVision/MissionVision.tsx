// src/components/ApplePrinciples/ApplePrinciples.tsx
import React from 'react';
import { FaHeart, FaStar, FaUsers } from 'react-icons/fa';

const principles = [
  {
    title: 'Misión',
    description:
      'Brindar atención personalizada, continua y eficiente, haciendo foco en la persona y proponiendo un espacio de mutuo respeto y colaboración. Nuestro compromiso es acompañarlo en cada etapa de la vida, demostrando pasión y profesionalismo en lo que hacemos.',
    icon: FaHeart,
  },
  {
    title: 'Visión',
    description:
      'Ser el grupo humano de profesionales de referencia para usted y su familia, brindando servicios de alta calidad mediante la mejora continua de técnicas y conocimientos en el área de salud. Aspiramos a ser una empresa boutique donde la calidad y el cuidado integral sean la prioridad.',
    icon: FaStar,
  },
  {
    title: 'Valores',
    description:
      'Adoptamos el cuidado como estilo de vida. Valoramos la capacitación continua y la colaboración con el familiar, parte del equipo de atención, para garantizar la excelencia en el servicio. Creemos que cada detalle, por pequeño que sea, contribuye a un servicio de calidad.',
    icon: FaUsers,
  },
];

const ApplePrinciples: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-100 to-blue-100 flex flex-col py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
        {/* Título de la sección */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 text-center mb-12 animate-fade-in">
          Nuestros Principios
        </h1>

        {/* Cuadrícula de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div
                key={index}
                className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Ícono decorativo */}
                <div className="mx-auto mb-6 bg-blue-600 text-white rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  <Icon className="text-3xl" aria-hidden="true" />
                </div>

                {/* Contenido de la tarjeta */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {principle.title}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplePrinciples;