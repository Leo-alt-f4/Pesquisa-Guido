import { useState } from 'react';
import { Settings, BarChart3, Shield } from 'lucide-react';
import Header from './components/Header';
import SurveyForm from './components/SurveyForm';
import AdminPanel from './components/AdminPanel';

function App() {
  const [currentView, setCurrentView] = useState('survey');
  const [responses, setResponses] = useState([]);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  const handleSurveySubmit = (response) => {
    setResponses(prev => [...prev, response]);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    // Senha para demonstração - em produção, use autenticação adequada
    if (adminPassword === 'guido2025') {
      setIsAdminAuthenticated(true);
      setCurrentView('admin');
    } else {
      alert('Senha incorreta! Tente novamente.');
    }
  };

  const AdminLogin = () => (
    <div className="max-w-md mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow-xl border border-pink-100 p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700">Acesso Administrativo</h2>
          <p className="text-gray-500 mt-2">Digite a senha para acessar o painel de controle</p>
        </div>
        
        <form onSubmit={handleAdminLogin}>
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-600 mb-3">
              Senha de Administrador
            </label>
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full px-4 py-4 border-2 border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all"
              placeholder="Digite a senha"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-4 px-6 rounded-xl font-semibold hover:from-pink-500 hover:to-purple-500 focus:ring-4 focus:ring-pink-200 transition-all"
          >
            Acessar Painel
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setCurrentView('survey')}
            className="text-pink-500 hover:text-pink-600 font-medium transition-colors"
          >
            Voltar à pesquisa
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      
      {/* Navigation */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setCurrentView('survey')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentView === 'survey'
                ? 'bg-pink-400 text-white shadow-lg'
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
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              currentView === 'admin' || currentView === 'admin-login'
                ? 'bg-pink-400 text-white shadow-lg'
                : 'text-gray-600 hover:text-gray-700 hover:bg-white hover:shadow-md'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Administração</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main>
        {currentView === 'survey' && (
          <SurveyForm onSubmit={handleSurveySubmit} />
        )}
        
        {currentView === 'admin-login' && !isAdminAuthenticated && (
          <AdminLogin />
        )}
        
        {currentView === 'admin' && isAdminAuthenticated && (
          <AdminPanel responses={responses} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-pink-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2 shadow-lg border border-pink-100">
                <img 
                  src="/image.png" 
                  alt="Logo OSC GUIDO" 
                  className="w-full h-full object-contain drop-shadow-sm"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Casa GUIDO</span>
            </div>
            <p className="text-gray-700 mb-3 text-lg font-medium">
              Casa de apoio para crianças e adolescentes com câncer e suas famílias
            </p>
            <p className="text-gray-600 text-base font-medium">
              © 2025 Casa GUIDO - Todos os direitos reservados | Onde o sorriso é mais forte que o câncer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;