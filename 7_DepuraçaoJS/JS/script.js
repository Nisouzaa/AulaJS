// // 1 - Strict
// "use strict";

// // O que não deve ser feito

// // opa = "teste";

// // const opa = "teste";

// // const undefied = 10;

// // delet [].length;

// // 2 - console.log
// let a = 1;
// let b = 2;

// if (a == 1) {
//   a = b + 2;
// }

// console.log(a);

// for (let i = 0; i < b; i++) {
//   a = a + 2;
//   console.log(a);
// }

// if (a > 5) {
//   a = 25;
// }

// console.log(a);

// // 3 - Debugger.
// // Método de debug: debugger
// // O debugger é uma intrução que nos permite o debug no console do navegador;
// // Podemos evidenciar os valores das variáveis em tempo real e com o programa executando, o que ajuda bastante;
// let c = 1;
// let d = 2;

// if (c == 1) {
//   c = d + 2;
// }

// // debugger;

// for (let i = 0; i < d; i++) {
//   c = c + 2;
// }

// console.log("Executou o loop");

// // debugger;

// if (c > 5) {
//   c = 26;
// }

// console.log(c);

// 4 - Tratamento de dado por função.
// Nunca podemos confiar no dado que é passado pelo usuário;
// Sempre devemos criar validações e tratamento para o mesmos;
// Ao longo do curso aprendemos diversas técnicas;

function cheNumber(n) {
  const result = Number(n);

  if (Number.isNaN(result)) {
    console.log("Valor incorreto!");
    return;
  }

  console.log("Valor correto!");
  return result;
}

cheNumber(5);
cheNumber("20");
cheNumber({});
cheNumber("teste");

// 5 - Excpetions
// As exceptions são erros que nós geramos no programa;
// Este recuso faz o programa ser abortado, ou seja, ele não continua sua execução;
// Utilizamos a expressão de throw new error, com a mensagem de erro como argumento;

let x = 10;

if (x != 11) {
  // throw new Error("O valor de x não pode ser diferente de 11!");
}

// 6 - Try Catch
// Try Catch é um recurso famoso nas linguagens de programação;
// Onde tentanmos executar algo em try, e se um erro ocorrer ele cai no bloco do catch;
// Útil tanto para debug, como também no desenvolvimento de uma aplicação sólida;

try {
  const soma = x + y;
} catch (error) {
  console.log(`Erro no programa: ${error}`);
}

// 7 - Finally
// O finally é uma intrução que vai depois do bloco try
// catch;
// Ela é executada independente de haver algum erro ou não em try;

try {
  const value = cheNumber("asd");

  if (!value) {
    throw new Error("Valores inválidos");
  }
} catch (error) {
  console.log(`Opa, aconteceu um problema: ${error}`);
} finally {
  console.log("O código foi executado!");
}

// 8 - Assertions
// Assertions são quando os tratamento de valores passados pelo usuário, geram um erro;
// Porém este recurso tem como objetivo nos ajudar no desenvolvimento do programa, ou seja, seria algo para os devs e não para os usuários;

function checkArray(arr) {
  if (arr.length === 0) {
    throw new Error("O array precisa de ter um elementos");
  } else {
    console.log(`O Array tem ${arr.length} elementos`);
  }
}

// checkArray([]);
checkArray([1, 2, 3])