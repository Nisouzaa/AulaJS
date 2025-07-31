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

// 3 - O Objeto do evento
// Todo evento possui um argumento especial, que contém informações do mesmo;
// Geralmente chamado de event ou e;
const mytitle = document.querySelector("#my-title");

mytitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - Propagando eventos
// Quando um elemento de um evento não é claramente definido pode haver propagação;
// Ou seja, umn outro elemento ativa o evento;
// Para resolver este problema temos o método stopPropagation;
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - Envento padrão
// Muitos elementos tem ações padrção no HTML
// Como os linkd que nos levam a outras páginas;
// Podemos remover isso com o método preventDefault;
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não á mais evento padrao!");
});

// 6 - Eventos de teclado
// Os eventos de teclado mapeiam as ações no teclado;
// Temos a disposição keyup e keydown;
// Keyup ativa quando a tecla é solta;
// E keydown quando é pressionado;

document.addEventListener("keyup", (e) => {
  console.log(`Apertou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Pesionou  a tecla ${e.key}`);
});

// 7 - Outros eventos do mouse
// O mouse pode ativar outros eventos;
// mousedown: pressionou o botãos do mouse;
// mouseup: soltou botão do muouse;
// dblclick: clique duplo;
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", (e) => {
  console.log("Pressionou o mouse");
});

mouseEvents.addEventListener("mouseup", (e) => {
  console.log("Soltou o botão do mouse");
});

mouseEvents.addEventListener("dblclick", (e) => {
  console.log("Duplo click");
});

// 8 - Movimento do mouse
// É possível ativar um evento a partir da movimentação do mouse;
// O ewvento é o mousemove;
// Com o objeto de evento podemos detectar a posição do ponteiro do mouse;
document.addEventListener("mousemove", (e) => {
  // console.log(`No eixo X: ${e.x}`);
  // console.log(`No eixo Y: ${e.y}`);
});

// 9 - Eventos por scroll
// Podemos também adicionar um evento ao scroll do mouse/página;
// Isso é feito pelo evento scroll;
// Podemos determinar que algo aconteça após chegar numa posição escolhida da tela;

window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200px");
  }
});

// 10 - Envento por foco
// O evento focus é disparado quando focamos em um elemento;
// Já o blur é quando perde o foco do elemento;
// Estes são comuns em inputs;
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input!");
});
input.addEventListener("blur", (e) => {
  console.log("Saiu do input!");
});

// 11 - Eventos de carregamento de página
// Podemos adicionar um evento ao carregar a página, que é o load;
// E qunado o usuário sai da página, que é o beforeunload,
window.addEventListener("load", () => {
  console.log("A página carregou!");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "teste";
});

// 12 - Técnica de debounce
// O debounce é uma técnica utilizada para fazer um evento disparar menos vezes;
// Isso poupa memória do usuário, pois talvez nem sempre o evento sejá necessário;

const debounce = (f, delay) => {
  let timeout;

  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando a cada 400ms");
  }, 400)
);
