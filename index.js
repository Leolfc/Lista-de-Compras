import verificarListaVazia from "./scripts/verificarListaVazia.js";
import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");
const inputItem = document.getElementById("input-item");

botaoAdicionar.addEventListener("click", (evento) => {
  evento.preventDefault();
  const itemDaLista = criarItemDaLista();
  listaDeCompras.appendChild(itemDaLista);
  verificarListaVazia(listaDeCompras);

});

verificarListaVazia(listaDeCompras);

inputItem.addEventListener('keypress', (evento)=>{

  if(evento.key === 'Enter'){
    evento.preventDefault()
    botaoAdicionar.click()
  
  }
  }
  
  )