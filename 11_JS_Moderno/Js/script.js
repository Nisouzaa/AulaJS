// <!-- O que é JS ES6+
// ° São as novas versões de JavaScript;
// ° Cada uma delas trouxe recursos que ajudam muito nós Devs;
// ° Estes recursos são essenciais para trabalhar com frameworks/libs como React, Vue e Angular;
// ° Agilizam muito o desenvolviemnto com JS; -->

// 1 -  Variáveis com let e const
// ° Temos duas novas formas de declarar variáveis a partir do ES6, que são let const
// ° let é uma forma de atribuir valor, e pode modificar depois
// ° Já const declara uma constante, podemos atribuir um valor e não alterar
// ° O grnade diferencial são os escopos em bloco -->

// var x = 10;
// var y = 15;

// if (y > 10) {
//   var x = 5;
//   console.log(x);
// }

// console.log(x);

// let a = 10;
// let b = 15;

// if (b > 10) {
//   let a = 5;
//   console.log(a);
// }

// console.log(a);

// function logName() {
//   const name = "Nicolas";
//   console.log(name);
// }

// const name = "Souza";

// logName();
// console.log(name);

// // 2 - Arrow Functions
// // As arrow functions são um recurso para criar funções de forma mais simples;
// // Alguns aspectos a diferenciam das funções comuns;
// // Por exemplo o this, que é relacionado ao elemento pai de quem está executando;

// const sum = function (a, b) {
//   return a + b;
// };

// const arrowSum = (a, b) => a + b;

// console.log(sum(5, 5));

// console.log(arrowSum(5, 5));

// const greeting = (name) => {
//   if (name) {
//     return `Hello ${name}`;
//   } else {
//     return "Hello";
//   }
// };

// console.log(greeting("Nicolas"));
// console.log(greeting());

// const user = {
//   name: "Niih",
//   sayUserName() {
//     setTimeout(function () {
//       console.log(this);
//       console.log(`Username: ${this.name}`);
//     }, 1000);
//   },
//   sayUserNameArrow() {
//     setTimeout(() => {
//       console.log(this);
//       console.log(`Username: ${this.name}`);
//     }, 2000);
//   },
// };

// // user.sayUserName();
// // user.sayUserNameArrow();

// // 3 - Filter
// // O filter é um método de array para filtrar dados;
// // O filter é determinado por nós, por meio de uma função;
// // Resultado em um array com apenas os elementos que precisamos;
// // Nessas versões mais noivas de JS temos vários métodos de array importantes como este;
// const arr = [1, 2, 3, 4, 5, 6];

// const highNumber = arr.filter((n) => {
//   if (n >= 3) {
//     return n;
//   }
// });

// console.log(highNumber);

// const users = [
//   { name: "Nicolas", available: true },
//   { name: "Maicom", available: false },
//   { name: "Reinaldo", available: true },
//   { name: "Pedro", available: false },
//   { name: "Antony", available: true },
// ];

// const availableUsers = users.filter((user) => user.available);

// console.log(availableUsers);

// 4 - Map
// O map também é um método de array, percorre todos os elementos do mesmo;
// O map é utilizado para modificar o array de origem;
// filter remove elementos desnecessários, map altera os que preciamos;
const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 150, category: "Eletro" },
  { name: "Fogão", price: 499, category: "Eletro" },
  { name: "Calça Jeans", price: 87.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

const aula = [
  { portugues: "verbo", sala: 2, professor: "Guilherme" },
  { matematica: "Dividir", sala: 4, professor: "Luan" },
  { geografia: "Montanhas", sala: 5, professor: "Denes" },
  { ingles: "tuby", sala: 3, professor: "Romero" },
];

aula.map((materia) => {
  if (materia.sala === 4) {
    materia.nota = true;
  }
});

console.log(aula);

// 5 - Template Literals
// O recusro de template literals permite a ipressão de variáveis em um texto
// Escrevermos entres crases, dessa maneira: `texto`
// E as variáveis são inseridas com: ${variavel}

const userName = "Nicolas";
const age = 25;

console.log(`O nome do usúario é ${userName} e tem ${age} anos`);
