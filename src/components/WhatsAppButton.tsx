import { MessageCircle, ArrowUp } from 'lucide-react'; // Adicionando o ícone para o botão de rolar para o topo
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false); // Estado para controlar a visibilidade do botão de rolar para o topo

  const phoneNumber = '32988523192'; // 
  const message = 'Olá! Gostaria de mais informações sobre o Espaço Imperial.';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Se o usuário rolar mais de 200px da parte superior, mostra o botão
      if (window.scrollY > 200) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Remove o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Botão WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Botão Rolar para o Topo */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 transition-colors z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default WhatsAppButton;
