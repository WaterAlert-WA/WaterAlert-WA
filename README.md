<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WA - Alagamentos</title>
  <link rel="stylesheet" href="./CSS/EstiloPáginaInicial.css">
  <script>
    // Função JavaScript para atualizar o valor do H1 a cada 2 segundos
    function atualizarLeitura() {
      setInterval(function() {
        // Faz uma requisição Ajax para buscar os dados do PHP
        fetch('RecebeDados.php')
          .then(response => response.text())
          .then(data => {
            document.getElementById('leituraSensor').innerText = data + ' cm';
          })
          .catch(error => console.error('Erro ao buscar os dados:', error));
      }, 1000); // Atualiza a cada 2 segundos
    }

    // Inicia a função assim que a página carregar
    window.onload = atualizarLeitura;
  </script>
</head>
<body>

  <!-- Cabeçalho -->
  <header>
    <div class="logo">
      <img src="./IMAGENS/logocerto.png" alt="Logo do Site">
    </div>
    <nav>
      <ul>
        <li><a href="./Home.html">Home</a></li>
        <li><a href="./Alagamentos.html">Alagamentos</a></li>
        <li><a href="./Outros.html">Outros</a></li>
      </ul>
    </nav>
    <div class="header-icons clearfix">
      <input type="text" id="txtBusca" placeholder="Buscar..." class="input-color"/>
      <a href="#search"><img src="./IMAGENS/search.png" alt="Buscar"></a>
      <a href="#login" class="button">Login</a>
    </div>
  </header>

  <main>
    <!-- Exibição das leituras do sensor -->
    <h1 id="leituraSensor">Aguardando leitura...</h1>
  </main>

</body>
</html>
