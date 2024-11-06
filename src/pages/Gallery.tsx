import React, { useState } from 'react';
import beachtenis from '../assets/beachtenis.jpg'
import comida from '../assets/comida.jpg'
import espacodentro from '../assets/espacodentro.jpg';
import espacodentro1 from '../assets/espacodentro1.jpg';
import piscina from '../assets/piscina.png';
import restaurante from '../assets/restaurante.jpg'
import quadra from '../assets/quadra de areia.jpg'


// Definindo a interface para a imagem
interface Image {
  url: string;
  title: string;
}

// Mapeando as imagens para suas seções
const allImages: Record<string, Image[]> = {
  Salão: [
    {
      url: espacodentro1,
      title: 'Salão Principal',
    },
    {
      url: espacodentro,
      title: 'Casamentos',
    },

  ],
  Externa: [
    {
      url: quadra,
      title: 'Área Externa',
    },
    {
      url: beachtenis,
      title: 'Beach Tênis',
    },
  ],
  Piscina: [
    {
      url: piscina,
      title: 'Piscina',
    },
    // Adicione mais imagens da piscina aqui
  ],
  Restaurante: [
    {
      url: restaurante,
      title: 'Restaurante',
    },
    {
      url: comida,
      title: 'Petiscos',
    }
  ],
};

const Gallery: React.FC = () => {
  const [currentImages, setCurrentImages] = useState<Image[]>([]);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSectionClick = (section: string) => {
    // Verifica se a seção já está ativa. Se sim, reseta a seção, caso contrário, define a nova seção.
    if (activeSection === section) {
      setCurrentImages([]);
      setActiveSection(null);
    } else {
      setCurrentImages(allImages[section]);
      setActiveSection(section);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeria</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.keys(allImages).map((section, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => handleSectionClick(section)}
            >
              <img
                src={allImages[section][0].url} // Exibe a primeira imagem de cada seção
                alt={allImages[section][0].title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{section}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de imagens detalhadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {currentImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
