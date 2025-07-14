// <!-- O que são Eventos ? -->
// <!-- Ações atreladas a algum comportamento de usúarios;
//  por exemplo: click, alguma tecla, movimenti da tela e mouse; -->
// <!-- Podemos inserir lígica quando estes eventos ocorrema; -->
// <!-- E podemos disparar eventos em certos elementos;  -->
// <!-- Esta técnica é conhecida como event handler; -->

// <!-- Como adicionar um evento -->
// <!-- Primeiramante precisamos selecionar o elemento que vai disparar o evento; -->
// <!-- Depois vamos ativar um métodod chamado addEnventListener; -->
// <!- Nele declaramos qual o tipo de evento, e por meio de callback definimos o que acontece; -->

// 1 - Adicionando eventos
const btn = document.querySelector("#my-buttom");

btn.addEventListener("click", function () {
  console.log("clicou no btn");
});

// Removendo eventos
// Há situações que vamos querer remover os eventos dos elementos;
// O método para isso é removeEventListener;
// Passamos evento que queremos remover como argumento;

// 2 - Removento evento
const secundBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("teste");
}

secundBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secundBtn.removeEventListener("click", imprimirMensagem);
});
