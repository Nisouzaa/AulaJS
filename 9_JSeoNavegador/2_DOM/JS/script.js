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

const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Encontrando elementos por Id
// Com o método getElementById selecionamos um único elemento, já que o id é único na página;
// O argumento é uma string que leva o id a se selecionado;

const title = document.getElementById("title");

console.log(title);
