import { Heart, Users } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Logo e título */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-xl p-3 border-2 border-pink-100">
              <img 
                src="/image.png" 
                alt="Logo OSC GUIDO" 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Pesquisa de Satisfação
              </h1>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xl font-bold text-pink-600">OSC GUIDO</span>
                <span className="text-pink-300">•</span>
                <span className="text-base text-gray-600 font-medium">Casa de apoio para crianças com câncer</span>
              </div>
            </div>
          </div>
          
          {/* Info adicional */}
          <div className="hidden md:flex items-center space-x-6 text-base text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-pink-500" />
              <span className="font-medium">Sua opinião importa</span>
            </div>
          </div>
        </div>
        
        {/* Linha decorativa */}
        <div className="mt-6 h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-full shadow-sm"></div>
      </div>
    </header>
  );
}