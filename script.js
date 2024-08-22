document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var object = {};
    formData.forEach((value, key) => { object[key] = value });
    var json = JSON.stringify(object);

    fetch('https://script.google.com/macros/s/AKfycbwyTAivIs_I5TdkPIgqkwKlOoQd6AlWyJaEtIRITJYHoFkonxkw9VAcC9_Lq3RTg2y0/exec', { // Sua URL do Web App
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: json
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Dados enviados com sucesso!');
        // Opcional: Adicione código para lidar com a resposta, exibir dados no modal, etc.
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Ocorreu um erro ao enviar os dados.');
    });
});
