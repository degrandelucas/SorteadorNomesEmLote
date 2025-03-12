    let listaNomes = [];
    let listaNomesRepetidos = [];

    function adicionar() {
      let nomesInput = document.getElementById("nomes").value;

      if (!nomesInput.includes(",") && nomesInput !== "") {
        alert("Separe os nomes usando vírgulas!");
        return;
      }

      if (nomesInput === "") {
        alert("Nehum nome foi adicionado!");
        return;
      }

      let nomesSeparados = nomesInput.split(",").map(nome => nome.trim().toUpperCase()).filter(nome => nome !== "");

      nomesSeparados.forEach((nome) => {
        if (nome !== "") {
          if (listaNomes.includes(nome)) {
            listaNomesRepetidos.push(nome);
          } else {
            listaNomes.push(nome);
          }
        }
      });

      //alert(`Os nomes ${listaNomesRepetidos.join(",")} estavam repetidos e foram removidos!`);

      document.getElementById("lista-nomes").innerHTML = listaNomes;
      document.getElementById("nomes").value = "";
   
    }

    function sortear() {
      let sorteio = document.getElementById("lista-sorteio");
      sorteio.innerHTML = '';

      if (listaNomes.length < 2) {
        alert("Adicione mais nomes para sortear!");
        return;
      } else {
        embaralha(listaNomes);
      }

      for (let i = 0; i < listaNomes.length; i++) {
        if (i < listaNomes.length) {
          sorteio.innerHTML += `${i+1} - ${listaNomes[i]} <br>`;
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
      listaNomesRepetidos = [];
    }
