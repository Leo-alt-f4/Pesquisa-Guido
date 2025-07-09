import { useState } from 'react';
import { Star, Send, CheckCircle, MessageCircle, Award, Heart } from 'lucide-react';

export default function SurveyForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    overallSatisfaction: '',
    serviceQuality: '',
    recommendation: '',
    improvements: '',
    additionalComments: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submission = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };
    onSubmit(submission);
    setIsSubmitted(true);
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        overallSatisfaction: '',
        serviceQuality: '',
        recommendation: '',
        improvements: '',
        additionalComments: ''
      });
    }, 4000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-pink-100 p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-400 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            Muito obrigado!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Sua avaliação foi registrada com sucesso. Sua opinião é fundamental para continuarmos melhorando nossos serviços e cuidando das crianças e famílias que precisam de nós.
          </p>
          <div className="bg-pink-50 rounded-2xl p-6">
            <p className="text-pink-700 font-medium">
              A Casa GUIDO agradece sua participação e confiança em nosso trabalho de amor e cura.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Introdução com logo */}
      <div className="bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-3xl p-10 mb-10 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-6 right-6 opacity-30">
          <div className="flex items-center space-x-1">
            <div className="w-16 h-4 bg-pink-300 rounded-full shadow-lg"></div>
            <div className="w-16 h-4 bg-yellow-300 rounded-full shadow-lg"></div>
            <div className="w-16 h-4 bg-purple-300 rounded-full shadow-lg"></div>
            <div className="w-16 h-4 bg-blue-300 rounded-full shadow-lg"></div>
            <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 mb-8">
          <div className="w-16 h-16 bg-white/95 rounded-2xl flex items-center justify-center p-2 shadow-lg backdrop-blur-sm">
            <img 
              src="/image.png" 
              alt="Logo OSC GUIDO" 
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
          <h2 className="text-3xl font-bold text-white drop-shadow-lg">Avalie Nossa Atuação</h2>
        </div>
        
        <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 mb-6 border border-white/20 shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-white drop-shadow-md flex items-center space-x-3">
            <Heart className="w-6 h-6 text-pink-200" />
            <span>Sobre a OSC GUIDO</span>
          </h3>
          <div className="space-y-5 text-white/95 leading-relaxed">
            <p className="text-lg font-medium bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <strong className="text-pink-100">O GUIDO</strong> (Grupo de Pais e Amigos pela Unidade InfantoJuvenil de Onco-hematologia) é um grupo de pessoas dedicadas, profissionais de saúde, pais e voluntários que se reuniram para apoiar as famílias que viajavam de longe em busca de tratamento para seus filhos.
            </p>
            
            <p className="text-lg bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              O GUIDO evoluiu para a <strong className="text-purple-100">Casa GUIDO</strong>, uma OSC comprometida com o bem-estar de crianças e adolescentes com câncer. Desde 2010, temos sido um farol de esperança para famílias em busca de tratamento. Nossa casa acolhedora oferece não apenas tratamento médico, mas também amor, apoio e refeições para aqueles que estão longe de casa.
            </p>
            
            <p className="text-lg bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              Ajudamos com o transporte, medicamentos, terapias e educação, criando um ambiente onde <strong className="text-yellow-100">o sorriso é mais forte do que o câncer</strong>. A Casa GUIDO é uma luz na escuridão do câncer pediátrico. Somos um lembrete de que, juntos, podemos superar qualquer desafio e encher os corações de crianças com a luz da esperança.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/30">
          <p className="text-xl font-semibold text-center text-white drop-shadow-md leading-relaxed">
            <span className="text-pink-100">Sua avaliação</span> nos ajuda a continuar oferecendo o melhor cuidado e apoio para <span className="text-purple-100">crianças e adolescentes (0-19 anos)</span> em tratamento oncológico e suas famílias.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-pink-100 overflow-hidden">        
        <form onSubmit={handleSubmit} className="p-10 space-y-10">
          {/* Informações pessoais */}
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 border border-pink-200">
            <h3 className="text-2xl font-bold text-gray-700 mb-6 flex items-center space-x-3">
              <MessageCircle className="w-6 h-6 text-pink-500" />
              <span>Suas Informações</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-bold text-gray-700 mb-4">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-5 py-4 border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all text-gray-700 text-lg shadow-sm"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-base font-bold text-gray-700 mb-4">
                  E-mail
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-5 py-4 border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all text-gray-700 text-lg shadow-sm"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-base font-bold text-gray-700 mb-4">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className="w-full px-5 py-4 border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all text-gray-700 text-lg shadow-sm"
                  placeholder="(11) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-base font-bold text-gray-700 mb-4">
                  Tipos de serviços utilizados (selecione todos que se aplicam) *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { value: 'hospedagem', label: 'Hospedagem na Casa GUIDO' },
                    { value: 'transporte', label: 'Transporte para tratamento' },
                    { value: 'medicamentos', label: 'Auxílio com medicamentos' },
                    { value: 'terapias', label: 'Terapias e apoio psicológico' },
                    { value: 'educacao', label: 'Apoio educacional' },
                    { value: 'alimentacao', label: 'Refeições e alimentação' },
                    { value: 'outros', label: 'Outros serviços' }
                  ].map((service) => (
                    <label key={service.value} className="flex items-center cursor-pointer p-4 rounded-2xl hover:bg-pink-50 transition-all border border-pink-100 hover:border-pink-200 shadow-sm hover:shadow-md">
                      <input
                        type="checkbox"
                        checked={formData.serviceType.includes(service.value)}
                        onChange={(e) => {
                          const current = formData.serviceType.split(',').filter(Boolean);
                          if (e.target.checked) {
                            handleChange('serviceType', [...current, service.value].join(','));
                          } else {
                            handleChange('serviceType', current.filter(item => item !== service.value).join(','));
                          }
                        }}
                        className="w-5 h-5 text-pink-500 border-2 border-pink-300 rounded-lg focus:ring-pink-400 focus:ring-2"
                      />
                      <span className="ml-3 text-gray-700 font-medium text-base">{service.label}</span>
                    </label>
                  ))}
                </div>
                {/* Campo oculto para validação obrigatória */}
                <input
                  type="hidden"
                  value={formData.serviceType}
                  required
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>

            {/* Qualidade do atendimento */}
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-6">
                Avalie a qualidade do atendimento recebido *
              </label>
              <div className="flex justify-center">
                <div className="flex gap-3 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-3xl shadow-lg border border-pink-200">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => handleChange('serviceQuality', rating.toString())}
                      className="p-4 transition-all hover:scale-125 rounded-2xl hover:bg-white/50"
                    >
                      <Star
                        className={`w-12 h-12 ${
                          parseInt(formData.serviceQuality) >= rating
                            ? 'text-yellow-400 fill-current drop-shadow-lg'
                            : 'text-pink-300 hover:text-yellow-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-center text-base text-gray-600 mt-4 font-medium">Clique nas estrelas para avaliar (1 a 5 estrelas)</p>
            </div>

            {/* Recomendação */}
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-6">
                Você recomendaria a Casa GUIDO para outras famílias? *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { value: 'sim', label: 'Sim, certamente recomendaria', color: 'green' },
                  { value: 'talvez', label: 'Talvez, dependendo da situação', color: 'yellow' },
                  { value: 'nao', label: 'Não recomendaria', color: 'red' }
                ].map((option) => (
                  <label key={option.value} className="cursor-pointer">
                    <input
                      type="radio"
                      name="recommendation"
                      value={option.value}
                      checked={formData.recommendation === option.value}
                      onChange={(e) => handleChange('recommendation', e.target.value)}
                      className="sr-only"
                      required
                    />
                    <div className={`p-6 rounded-2xl text-center font-bold transition-all border-2 shadow-md hover:shadow-lg text-base ${
                      formData.recommendation === option.value
                        ? `bg-${option.color}-100 text-${option.color}-600 border-${option.color}-300 shadow-lg transform scale-105`
                        : 'bg-white text-gray-600 border-pink-200 hover:bg-pink-50 hover:border-pink-300'
                    }`}>
                      {option.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Melhorias */}
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-6">
                Em quais áreas podemos melhorar? (Selecione todas que se aplicam)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Qualidade da hospedagem',
                  'Atendimento da equipe',
                  'Comunicação e informação',
                  'Instalações e estrutura',
                  'Horários de funcionamento',
                  'Apoio psicológico',
                  'Atividades para crianças',
                  'Refeições oferecidas',
                  'Transporte',
                  'Apoio educacional',
                  'Outros'
                ].map((improvement) => (
                  <label key={improvement} className="flex items-center cursor-pointer p-4 rounded-2xl hover:bg-pink-50 transition-all border border-pink-100 hover:border-pink-200 shadow-sm hover:shadow-md">
                    <input
                      type="checkbox"
                      checked={formData.improvements.includes(improvement)}
                      onChange={(e) => {
                        const current = formData.improvements.split(',').filter(Boolean);
                        if (e.target.checked) {
                          handleChange('improvements', [...current, improvement].join(','));
                        } else {
                          handleChange('improvements', current.filter(item => item !== improvement).join(','));
                        }
                      }}
                      className="w-6 h-6 text-pink-500 border-2 border-pink-300 rounded-lg focus:ring-pink-400 focus:ring-2"
                    />
                    <span className="ml-4 text-gray-700 font-semibold text-base">{improvement}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Comentários adicionais */}
            <div>
              <label className="block text-xl font-bold text-gray-800 mb-6">
                Comentários, sugestões ou mensagem para a equipe
              </label>
              <textarea
                value={formData.additionalComments}
                onChange={(e) => handleChange('additionalComments', e.target.value)}
                rows={6}
                className="w-full px-6 py-5 border-2 border-pink-200 rounded-2xl focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all resize-none text-gray-700 text-lg shadow-sm"
                placeholder="Compartilhe suas experiências, sugestões de melhoria, elogios ou qualquer mensagem que possa nos ajudar a cuidar melhor das crianças e famílias..."
              />
            </div>
          </div>

          {/* Botão de envio */}
          <div className="pt-8">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-6 px-10 rounded-2xl font-bold text-xl hover:from-pink-600 hover:to-purple-600 focus:ring-4 focus:ring-pink-300 transition-all flex items-center justify-center space-x-4 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <Send className="w-6 h-6" />
              <span>Enviar Avaliação</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}