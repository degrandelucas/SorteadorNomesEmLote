    let listaNomes = [];

    function adicionar() {
      let nome = document.getElementById("nome").value.trim().toUpperCase();

      if (nome === "") {
        alert("Digite um nome!");
        return;
      }

      if (listaNomes.includes(nome)) {
        alert("Nome já está na lista!");
        document.getElementById("nome").value = "";
        return;
      }

      listaNomes.push(nome);

      document.getElementById("lista-nomes").innerHTML = listaNomes;
      document.getElementById("nome").value = "";
    }

    function sortear() {
      let sorteio = document.getElementById("lista-sorteio");
      sorteio.innerHTML = '';

      if (listaNomes.length < 2) {
        alert("Adicione mais amigos para sortear!");
        return;
      } else {
        embaralha(listaNomes);
      }
      for (let i = 0; i < listaNomes.length; i++) {
        if (i < listaNomes.length) {
          sorteio.innerHTML +=
            listaNomes[i] + "<br>";
        }
      }
    }

    function embaralha(lista) {
      for (let indice = lista.length; indice; indice--) {
        let indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [
          lista[indiceAleatorio],
          lista[indice - 1],
        ];
      }
      return lista;
    }

    function reiniciar() {
      document.getElementById("lista-nomes").innerHTML = "";
      document.getElementById("lista-sorteio").innerHTML = "";
      listaNomes = [];
    }
