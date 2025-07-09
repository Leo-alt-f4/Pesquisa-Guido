@@ .. @@
                       <div>
                         <span className="text-gray-500">Serviço:</span>
                         <span className="ml-2 font-medium text-gray-700">
                          {response.serviceType 
                            ? response.serviceType.split(',').map(type => serviceTypeLabels[type] || type).join(', ')
                            : 'Não especificado'
                          }
                         </span>
                       </div>
@@ .. @@
                 <div>
                   <label className="block text-sm font-semibold text-gray-500 uppercase tracking-wide">Tipo de Serviço</label>
                   <p className="text-lg text-gray-700 mt-1">
                    {selectedResponse.serviceType 
                      ? selectedResponse.serviceType.split(',').map(type => serviceTypeLabels[type] || type).join(', ')
                      : 'Não especificado'
                    }
                   </p>
                 </div>

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