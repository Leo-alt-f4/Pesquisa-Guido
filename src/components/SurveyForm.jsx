<div>
                <div className="md:col-span-2">
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