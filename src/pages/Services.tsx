import React from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Users, Music, Utensils } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, price }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-bold ml-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-2 mb-6">
      {features.map((feature: string, index: number) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
          {feature}
        </li>
      ))}
    </ul>
    <p className="text-lg font-bold text-yellow-500">{price}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      {/* <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-serif font-bold mb-4">Nossos Serviços</h1>
            <p className="text-xl">
              Soluções completas para tornar seu evento inesquecível
            </p>
          </div>
        </div>
      </div> */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Serviços</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
        </div>
        

        {/* Services Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <ServiceCard
              
            
                icon={<PartyPopper className="h-8 w-8 text-yellow-500" />}
                title="Festas e Aniversários"
                description="Comemore seu dia especial com elegância e sofisticação"
                features={[
                  "Decoração personalizada",
                  "Buffet completo",
                  "Equipe de apoio",
                  "Som e iluminação"
                ]}
                price="A partir de R$ 5.000"
              />

              <ServiceCard
                icon={<Users className="h-8 w-8 text-yellow-500" />}
                title="Eventos Corporativos"
                description="O ambiente ideal para suas confraternizações empresariais"
                features={[
                  "Estrutura para apresentações",
                  "Coffee break",
                  "Internet dedicada",
                  "Estacionamento"
                ]}
                price="A partir de R$ 3.000"
              />

              <ServiceCard
                icon={<Music className="h-8 w-8 text-yellow-500" />}
                title="Formaturas"
                description="Celebre sua conquista em grande estilo"
                features={[
                  "Palco para cerimônia",
                  "Área para dança",
                  "Buffet premium",
                  "Coordenação do evento"
                ]}
                price="A partir de R$ 8.000"
              />

              <ServiceCard
                icon={<Utensils className="h-8 w-8 text-yellow-500" />}
                title="Casamentos"
                description="Realize o casamento dos seus sonhos"
                features={[
                  "Cerimônia e recepção",
                  "Decoração exclusiva",
                  "Menu personalizado",
                  "Assessoria completa"
                ]}
                price="A partir de R$ 15.000"
              />
              <ServiceCard
                icon={<Utensils className="h-8 w-8 text-yellow-500" />}
                title="Beach Tênis"
                description="A diversão na areia com muito esporte e descontração"
                features={[
                  "Cerimônia e recepção",
                  "Decoração exclusiva",
                  "Menu personalizado",
                  "Assessoria completa"
                ]}
                price="A partir de R$ 15.000"
              />

              <ServiceCard
                icon={<Utensils className="h-8 w-8 text-yellow-500" />}
                title="FutVôlei"
                description="A combinação perfeita entre futebol e vôlei para animar seu evento"
                features={[
                  "Cerimônia e recepção",
                  "Decoração exclusiva",
                  "Menu personalizado",
                  "Assessoria completa"
                ]}
                price="A partir de R$ 15.000"
              />

              <ServiceCard
                icon={<Utensils className="h-8 w-8 text-yellow-500" />}
                title="Futebol"
                description="Para os amantes do futebol, diversão garantida com partidas emocionantes"
                features={[
                  "Cerimônia e recepção",
                  "Decoração exclusiva",
                  "Menu personalizado",
                  "Assessoria completa"
                ]}
                price="A partir de R$ 15.000"
              />

              <ServiceCard
                icon={<Utensils className="h-8 w-8 text-yellow-500" />}
                title="Piscina"
                description="Desfrute de momentos relaxantes e refrescantes ao lado da piscina"
                features={[
                  "Cerimônia e recepção",
                  "Decoração exclusiva",
                  "Menu personalizado",
                  "Assessoria completa"
                ]}
                price="A partir de R$ 15.000"
              />

            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
