import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
import verificarListaVazia from "./verificarListaVazia.js";
const inputItem = document.getElementById("input-item");
let contador = 0;
export function criarItemDaLista() {
  if (inputItem.value === "") {
    alert("Digite o item que deseja adicionar");
    return;
   
  }
  

  const itemDaLista = document.createElement("li");
  const containerItemDaLista = document.createElement("div");
  containerItemDaLista.classList.add("lista-item-container");
  const inputCheckbox = document.createElement("input");
  inputCheckbox.type = "checkbox";
  inputCheckbox.id = "checkbox-" + contador++;
  const nomeItem = document.createElement("p");
  nomeItem.innerText = inputItem.value;

  inputCheckbox.addEventListener("click", function () {
    if (inputCheckbox.checked) {
      nomeItem.style.textDecoration = "line-through";
    } else {
      nomeItem.style.textDecoration = "none";
    }
  });
  const dataCompleta = gerarDiaDaSemana();
  containerItemDaLista.appendChild(inputCheckbox);
  containerItemDaLista.appendChild(nomeItem);

  const itemData = document.createElement("p");
  itemData.innerText = dataCompleta;
  itemData.classList.add("texto-data");
  itemDaLista.appendChild(containerItemDaLista);

  itemDaLista.appendChild(itemData);
 inputItem.value =''
  return itemDaLista;
}
