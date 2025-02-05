let listaAmigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo").value.trim().toUpperCase();

  if (amigo === "") {
    alert("Digite o nome do amigo!");
    return;
  }

  if (listaAmigos.includes(amigo)) {
    alert("Nome do amigo já está na lista!");
    document.getElementById("nome-amigo").value = "";
    return;
  }

  listaAmigos.push(amigo);

  document.getElementById("lista-amigos").innerHTML = listaAmigos;
  document.getElementById("nome-amigo").value = "";
}

function sortear() {
  let sorteio = document.getElementById("lista-sorteio");

  if (listaAmigos.length < 2) {
    alert("Adicione mais amigos para sortear!");
    return;
  } else {
    embaralha(listaAmigos);
  }
  for (let i = 0; i < listaAmigos.length; i++) {
    if (i < listaAmigos.length) {
      sorteio.innerHTML +=
        listaAmigos[i] + "<br>";
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
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
  listaAmigos = [];
}
