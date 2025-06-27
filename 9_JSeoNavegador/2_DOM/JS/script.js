// 1 -  Movendo-se pelo DOM
// Todos os elementos podem ser acessados atráves de document.body;
// A partir deste elemento pai, vamos encontrando os childNodes (nós);
// E podemos acessar suas propriedades, e consequentemente modificá-los;

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// Selecionando elementos
// Temos vários tipos de seletores especificamente um elemento, ou conjunto deles;
// A diferença entre eles é a forma de seleção, que pode ser: classe, id, seletor de CSS;
// Alguns exemplos são: getElementsByTagName, getElementById, querySelector.

// 2 - Encontrando elementos por tag
// Com o método getElementsByTagName selecionamos um conjunto de elementos por uma tag em comum;
// O argumento é uma string que leva a tag a ser selecionada;

const listItens = document.getElementsByTagName("ul");

console.log(listItens);

// 3 - Encontrando elementos por Id
// Com o método getElementById selecionamos um único elemento, já que o id é único na página;
// O argumento é uma string que leva o id a se selecionado;

const title = document.getElementById("title");

console.log(title);

// 4 - Encontrando elementos por classe
// Com o método getElementsByClassName selecionamos um conjunto de elementos por uma classe em comum;
// O argumento é uma string que leva a classe a ser selecionada;
// veja como os aributos do HTML começam a fazer mais santido em conjunto com JS;

const product = document.getElementsByClassName("product");

console.log(product);

// 5 - Encontrando elementos por Css
// Com o método querySelectorALL selecionamos um conjunto de elementos por meio de um seletor de CSS;
// E com o querySelector apenas um elemento, com base também um seletor de CSS;

const productQuery = document.querySelectorAll(".product");

console.log(productQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// Alterando HTML
// Podemos mudar praticamente toda a página com DOM;
// Adicionar, remover e até clonar elementos;
// Alguns métodos muito utilizado são: insertBefore: ( inserir um elemento antes do outro), appendChild: ( inserir um elemento dentro do outro), replaceChild: (trocar um elemento pelo outro);

// 1 - Alterando HTML com insertBefore
// O insertBefore cria um elemento antes de um outro elemenento;
// É necessário criar um elementon com JS, isso pode ser feito com createElement;
// O elemento de referêmcia poder ser selecionado com alguns dos métodos que vimos antes;

const p = document.createElement("p");

const header = title.parentElement;

// console.log(header);

header.insertBefore(p, title);

// 2 - Alterando o HTMl com appendChild
// Com o appendChild é possivel addicionar um elemento dentro de outro;
// Este elemento adicionado será o útilmo elemento do elemento pai; 
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// 3 - Alterando o HTML com replaceChild
// Já o método replaceChild é utilzado para trocar um elemento;
// Novamente precisamos do elemento pai;
// E também o elemento para ser substituído e o que vai substituir;
