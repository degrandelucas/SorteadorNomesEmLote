let listaAmigos = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo").value;

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
    if (listaAmigos.length < 4) {
        alert("Adicione mais amigos para sortear!");
        return;
    } else {
        let sorteio = document.getElementById("lista-sorteio");
        sorteio.innerHTML = '';
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

    }
}

function reiniciar() {
    document.getElementById("lista-amigos").innerHTML = '';
    document.getElementById("lista-sorteio").innerHTML = '';
}
