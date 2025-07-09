import { BarChart3, Users, Star, TrendingUp, Download, Eye, Calendar, Phone, Mail, Award } from 'lucide-react';

export default function AdminPanel({ responses, isDarkMode }) {
  const [selectedResponse, setSelectedResponse] = useState(null);

  // Calcular estatísticas
  const stats = {
    totalResponses: responses.length,
    averageRating: responses.length > 0 
      ? (responses.reduce((sum, r) => sum + (parseInt(r.serviceQuality) || 0), 0) / responses.length).toFixed(1)
      : 0,
    recommendationRate: responses.length > 0 
      ? Math.round((responses.filter(r => r.recommendation === 'sim').length / responses.length) * 100)
      : 0,
    satisfactionDistribution: responses.reduce((acc, r) => {
      const satisfaction = r.overallSatisfaction || 'nao_informado';
      acc[satisfaction] = (acc[satisfaction] || 0) + 1;
      return acc;
    }, {}),
    serviceTypes: responses.reduce((acc, r) => {
      if (r.serviceType) {
        r.serviceType.split(',').forEach(type => {
          acc[type.trim()] = (acc[type.trim()] || 0) + 1;
        });
      }
      return acc;
    }, {})
  };

  const serviceTypeLabels = {
    'manicure': 'Manicure',
    'pedicure': 'Pedicure',
    'sobrancelha': 'Design de Sobrancelha',
    'cilios': 'Extensão de Cílios',
    'depilacao': 'Depilação',
    'limpeza_pele': 'Limpeza de Pele',
    'massagem': 'Massagem',
    'outros': 'Outros'
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl p-8 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Painel Administrativo</h2>
            <p className="text-pink-100 text-lg">Análise das avaliações da Casa GUIDO</p>
          </div>
          <Award className="w-12 h-12 text-pink-200" />
        </div>
      </div>

      {/* Estatísticas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-pink-100'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>Total de Avaliações</p>
              <p className={`text-3xl font-bold mt-1 transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>{stats.totalResponses}</p>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-pink-500" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-pink-100'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>Avaliação Média</p>
              <p className={`text-3xl font-bold mt-1 transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>{stats.averageRating}/5</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Star className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-pink-100'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>Taxa de Recomendação</p>
              <p className={`text-3xl font-bold mt-1 transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>{stats.recommendationRate}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-pink-100'
        }`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>Exportar Dados</p>
              <button
                onClick={exportData}
                className={`mt-2 flex items-center space-x-2 font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? 'text-pink-400 hover:text-pink-300'
                    : 'text-pink-500 hover:text-pink-600'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Baixar CSV</span>
              </button>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Distribuição de Satisfação */}
        <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-pink-100'
        }`}>
          <h3 className={`text-xl font-bold mb-6 transition-all duration-300 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>Distribuição de Satisfação</h3>
          <div className="space-y-4">
            {Object.entries(stats.satisfactionDistribution).map(([level, count]) => {
              const percentage = stats.totalResponses > 0 ? (count / stats.totalResponses) * 100 : 0;
              const labels = {
                'muito_satisfeito': 'Muito Satisfeito',
                'satisfeito': 'Satisfeito',
                'neutro': 'Neutro',
                'insatisfeito': 'Insatisfeito',
                'muito_insatisfeito': 'Muito Insatisfeito'
              };
              
              const colors = {
                'muito_satisfeito': 'bg-green-500',
                'satisfeito': 'bg-green-400',
                'neutro': 'bg-yellow-400',
                'insatisfeito': 'bg-orange-400',
                'muito_insatisfeito': 'bg-red-500'
              };
              
              return (
                <div key={level} className="flex items-center space-x-4">
                  <div className={`w-36 text-sm font-medium transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{labels[level]}</div>
                  <div className={`flex-1 rounded-full h-4 transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-pink-100'
                  }`}>
                    <div
                      className={`h-4 rounded-full ${colors[level]} transition-all duration-500`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className={`w-20 text-sm font-semibold text-right transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {count} ({percentage.toFixed(1)}%)
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tipos de Serviço */}
        <div className={`rounded-2xl p-6 shadow-lg border transition-all duration-300 ${
          isDarkMode
            ? 'bg-gray-800 border-gray-600'
            : 'bg-white border-pink-100'
        }`}>
          <h3 className={`text-xl font-bold mb-6 transition-all duration-300 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>Serviços Avaliados</h3>
          <div className="space-y-4">
            {Object.entries(stats.serviceTypes).map(([type, count]) => {
              const percentage = stats.totalResponses > 0 ? (count / stats.totalResponses) * 100 : 0;
              
              return (
                <div key={type} className="flex items-center space-x-4">
                  <div className={`w-36 text-sm font-medium transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {serviceTypeLabels[type] || type}
                  </div>
                  <div className={`flex-1 rounded-full h-4 transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-pink-100'
                  }`}>
                    <div
                      className="h-4 rounded-full bg-pink-400 transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className={`w-20 text-sm font-semibold text-right transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {count} ({percentage.toFixed(1)}%)
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lista de Respostas */}
      <div className={`rounded-2xl shadow-lg border overflow-hidden transition-all duration-300 ${
        isDarkMode
          ? 'bg-gray-800 border-gray-600'
          : 'bg-white border-pink-100'
      }`}>
        <div className={`px-8 py-6 border-b transition-all duration-300 ${
          isDarkMode
            ? 'border-gray-700 bg-gray-700'
            : 'border-pink-200 bg-pink-50'
        }`}>
          <h3 className={`text-xl font-bold transition-all duration-300 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-700'
          }`}>Avaliações Recentes</h3>
        </div>
        
        {responses.length === 0 ? (
          <div className={`p-12 text-center transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <Users className="w-16 h-16 mx-auto mb-4 text-pink-300" />
            <p className="text-lg">Nenhuma avaliação registrada ainda</p>
            <p className={`text-sm mt-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>As avaliações aparecerão aqui conforme forem enviadas</p>
          </div>
        ) : (
          <div className={`divide-y transition-all duration-300 ${
            isDarkMode ? 'divide-gray-700' : 'divide-pink-200'
          }`}>
            {responses.slice().reverse().map((response) => (
              <div key={response.id} className={`p-6 transition-all duration-300 ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-pink-50'
              }`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h4 className={`font-bold text-lg transition-all duration-300 ${
                        isDarkMode ? 'text-gray-200' : 'text-gray-700'
                      }`}>{response.name}</h4>
                      <div className={`flex items-center space-x-1 transition-all duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {new Date(response.timestamp).toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-pink-400" />
                        <span className={`transition-all duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{response.email || 'Não informado'}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-pink-400" />
                        <span className={`transition-all duration-300 ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>{response.phone || 'Não informado'}</span>
                      </div>
                      
                      <div>
                        <span className={`transition-all duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>Serviço:</span>
                        <span className={`ml-2 font-medium transition-all duration-300 ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                          {response.serviceType 
                            ? response.serviceType.split(',').map(type => serviceTypeLabels[type] || type).join(', ')
                            : 'Não especificado'
                          }
                        </span>
                      </div>
                      
                      <div>
                        <span className={`transition-all duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>Recomendaria:</span>
                        <span className={`ml-2 font-semibold ${
                          response.recommendation === 'sim' ? 'text-green-500' : 
                          response.recommendation === 'nao' ? 'text-red-500' : 'text-yellow-500'
                        }`}>
                          {response.recommendation === 'sim' ? 'Sim' : 
                           response.recommendation === 'nao' ? 'Não' : 'Talvez'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm transition-all duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>Satisfação:</span>
                        <span className={`font-semibold transition-all duration-300 ${
                          isDarkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                          {response.overallSatisfaction?.replace('_', ' ') || 'Não avaliado'}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm transition-all duration-300 ${
                          isDarkMode ? 'text-gray-400' : 'text-gray-500'
                        }`}>Qualidade:</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < (parseInt(response.serviceQuality) || 0)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedResponse(response)}
                    className={`ml-4 p-3 text-pink-400 hover:text-pink-500 rounded-xl transition-all duration-300 ${
                      isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-pink-50'
                    }`}
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de detalhes */}
      {selectedResponse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
            isDarkMode
              ? 'bg-gray-800 border border-gray-600'
              : 'bg-white'
          }`}>
            <div className={`p-8 border-b transition-all duration-300 ${
              isDarkMode ? 'border-gray-700' : 'border-pink-200'
            }`}>
              <h3 className={`text-2xl font-bold transition-all duration-300 ${
                isDarkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>Detalhes da Avaliação</h3>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Nome</label>
                  <p className={`text-lg mt-1 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>{selectedResponse.name}</p>
                </div>
                
                <div>
                  <label className={`block text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Email</label>
                  <p className={`text-lg mt-1 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>{selectedResponse.email || 'Não informado'}</p>
                </div>
                
                <div>
                  <label className={`block text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Telefone</label>
                  <p className={`text-lg mt-1 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>{selectedResponse.phone || 'Não informado'}</p>
                </div>
                
                <div>
                  <label className={`block text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>Tipo de Serviço</label>
                  <p className={`text-lg mt-1 transition-all duration-300 ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    {selectedResponse.serviceType 
                      ? selectedResponse.serviceType.split(',').map(type => serviceTypeLabels[type] || type).join(', ')
                      : 'Não especificado'
                    }
                  </p>
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Melhorias Sugeridas</label>
                <p className={`mt-2 p-4 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'text-gray-300 bg-gray-700'
                    : 'text-gray-700 bg-pink-50'
                }`}>
                  {selectedResponse.improvements || 'Nenhuma sugestão específica'}
                </p>
              </div>
              
              <div>
                <label className={`block text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Comentários e Sugestões</label>
                <p className={`mt-2 p-4 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? 'text-gray-300 bg-gray-700'
                    : 'text-gray-700 bg-pink-50'
                }`}>
                  {selectedResponse.additionalComments || 'Nenhum comentário adicional'}
                </p>
              </div>
              
              <div>
                <label className={`block text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Data de Envio</label>
                <p className={`text-lg mt-1 transition-all duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                  {new Date(selectedResponse.timestamp).toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
            
            <div className={`p-8 border-t transition-all duration-300 ${
              isDarkMode ? 'border-gray-700' : 'border-pink-200'
            }`}>
              <button
                onClick={() => setSelectedResponse(null)}
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                }`}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const exportData = () => {
    // Helper function to properly escape CSV values
    const escapeCSV = (value) => {
      if (value == null || value === undefined) return '';
      const str = String(value);
      // If the value contains comma, quote, or newline, wrap in quotes and escape internal quotes
      if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };

    // Create CSV content with proper UTF-8 BOM for Excel compatibility
    const headers = ['Nome', 'Email', 'Telefone', 'Tipo de Serviço', 'Satisfação Geral', 'Qualidade (Estrelas)', 'Recomendaria', 'Melhorias', 'Comentários', 'Data'];
    const csvRows = [
      headers.map(escapeCSV).join(','),
      ...responses.map(r => [
        escapeCSV(r.name),
        escapeCSV(r.email),
        escapeCSV(r.phone),
        escapeCSV(r.serviceType ? r.serviceType.split(',').map(type => serviceTypeLabels[type] || type).join('; ') : ''),
        escapeCSV(r.overallSatisfaction?.replace('_', ' ') || ''),
        escapeCSV(r.serviceQuality),
        escapeCSV(r.recommendation === 'sim' ? 'Sim' : r.recommendation === 'nao' ? 'Não' : 'Talvez'),
        escapeCSV(r.improvements ? r.improvements.split(',').join('; ') : ''),
        escapeCSV(r.additionalComments),
        escapeCSV(new Date(r.timestamp).toLocaleString('pt-BR'))
      ].join(','))
    ];
    
    const csvContent = csvRows.join('\n');
    
    // Add UTF-8 BOM for proper Excel encoding
    const BOM = '\uFEFF';
    const csvWithBOM = BOM + csvContent;

    const blob = new Blob([csvWithBOM], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `pesquisa_satisfacao_casa_guido_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };
}