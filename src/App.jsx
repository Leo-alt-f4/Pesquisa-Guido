import { useState } from 'react';
import { Settings, BarChart3, Shield, Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import SurveyForm from './components/SurveyForm';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentView, setCurrentView] = useState('survey');
  const [responses, setResponses] = useState([]);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSurveySubmit = (response) => {
    setResponses(prev => [...prev, response]);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'admin123') {
      setIsAdminAuthenticated(true);
      setCurrentView('admin');
    } else {
      alert('Senha incorreta!');
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900' 
        : 'bg-gradient-to-br from-pink-50 via-white to-purple-50'
    }`}>
      <Header isDarkMode={isDarkMode} />
      
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-600'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-pink-200'
          }`}
          title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentView('survey')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentView === 'survey'
                ? 'bg-pink-400 text-white shadow-lg'
                : isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800 hover:shadow-md'
                  : 'text-gray-600 hover:text-gray-700 hover:bg-white hover:shadow-md'
            }`}
          >
            <span>Pesquisa de Satisfação</span>
          </button>
          
          <button
            onClick={() => {
              if (isAdminAuthenticated) {
                setCurrentView('admin');
              } else {
                setCurrentView('admin-login');
              }
            }}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentView === 'admin' || currentView === 'admin-login'
                ? 'bg-pink-400 text-white shadow-lg'
                : isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800 hover:shadow-md'
                  : 'text-gray-600 hover:text-gray-700 hover:bg-white hover:shadow-md'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Resultados</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main>
        {currentView === 'survey' && (
          <SurveyForm onSubmit={handleSurveySubmit} isDarkMode={isDarkMode} />
        )}
        
        {currentView === 'admin-login' && !isAdminAuthenticated && (
          <AdminLogin isDarkMode={isDarkMode} />
        )}
        
        {currentView === 'admin' && isAdminAuthenticated && (
          <AdminPanel responses={responses} isDarkMode={isDarkMode} />
        )}
      </main>

      {/* Footer */}
      <footer className={`backdrop-blur-sm border-t mt-16 transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-900/90 border-gray-700'
          : 'bg-white/90 border-pink-200'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center p-2 shadow-lg border transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-800 border-gray-600'
                  : 'bg-white border-pink-100'
              }`}>
                <img 
                  src="/image.png" 
                  alt="Logo OSC GUIDO" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Casa GUIDO</span>
            </div>
            <p className={`mb-3 text-lg font-medium transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Casa de apoio para crianças e adolescentes com câncer e suas famílias
            </p>
            <p className={`text-base font-medium transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2025 Casa GUIDO - Todos os direitos reservados | Onde o sorriso é mais forte que o câncer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );

  const AdminLogin = ({ isDarkMode }) => (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className={`rounded-3xl shadow-xl border p-8 transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800 border-gray-600'
          : 'bg-white border-pink-100'
      }`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-2xl font-bold transition-all duration-300 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>Acesso Administrativo</h2>
          <p className={`mt-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>Digite a senha para acessar o painel de controle</p>
        </div>
        
        <form onSubmit={handleAdminLogin}>
          <div className="mb-6">
            <label className={`block text-sm font-semibold mb-3 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Senha de Administrador
            </label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400'
                  : 'bg-white border-pink-200 text-gray-700 placeholder-gray-500'
              }`}
              placeholder="Digite a senha"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Entrar
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setCurrentView('survey')}
            className={`font-medium transition-all duration-300 ${
              isDarkMode
                ? 'text-pink-400 hover:text-pink-300'
                : 'text-pink-500 hover:text-pink-600'
            }`}
          >
            Voltar à pesquisa
          </button>
        </div>
      </div>
    </div>
  );
}