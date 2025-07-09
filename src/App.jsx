import { useState } from 'react';
import { BarChart3, Shield, Moon, Sun } from 'lucide-react';
import HomePage from './components/HomePage';
import SurveyForm from './components/SurveyForm';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [responses, setResponses] = useState([]);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSurveySubmit = (response) => {
    setResponses(prev => [...prev, response]);
    setCurrentView('home'); // Volta para home após envio
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'admin123') {
      setIsAdminAuthenticated(true);
      setCurrentView('admin');
    } else {
      alert('Credenciais incorretas!');
    }
  };

  const AdminLogin = ({ isDarkMode }) => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className={`max-w-md w-full rounded-3xl shadow-xl border p-8 transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800 border-gray-600'
          : 'bg-white border-blue-100'
      }`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className={`text-2xl font-bold transition-all duration-300 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>Acesso Administrativo</h2>
          <p className={`mt-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>Digite suas credenciais para acessar o painel</p>
        </div>
        
        <form onSubmit={handleAdminLogin} className="space-y-6">
          <div>
            <label className={`block text-sm font-semibold mb-3 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Usuário
            </label>
            <input
              type="text"
              value={adminCredentials.username}
              onChange={(e) => setAdminCredentials(prev => ({ ...prev, username: e.target.value }))}
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400'
                  : 'bg-white border-blue-200 text-gray-700 placeholder-gray-500'
              }`}
              placeholder="Digite o usuário"
              required
            />
          </div>
          
          <div>
            <label className={`block text-sm font-semibold mb-3 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Senha
            </label>
            <input
              type="password"
              value={adminCredentials.password}
              onChange={(e) => setAdminCredentials(prev => ({ ...prev, password: e.target.value }))}
              className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400'
                  : 'bg-white border-blue-200 text-gray-700 placeholder-gray-500'
              }`}
              placeholder="Digite a senha"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Entrar
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setCurrentView('home')}
            className={`font-medium transition-all duration-300 ${
              isDarkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-500 hover:text-blue-600'
            }`}
          >
            Voltar ao início
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`p-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-110 ${
            isDarkMode
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 border border-gray-600'
              : 'bg-white text-gray-600 hover:bg-gray-50 border border-blue-200'
          }`}
          title={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
        >
          {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Admin Access Button */}
      {currentView === 'home' && (
        <div className="fixed top-6 left-6 z-50">
          <button
            onClick={() => {
              if (isAdminAuthenticated) {
                setCurrentView('admin');
              } else {
                setCurrentView('admin-login');
              }
            }}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
              isDarkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-blue-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Admin</span>
          </button>
        </div>
      )}

      {/* Content */}
      <main>
        {currentView === 'home' && (
          <HomePage onStartSurvey={() => setCurrentView('survey')} isDarkMode={isDarkMode} />
        )}
        
        {currentView === 'survey' && (
          <SurveyForm 
            onSubmit={handleSurveySubmit} 
            onBack={() => setCurrentView('home')}
            isDarkMode={isDarkMode} 
          />
        )}
        
        {currentView === 'admin-login' && !isAdminAuthenticated && (
          <AdminLogin isDarkMode={isDarkMode} />
        )}
        
        {currentView === 'admin' && isAdminAuthenticated && (
          <AdminPanel 
            responses={responses} 
            onBack={() => setCurrentView('home')}
            isDarkMode={isDarkMode} 
          />
        )}
      </main>
    </div>
  );
}

export default App;