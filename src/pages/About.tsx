import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';
import espacodentro from '../assets/espacodentro.jpg'
import piscina from '../assets/piscina.png';
import restaurante from '../assets/restaurante.jpg';
import quadra from '../assets/quadra de areia.jpg'

// Definindo os tipos das propriedades para FeatureCard
interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

// Definindo os tipos das propriedades para Facility
interface FacilityProps {
  title: string;
  description: string;
  imageUrl: string;
  reverse?: boolean; // O reverse é opcional
}

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nós</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={espacodentro}
                alt="Espaço Imperial"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Tradição e Qualidade
              </h3>
              <p className="text-gray-600 mb-6">
                O Espaço Imperial é o lugar perfeito para suas celebrações. Contamos com uma estrutura completa que inclui um campo de futebol profissional, área de lazer com piscina e um restaurante que oferece o melhor da gastronomia.
              </p>
              <p className="text-gray-600 mb-6">
                Nossa equipe está preparada para tornar seu evento único e memorável, com um serviço personalizado e atencioso em cada detalhe.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Restaurante</h4>
                  <p className="text-gray-600">Refeições, lanches e pizzas artesanais</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Lazer</h4>
                  <p className="text-gray-600">Campo de futebol, quadra de areia e piscina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Award className="h-12 w-12 text-yellow-500" />}
          title="Tradição"
          description="Anos de experiência em eventos memoráveis"
        />
        <FeatureCard
          icon={<Users className="h-12 w-12 text-yellow-500" />}
          title="Capacidade"
          description="Estrutura para eventos de diferentes portes"
        />
        <FeatureCard
          icon={<Clock className="h-12 w-12 text-yellow-500" />}
          title="Flexibilidade"
          description="Horários flexíveis para seu evento"
        />
      </div>

      {/* Facilities */}
      <div className="space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossa Estrutura</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
        </div>


        <Facility
          title="Campo de Futebol"
          description="Campo society com grama sintética de alta qualidade, ideal para confraternizações esportivas e eventos ao ar livre."
          imageUrl="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          reverse={false}
        />

        <Facility
          title="Área de Piscina"
          description="Piscina ampla com área de deck, espreguiçadeiras e ambiente para relaxamento, perfeita para eventos diurnos."
          imageUrl={piscina}
          reverse={true}
        />
        <Facility
          title="Quadra de areia"
          description="Espaço projetado para a prática de esportes como vôlei de praia, futevôlei e recreação. "
          imageUrl={quadra}
          reverse={true}
        />
        <Facility
          title="Restaurante"
          description="Cozinha profissional e ambiente climatizado, oferecendo cardápios variados para diferentes ocasiões."
          imageUrl={restaurante}
          reverse={false}
        />
        <div>
          <p> </p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-x1 font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);


const Facility: React.FC<FacilityProps> = ({ title, description, imageUrl, reverse }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
    <div className={reverse ? 'order-2 md:order-1' : ''}>
    <h3 className="text-center font-bold text-gray-800 mb-3 text-2xl">{title}</h3>
    <p className="text-center text-gray-600">{description}</p>
    </div>
    <div className={reverse ? 'order-1 md:order-2' : ''}>
      <img
        src={imageUrl}
        alt={title}
        className="rounded-lg shadow-lg w-full h-64 object-cover"
      />
    </div>
  </div>
);

export default About;
