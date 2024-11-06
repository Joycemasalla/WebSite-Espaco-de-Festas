import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Pizza, Utensils, Wine } from 'lucide-react';

// Definindo tipos para as props de MenuCategory
type MenuCategoryProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// Definindo tipos para as props de MenuSection
type MenuSectionProps = {
  title: string;
  items: {
    name: string;
    description: string;
    price: string;
  }[];
};

const Restaurant = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ margin: '10px' }}>Restaurante</h2>
            <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
          </div>
        </div>

        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <MenuCategory
                icon={<Coffee className="h-8 w-8 text-yellow-500" />}
                title="Café da Manhã"
                description="Comece o dia com energia"
              />
              <MenuCategory
                icon={<Utensils className="h-8 w-8 text-yellow-500" />}
                title="Almoço"
                description="Pratos executivos e à la carte"
              />
              <MenuCategory
                icon={<Pizza className="h-8 w-8 text-yellow-500" />}
                title="Lanches"
                description="Opções rápidas e saborosas"
              />
              <MenuCategory
                icon={<Wine className="h-8 w-8 text-yellow-500" />}
                title="Bebidas"
                description="Drinks e refrigerantes"
              />
            </div>

            <div className="space-y-16">
              <MenuSection
                title="Pratos Principais"
                items={[
                  { name: "Filé à Parmegiana", description: "Filé empanado, molho de tomate, queijo gratinado, arroz e fritas", price: "R$ 45,90" },
                  { name: "Salmão Grelhado", description: "Salmão, legumes salteados e purê de batatas", price: "R$ 52,90" },
                  { name: "Picanha na Brasa", description: "Picanha, arroz, farofa e vinagrete", price: "R$ 58,90" }
                ]}
              />
              {/* Adicione outras seções de Menu conforme necessário */}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const MenuCategory: React.FC<MenuCategoryProps> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-lg">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => (
  <div>
    <h2 className="text-3xl font-serif font-bold mb-8">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {items.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <span className="text-yellow-500 font-bold">{item.price}</span>
          </div>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Restaurant;
