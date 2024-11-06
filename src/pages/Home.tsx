import { motion } from 'framer-motion';
import { Calendar, Phone, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import espacofora from '../assets/espaco.jpg';

type QuickAccessCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
};

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${espacofora})`, 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Espaço Imperial
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              O lugar perfeito para realizar seus sonhos e criar memórias inesquecíveis
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-black bg-yellow-600 hover:bg-yellow-700"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agende sua visita
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Access Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickAccessCard
              icon={<Calendar className="h-12 w-12 text-yellow-500" />}
              title="Agendamento"
              description="Reserve o espaço para seu evento"
              link="/contato"
            />
            <QuickAccessCard
              icon={<Phone className="h-12 w-12 text-yellow-500" />}
              title="Contato"
              description="Fale conosco para mais informações"
              link="/contato"
            />
            <QuickAccessCard
              icon={<Camera className="h-12 w-12 text-yellow-500" />}
              title="Galeria"
              description="Conheça nossas instalações"
              link="/galeria"
            />
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Gallery />
      <Contact />
    </motion.div>
  );
};

const QuickAccessCard: React.FC<QuickAccessCardProps> = ({ icon, title, description, link }) => (
  <Link
    to={link}
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default Home;
