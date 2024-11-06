import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
          <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* Map */}
            <div className="mt-8">
              <div className="bg-gray-200 w-full h-64 rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.7660731698847!2d-42.61374822496354!3d-21.201449780491437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa32d334eb04427%3A0x74cfbd8cd44df769!2sEspa%C3%A7o%20Imperial!5e0!3m2!1spt-BR!2sbr!4v1730910726688!5m2!1spt-BR!2sbr"
                  className="w-full h-full rounded-lg"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                </div>
              </div>
            </div>
            {/* <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-600 text-black py-2 px-4 rounded-md hover:bg-yellow-700 transition-colors duration-300"
              >
                Enviar Mensagem
              </button>
            </form> */}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-gray-600">Praca Honor Sena Da Luz, 454 - Mirai, Miraí - MG, 36790-000</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-gray-600">(32) 98852-3192</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-gray-600">eiespacoimperial@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Horário de Funcionamento
              </h3>
              <p className="text-gray-600">
                Segunda e Terça: Fechado<br />
                Quarta a Sábado: 9h às 23h <br />
                Domingo: 9h às 22h

              </p>
            </div>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Fale conosco pelo WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

