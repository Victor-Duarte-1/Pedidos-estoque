// JavaScript - script.js
document.addEventListener('DOMContentLoaded', () => {
    const materials = [
        "A3", "AÇUCAR KG", "AÇUCAR SACHÊ", "ADESIVO P/ DVD", "ADOÇANTE SACHÊ", 
        "ADREN (EPINEFRINA) 1MG", "AGUA DESTILADA 10ML", "AGUA MINERAL 500ML", 
        "AGULHA 13X45", "AGULHA 25X70", // Adicione aqui todos os materiais
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
            const [quantity, ...materialParts] = item.textContent.split(' ');
            const material = materialParts.join(' ').replace('Excluir', '').trim();
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
            const [quantity, ...materialParts] = item.textContent.split(' ');
            const material = materialParts.join(' ').replace('Excluir', '').trim();
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
