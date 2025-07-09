@@ .. @@
                       <div>
                         <span className="text-gray-500">Serviço:</span>
                         <span className="ml-2 font-medium text-gray-700">
-                          {serviceTypeLabels[response.serviceType] || response.serviceType || 'Não especificado'}
+                          {response.serviceType 
+                            ? response.serviceType.split(',').map(type => serviceTypeLabels[type] || type).join(', ')
+                            : 'Não especificado'
+                          }
                         </span>
                       </div>
@@ .. @@
                 <div>
                   <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">Tipo de Serviço</label>
                   <p className="text-lg text-gray-700 mt-1">
-                    {serviceTypeLabels[selectedResponse.serviceType] || selectedResponse.serviceType || 'Não especificado'}
+                    {selectedResponse.serviceType 
+                      ? selectedResponse.serviceType.split(',').map(type => serviceTypeLabels[type] || type).join(', ')
+                      : 'Não especificado'
+                    }
                   </p>
                 </div>