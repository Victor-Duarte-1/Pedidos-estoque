// JavaScript - script.js
document.addEventListener('DOMContentLoaded', () => {
    const materials = ["A3", "AÇUCAR KG", "AÇUCAR SACHÊ", "ADESIVO P/ DVD", "ADOÇANTE SACHÊ",
        "ADREN (EPINEFRINA) 1MG", "AGUA DESTILADA 10ML", "AGUA MINERAL 500ML",
        "AGULHA 13X45", "AGULHA 25X70", "AGULHA 40X12", "AGULHA 30X70",
        "AGULHA 30X80", "AGULHA SPINAL (RAQUI)", "ALCOOL 70% 1L", "ALCOOL GEL 70% 5L",
        "ALCOOL SWAB", "ALGODÃO ROLO 500G", "ALLEGRA 180MG", "AMINOFILINA 24mg/ml 10ML",
        "AMIODARONA 3ML", "ARAMIN 10MG/ML", "ATROFARMA (ATROPINA)", "AVENTAL DESCARTAVEL",
        "AVENTAL ESTERIL (CIRURGICO)", "BALAS", "BISCOITOS", "BLOCO DE ANESTESIA (MOD. ANESTESIA)",
        "BLOCO DE NOTAS", "BLOCO DE MARCAÇÃO", "BOBINA DE SENHA", "BOBINA MAQUINETA",
        "BOLETIM OPERATORIO (MOD.CC-09)", "BOLINHA AZUL", "ETIQUETA LACRE DOURADA LAUDO",
        "BOLINHA VERDE", "BOLINHAS DOURADA PACIENTE", "BOM AR", "BOLSA COLETORA S.FECHADO",
        "BRIDION", "BROMOPRIDA 10MG/2ML (DIGESAN)", "BUSCOPAN COMPOSTO 5ML", "BUSCOPAN SIMPLES 20MG/ML",
        "CANUDO P/ CONTRASTE", "CAFE", "CAFE MAQUINA", "CAIXA BOX", "CANETA AZUL",
        "CANETA BIC", "CANETAS BRINDE", "CAPTOPRIL", "CATETER Nº18", "CATETER Nº20",
        "CATETER Nº22", "CATETER Nº24", "CATETER NASAL TIPO OCULOS", "CHÁ SACHÊ",
        "CHOCOLATE", "CLIPS 3/0", "CLIPS 6/0", "CLIPS 8/0", "CLONIDIN", "COLETOR UNIVERSAL",
        "CORTISONAL 500MG", "CORONAR 10MG/ML 1ML", "CONTRASTE DOTAREM 15ML", "CONTRASTE HENETIX 50ML",
        "CONTRASTE HENETIX 100ML", "CONTRASTE HENETIX 500ML", "COPO DESCARTAVEL", "COPO DE PAPEL (EVENTOS)",
        "DECADRON 4ML", "DESCARPACK PARDO/AMARELO 3L", "DESCARPACK LARANJA 13L", "DESCARPACK PARDA/AMARELA 13L",
        "DETERGENTE", "DEXAMETASONA 2,5ML", "DIFENIDRIN", "DIMORF 10MG/ML", "DIPIRONA 2ML",
        "DIRADINHOS", "EFEDRIN (EFEDRINA)", "ELASTICO AMARELO (LIGAS)", "ENVELOPE A4", "ENVELOPE CARTA",
        "ENO", "EQUIPO MACRO GOTAS", "ESCOVAS PVPI", "ESMERON (ROCURON)", "ESPARADRAPO BRANCO",
        "ESPARADRAPO TRANSPARENTE", "ETIQUETA LACRE DOURADA LAUDO", "ETIQUETA PARA EXAME",
        "ETILEFRIL 10mg/1ml", "EXTENSOR 60CM", "EXTENSOR PARA BOMBA INJETORA", "FILTRO BACTERIANO ADULTO",
        "FILTRO BACTERIANO INFANTIL", "FIO DE SUTURA N.2", "FIO DE SUTURA N.3", "FORMOL TAMPONADO",
        "FRALDA", "GARROTE", "GAZE", "GLICOSE 50%", "GRAMPO 26/6", "GUARDANAPO",
        "GRAMPO TRILHO PLASTICO", "HIDROCORTISONA 100mg", "CORTISOL 500mg", "ISORDIL 5MG",
        "LACRE AZUL", "LACRE VERDE", "LACRE VERMELHO", "LAMINA BISTURI N.11", "LAMPADA BULBO 12W",
        "LAMPADA BULBO 15W", "LAMPADA TUBULAR DA PEQUENA", "LASIX 20mg/2ml", "LEITE", "LENÇOL DESCARTAVEL",
        "LIVRO ATA", "LIVRO DE PROTOCOLO", "LIVRO DE ENTRADA DE SALA", "LUBRIGEL (GEL VAGINAL)",
        "LUVA M", "LUVA P", "LUVA VINIL", "LUVA ESTÉRIL Nº6,5", "LUVA ESTÉRIL Nº7,0",
        "LUVA ESTÉRIL Nº7,5", "LUVA ESTÉRIL Nº8,0", "MARCA TEXTO AMARELO", "MARCA TEXTO ROSA",
        "MARCADOR AZUL (PILOTO)", "MARCADOR PRETO (PILOTO)", "MARCADOR VERMELHO (PILOTO)",
        "MASCARA DESCARTAVEL", "MASCARA N95", "MINI COLHER", "MUVINLAX SACHÊ", "NEOSTIGMINA 0,5ML (NORMASTIG)",
        "NOPROSIL 2ML", "NOVALGINA 500MG/ML (DIPIRONA)", "OMEGA 3 (MARCADOR)", "ONDASENTRONA (ANSENTRON) 4MG/2ML",
        "ONDASENTRONA (ANSENTRON) 8MG/4ML", "PAMERGAN (PROMETAZINA) 2ML", "PAPEIS HIGIENICO",
        "PAPEL INTERFOLHADO", "PAPEL LENÇOL", "PAPEL TOALHA", "PAPEL TOALHA BOBINA", "PASTA CATALOGO",
        "PASTA EXAME", "PROPE", "PROTETOR DIARIO", "PULSEIRA DE ACOMPANHANTE", "PULSEIRA DE PACIENTE",
        "PULSEIRA IDENT. DE RISCO LILAS", "PULSEIRA IDENT. DE RISCO VERDE", "REPARIL GEL", "REPOSIÇÃO DE CAIXA",
        "RESMA A4", "RESMA PAPEL TIMBRADO", "RIOHEX ALC 0,5% (CLOREXIDINA)", "RIOHEX DEG 2% (CLOREXIDINA)",
        "RIVOTRIL (CLONAZEPAN)", "SABONETE LIQUIDO", "SACO AZUL DE 100LTS", "SACO AZUL DE 40LTS",
        "SACO AZUL DE 60LTS", "SACO BOBINA 5KG 35X50", "SACO INFEC. BRANCO DE 100L", "SACO INFEC. BRANCO DE 60L",
        "SACO PLAST. 250G 8X20", "SACOLAS", "SECUFILL", "SELO DE 1 HORA", "SELO DE 2 HORAS",
        "SELO DE 3 HORAS", "SERINGA 10ML", "SERINGA 1ML", "SERINGA 20ML", "SERINGA 3ML",
        "SERINGA 5ML", "SERINGA 60ML", "SERINGA PARA BOMBA INJETORA", "SEVONESS (250ML)", "SOLIDIFICADOR DE RESIDUOS",
        "SONDA ASPIRAÇÃO TRAQUEAL N°14", "SONDA ENDOTRAQUEAL/C BALÃO N°3.5 (TUBO)", "SONDA ENDOTRAQUEAL/C BALÃO N°4,5 (TUBO)",
        "SONDA ENDOTRAQUEAL/C BALÃO N°5 (TUBO)", "SONDA ENDOTRAQUEAL/C BALÃO N°7 (TUBO)", "SONDA ENDOTRAQUEAL/C BALÃO N°8 (TUBO)",
        "SONDAS URETRAL N16", "SORO 0,9% 1000ML", "SORO 0,9% 100ML", "SORO 0,9% 10ML", "SORO 0,9% 250ML",
        "SORO 0,9% 500ML", "SORO RINGER LACTATO 500ML", "TINTA PARA CARIMBO", "TONER AMARELO", "TONER AZUL",
        "TONER PRETO", "TONER VERMELHO", "TOUCA", "TRANSAMIN 250MG/5ML", "TUBO 2M (LATEX TC)", "TUBO 3M (LATEX RM)",
        "XYLESTESIN 2% 20MG", "XYLESTESIN GEL", "XYLESTESIN ISOBARICA 5ML"
        // ... (sua lista de materiais)
    ];

    const searchBar = document.getElementById('searchBar');
    const resultList = document.getElementById('resultList');
    const addedList = document.getElementById('addedList');
    const generateDataButton = document.getElementById('generateData');
    const copyButton = document.getElementById('copyButton');
    const dataModal = document.getElementById('dataModal');
    const closeModal = document.getElementById('closeModal');
    const dataContainer = document.getElementById('dataContainer');

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        resultList.innerHTML = '';

        if (query.trim() === '') {
            return;
        }

        materials.forEach(material => {
            if (material.toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.className = 'result-item';
                li.innerHTML = `
                    ${material}
                    <input type="number" min="1" placeholder="Quantidade">
                    <button>Adicionar</button>
                `;
                li.querySelector('button').addEventListener('click', function() {
                    const quantity = li.querySelector('input').value;
                    if (quantity) {
                        const addedItem = document.createElement('li');
                        addedItem.className = 'added-item';
                        addedItem.innerHTML = `
                            ${quantity} ${material}
                            <button class="delete-button">Excluir</button>
                        `;
                        addedItem.querySelector('.delete-button').addEventListener('click', function() {
                            addedItem.remove();
                        });
                        addedList.appendChild(addedItem);
                        li.querySelector('input').value = '';
                    }
                });
                resultList.appendChild(li);
            }
        });
    });

    generateDataButton.addEventListener('click', function() {
        const addedItems = document.querySelectorAll('#addedList .added-item');
        let html = '<table><tr><th>Quantidade</th><th>Material</th></tr>';

        addedItems.forEach(item => {
            const textContent = item.textContent.trim();
            const spaceIndex = textContent.indexOf(' ');
            const quantity = textContent.substring(0, spaceIndex);
            const material = textContent.substring(spaceIndex + 1).replace('Excluir', '').trim();

            html += `<tr><td>${quantity}</td><td>${material}</td></tr>`;
        });

        html += '</table>';
        dataContainer.innerHTML = html;
        dataModal.style.display = 'block';
    });

    closeModal.addEventListener('click', function() {
        dataModal.style.display = 'none';
    });

    copyButton.addEventListener('click', function() {
        const addedItems = document.querySelectorAll('#addedList .added-item');
        let text = '';

        addedItems.forEach(item => {
            const textContent = item.textContent.trim();
            const spaceIndex = textContent.indexOf(' ');
            const quantity = textContent.substring(0, spaceIndex);
            const material = textContent.substring(spaceIndex + 1).replace('Excluir', '').trim();
            text += `${quantity}\t${material}\n`;
        });

        navigator.clipboard.writeText(text).then(() => {
            alert('Dados copiados com sucesso!');
        }).catch(err => {
            console.error('Erro ao copiar os dados: ', err);
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === dataModal) {
            dataModal.style.display = 'none';
        }
    });
});
