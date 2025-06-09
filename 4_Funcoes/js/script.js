// 1 - Criando uma função
// function minhaFuncao() {
//   console.log("Testando");
// }

// minhaFuncao();
// minhaFuncao();

// const minhaFuncaoEmVariavel = function () {
//   console.log("Função em variável");
// };

// minhaFuncaoEmVariavel();

// function funcaoComParamentro(txt) {
//   console.log(`Imprimindo: ${txt}`);
// }

// funcaoComParamentro("Alguma coisa");

// funcaoComParamentro("Outra coisa");

// // 2 -  return
// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2) {
//   return n1 + n2;
// }

// const resultado = soma(a, b);

// console.log(resultado);

// console.log(soma(c, d));

// // 3 - Escopo da função
// let y = 10;

// function testandoEscopo() {
//   let y = 20;
//   console.log(`Y dentro da função é: ${y}`);
// }

// testandoEscopo();

// console.log(`Y fora da função é: ${y}`);

// testandoEscopo();

// // 4 - Escopo aninhado
// let m = 10;

// function escopoAninhado() {
//   let m = 20;

//   if (true) {
//     let m = 30;

//     if (true) {
//       let m = 40;

//       console.log(m);
//     }
//     console.log(m);
//   }
//   console.log(m);
// }

// escopoAninhado();

// console.log(m);

// // 5 - Arrow function

// const testeArrow = () => {
//   console.log("Este é uma arrow function");
// };

// testeArrow();

// const parOuImpar = (n) => {
//   if (n % 2 === 0) {
//     console.log("Par");
//     return;
//   }

//   console.log("Impar");
// };

// parOuImpar(5);

// parOuImpar(10);

// // 6 - mais sobre Arrow Function
// const raizQuadrada = (x) => {
//   return x * x;
// };

// console.log(raizQuadrada(4));

// const raizQuadrada2 = (x) => x * x;

// console.log(raizQuadrada2(5));

// const helloWorld = () => console.log("hollo World");

// helloWorld();

// // 7 - Parametro opcional
// const multiplication = function (m, n) {
//   if (n === undefined) {
//     return m * 2;
//   } else {
//     return m * n;
//   }
// };

// console.log(multiplication(5));

// console.log(multiplication(2, 4));

// const greeting = (name) => {
//   if (!name) {
//     console.log("Olá!");
//     return;
//   }
//   console.log(`Olá ${name} !`);
// };

// greeting();

// greeting("Nicolas");

// 8 - valor Default
const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name} !`;
};

console.log(customGreeting("João"));

console.log(customGreeting("Nicolas", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};

repeatText("Testando");

repeatText("Agora repita 5 vezes", 5);

// 9 - Closure

function someFunction() {
  let txt = "Alugma coisa";

  function display() {
    console.log(txt);
  }

  display();
}

someFunction();

// 10 - Mais sobre Closure
const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);

const c2 = multiplicationClosure(10);

console.log(c1);

console.log(c2);

console.log(c1(5));

console.log(c2(10));

// 11 - Recursion
const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar!");
  } else {
    const x = n - m;

    console.log(x);

    untilTen(x, m);
  }
};

untilTen(100, 7);

// Infinito Recusion
//function run() {
//  console.log("executando...");
//  run()
// }

// run()

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do número ${num} é ${result}.`);
