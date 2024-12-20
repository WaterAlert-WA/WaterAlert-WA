    // Função JavaScript para atualizar o valor do H1 a cada 2 segundos
    function atualizarLeitura() {
      setInterval(function() {
        // Faz uma requisição Ajax para buscar os dados do PHP
        fetch('http://localhost/Site/RecebeDados.php')
          .then(response => response.text())
          .then(data => {
            document.getElementById('leituraSensor').innerText = data + ' cm';
          })
          .catch(error => console.error('Erro ao buscar os dados:', error));
      }, 50); // Atualiza a cada 2 segundos
    }

    // Inicia a função assim que a página carregar
    window.onload = atualizarLeitura;
