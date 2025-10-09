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

// 6 - Dsetructuring
// O destructuring desestrutura dados complexos em várias variáveis
// Podemos utilizar em arrays e objetos
// Muitas variáveis podem ser criadas em um única linha
const fruts = ["maça", "Banana", "Uva"];

const [f1, f2, f3] = fruts;

console.log(f3, f1);

const productDatails = {
  name: "Mause",
  price: 39.99,
  category: "Periferico",
  color: "Cinza",
};

const { name: productName, price, category, color } = productDatails;

console.log(
  `O nome do produto é ${productName}, ele é da categoria ${category} custa R$${price}`
);

// 7 - Spread operator
// o spread pode ser utilizado em arrays e objetos
// Utilizados para inserir novos valores em um array ou objeto
// É um recusro que pode unir dois arrays, por exemplo
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "VW" };
const otherInfos = { km: 100000, price: 49999 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

// 8 - Classes
// As classes são recursos fundamentais para programar orientado a objetos
// Temos acessos a recursos importantes, como:
// constructor, propriedades, métodos
// Antes as classes em JavaScrprit eram ciradas com constructor functions

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola V", 200);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(30));

// 9 - Herança
// Herança é o recurso que nós da a possibilidade de uma classe herdar métodos e propriedades de outras
// A palavra extends determina qual classe será herdada
// Para enviar propriedades para a classe pai utilizamos super, isso é necessário
class ProductWhithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showcolors() {
    console.log("As cores São:");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWhithAttributes("Chapéu", 30.99, [
  "Preto",
  "Marron",
  "Cinza",
]);

console.log(hat);

console.log(hat.name);

hat.showcolors();

console.log(hat.productWithDiscount(50));
