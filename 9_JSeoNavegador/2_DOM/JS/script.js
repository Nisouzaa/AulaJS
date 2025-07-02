// 1 -  Movendo-se pelo DOM
// Todos os elementos podem ser acessados atráves de document.body;
// A partir deste elemento pai, vamos encontrando os childNodes (nós);
// E podemos acessar suas propriedades, e consequentemente modificá-los;

// console.log(document.body);

// console.log(document.body.childNodes[1]);

// console.log(document.body.childNodes[1].childNodes);

// console.log(document.body.childNodes[1].childNodes[1].textContent);

// // Selecionando elementos
// // Temos vários tipos de seletores especificamente um elemento, ou conjunto deles;
// // A diferença entre eles é a forma de seleção, que pode ser: classe, id, seletor de CSS;
// // Alguns exemplos são: getElementsByTagName, getElementById, querySelector.

// // 2 - Encontrando elementos por tag
// // Com o método getElementsByTagName selecionamos um conjunto de elementos por uma tag em comum;
// // O argumento é uma string que leva a tag a ser selecionada;

const listItens = document.getElementsByTagName("li");

// console.log(listItens);

// // 3 - Encontrando elementos por Id
// // Com o método getElementById selecionamos um único elemento, já que o id é único na página;
// // O argumento é uma string que leva o id a se selecionado;

// const title = document.getElementById("title");

// console.log(title);

// 4 - Encontrando elementos por classe
// Com o método getElementsByClassName selecionamos um conjunto de elementos por uma classe em comum;
// O argumento é uma string que leva a classe a ser selecionada;
// veja como os aributos do HTML começam a fazer mais santido em conjunto com JS;

const product = document.getElementsByClassName("product");

console.log(product);

// 5 - Encontrando elementos por Css
// Com o método querySelectorALL selecionamos um conjunto de elementos por meio de um seletor de CSS;
// E com o querySelector apenas um elemento, com base também um seletor de CSS;

// const productQuery = document.querySelectorAll(".product");

// console.log(productQuery);

const mainContainer = document.querySelector("#main-container");

// console.log(mainContainer);

// Alterando HTML
// Podemos mudar praticamente toda a página com DOM;
// Adicionar, remover e até clonar elementos;
// Alguns métodos muito utilizado são: insertBefore: ( inserir um elemento antes do outro), appendChild: ( inserir um elemento dentro do outro), replaceChild: (trocar um elemento pelo outro);

// 1 - Alterando HTML com insertBefore
// O insertBefore cria um elemento antes de um outro elemenento;
// É necessário criar um elementon com JS, isso pode ser feito com createElement;
// O elemento de referêmcia poder ser selecionado com alguns dos métodos que vimos antes;

// const p = document.createElement("p");

// const header = title.parentElement;

// // console.log(header);

// header.insertBefore(p, title);

// // 2 - Alterando o HTMl com appendChild
// // Com o appendChild é possivel addicionar um elemento dentro de outro;
// // Este elemento adicionado será o útilmo elemento do elemento pai;
// const navLinks = document.querySelector("nav ul");

// const li = document.createElement("li");

// navLinks.appendChild(li);

// // 3 - Alterando o HTML com replaceChild
// // Já o método replaceChild é utilzado para trocar um elemento;
// // Novamente precisamos do elemento pai;
// // E também o elemento para ser substituído e o que vai substituir;
// const h2 = document.createElement("h2");

// h2.textContent = "Meu novo título!";

// header.replaceChild(h2, title);

// // 4 - Creinado nós com texto
// // Os textos poder ser manipulados com métodos também;
// // Temos o createTextNode, que cria um nó de texto;
// // E este nó pode ser inserido em um elemento;
// const myText = document.createTextNode("Agora vamos colocar mais um título");

// console.log(myText);

// const h3 = document.createElement("h3");

// h3.appendChild(myText);

// console.log(h3);

// mainContainer.appendChild(h3);

// const meuNome = document.createTextNode("Meu Nome é Nicolas");

// console.log(meuNome);

// const p1 = document.createElement("p");

// p1.appendChild(meuNome);

// console.log(p1);

// header.appendChild(p1);

// // 5 - Trabalhando com altributos
// // Podemos ler e alterar os valores dos atributos;
// // Para ler vamos utilizar o método getAttribute;
// // E para alterar utilizaremos setAttribute, este leva o nome do atributo e o valor para alterar;
// const firstLink = navLinks.querySelector("a");

// console.log(firstLink);

// firstLink.setAttribute("href", "https://www.google.com/");

// console.log(firstLink.getAttribute("href"));

// firstLink.setAttribute("target", "_blank");

// // 6 - Altura e largura de elementos
// // É possivel também pegar valores com altura e largura de elementos;
// // Vamos utilizar as propriedades: offsetWidth e offsetHeight;
// // Se queremos desconsiderar as bordas, temos: clientWidth e clientHeight;
// const footer = document.querySelector("footer");

// console.log(footer.offsetWidth);
// console.log(footer.offsetHeight);

// console.log(footer.clientHeight);
// console.log(footer.clientWidth);

// 7 - Posição do elemento
// Com o método getClientBoundingRect podemos pegar várias informações do elemento;
// Como: posição no eixo X, Y, altura, largura e outros;
const product1 = product[0];

console.log(product1.getBoundingClientRect());

// 8 - Estilo com JavaScript
// Todo elemento possui uma propriedade chamada style;
// A partir dele conseguimos alterar as regras de CSS;
// Note que as regras separadas por traço viram camelCase, exemplo: bacground-color => barcgroundColor;
mainContainer.style.color = "yellow";
mainContainer.style.backgroundColor = "gray";
mainContainer.style.paddingBottom = "10px";

// 9 - Alterando estilo de HTMLCollection
// HTMLCollection aparece quando selecionamos vários elementos de uma vez;
// Podemos passar por cada um dos elementos com um for of, e estilizar individualmente cada item;

for(const li of listItens) {
  li.style.backgroundColor = "pink";
}
