import { ArrowRight, Heart, Users, Target } from 'lucide-react';

export default function HomePage({ onStartSurvey, isDarkMode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full text-center">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://guido.org.br/wp-content/uploads/2023/03/logo-nova.png" 
              alt="Logo Casa Guido" 
              className="h-24 mx-auto mb-6 drop-shadow-lg"
            />
          </div>

          {/* Título e Subtítulo */}
          <div className="mb-12">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-300 ${
              isDarkMode 
                ? 'text-white' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            }`}>
              Ouvindo você
            </h1>
            <p className={`text-xl md:text-2xl font-medium transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Você e a Casa Guido juntos nessa luta
            </p>
          </div>

          {/* Cards de Informação */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Sobre a OSC */}
            <div className={`rounded-3xl p-8 shadow-xl border transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-600'
                : 'bg-white border-blue-100'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Sobre a OSC Casa Guido
              </h2>
              <p className={`text-lg leading-relaxed transition-all duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Oferecemos amplo apoio humanizado no tratamento de câncer às crianças e adolescentes, 
                fortalecido no sentimento de amor incondicional ao próximo na luta pela vida, incluindo suporte às suas famílias.
              </p>
            </div>

            {/* Sobre o Projeto */}
            <div className={`rounded-3xl p-8 shadow-xl border transition-all duration-300 ${
              isDarkMode
                ? 'bg-gray-800 border-gray-600'
                : 'bg-white border-blue-100'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Sobre o projeto
              </h2>
              <p className={`text-lg leading-relaxed transition-all duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Esta é uma pesquisa de satisfação para identificar problemas encontrados na OSC e como resolvê-los 
                a partir do seu feedback. Sua opinião é fundamental para continuarmos melhorando nossos serviços.
              </p>
            </div>
          </div>

          {/* Botão da Pesquisa */}
          <div className="mb-16">
            <button
              onClick={onStartSurvey}
              className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-4 mx-auto"
            >
              <Users className="w-6 h-6" />
              <span>Iniciar Pesquisa</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`backdrop-blur-sm border-t transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-900/90 border-gray-700'
          : 'bg-white/90 border-blue-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="mb-6">
              <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Contato:
              </h3>
              <div className={`space-y-2 text-lg transition-all duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <p>(48) 3045-6211</p>
                <p>contato@guido.org.br</p>
                <p>Rua Santo Antônio, 790 - Centro Criciúma/SC - CEP 88801-440</p>
              </div>
            </div>
            
            <div className={`pt-6 border-t transition-all duration-300 ${
              isDarkMode ? 'border-gray-700' : 'border-blue-200'
            }`}>
              <p className={`font-medium transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © 2025 Ouvindo Você. Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}