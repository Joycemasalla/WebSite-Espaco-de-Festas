import { Link } from 'react-router-dom';
import {  Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logoespaco.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
            <img src={logo}   style={{  height: '180px', marginLeft:'3rem' }}   />
     
          </Link>
            </div>
            <p className="text-gray-400">
              Seu espaço para momentos inesquecíveis
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/sobre" className="hover:text-yellow-500 transition-colors">Sobre</Link></li>
              <li><Link to="/servicos" className="hover:text-yellow-500 transition-colors">Serviços</Link></li>
              <li><Link to="/galeria" className="hover:text-yellow-500 transition-colors">Galeria</Link></li>
              <li><Link to="/restaurante" className="hover:text-yellow-500 transition-colors">Restaurante</Link></li>
              <li><Link to="/contato" className="hover:text-yellow-500 transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span>(32) 98852-3192</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span>eiespacoimperial@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span>Praca Honor Sena Da Luz, 454 - Mirai, Miraí - MG, 36790-000</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-yellow-500" />
                <span>Seg - Ter: Fechado</span>
              </li>
              <li className="ml-6">Qua - Sáb: 9h às 23h</li>
              <li className="ml-6">Dom: 9h às 22h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Espaço Imperial. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;