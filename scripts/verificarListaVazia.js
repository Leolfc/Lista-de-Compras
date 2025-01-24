const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");
function verificarListaVazia(listaDeCompras) {
  const itenDaLista = listaDeCompras.querySelectorAll("li");
  if (itenDaLista.length === 0) {
    mensagemListaVazia.style.display = "block";
  } else {
    mensagemListaVazia.style.display = "none";
  }
}

export default verificarListaVazia;