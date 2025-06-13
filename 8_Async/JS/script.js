// O que é programação assíncrona?
// A programação assíncrona precisa ser utilizada quando as respostas não são obtidas de forma imediata no programa;
// Chamadas de API são assíncronas, não sabemos quanto tempo a resposta pode demorer;
// Até agora utilizamos só instruções síncronas;
// Na programação assíncrona as execuções não ocorrem em formato de fila, e sim no seu tempo;

// 1 - Função setTimeout
// A função setTimeout faz parte da programação assíncrona;
// Pois estabelecemos uma opção para ser executada após um cert tempo;
// Ou seja, o código continua rondando e depois temos a execução da função;

// console.log("Ainda não executou");

// setTimeout(function () {
//   console.log("Requisição assíncrona");
// }, 3000);

// console.log("Ainda não executou 2");

// // 2 - Função SetInterval
// // A função setInerval é semelhante a setTimeout, ela é executada após um tempo;
// // Porém ela não para de ser executada, temos a sua chamada definida pelo de espera na execução;
// // è como um loop onfinito com execução de tempo controlada;

// console.log("Intervalo assíncrono");

// // setInterval(function () {
// //     console.log("Intervalo Assíncrono");
// // }, 3000);

// console.log("Ainda não comecou 2");

// // 3 - Promises
// // As promises (promessas) são execuções assíncronas;
// // É literalmente uma promessa de um valor que pode chegar em um ponto futuro;
// // Utilizamos o objeto Promise e alugns métodos para auxiliar;
// const promessa = Promise.resolve(5 + 5);

// promessa
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("Outro código");

// // 4 - Falhas nas Promises
// // Uma promise pode conter um erro, ou dependendo de como o código é executado podemos receber um erro;
// // Utilizamos a função catch para isso, podemos pegar o erro e exibir;
// Promise.resolve(4 * "asd")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores inválidos");
//     }
//   })
//   .catch((err) => console.log(`um erro ocorreu: ${err}`));

// 5 - Rejeitando Promises
// As rejeição, deiferente do erro, ocorre quando nós decidimos ejetar uma promise;
// Podemos fazer isso com o método reject;
function chekNumber(n) {
  return new Promise((resolve, reject) => {
    if (n > 10) {
      resolve(`O número é maior que 10`);
    } else {
      reject(new Error("Numero muito alto ou muito baixo"));
    }
  });
}

const a = chekNumber(20);

const b = chekNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
  console.log(`Um erro ocorreu: ${err}`)
);

// 6 - Reolvendo Várias promises
// Com o método all podemos executar váriaveis promises;
// JavaScript se encarrega de verificar e retornar os seus valores finais;
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 4000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro!");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - Async Functions
// As async functions são funções que retonam Promises;
// Consequentemente há a possibilidade de receber o resultado delas depois, além da utilização dos métodos de Promise;
//
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é: ${value}`);
});

console.log("test async");

// 8 - Instrução await
// A isntrução await serve para aguardar o rsultado de uma async function;
// tornando mais silmples lidar com este tipo de função, desta maneira não precisamos trabalhar diretamente com Promises;
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolvendo a Promises");
    }, 2000);
  });
}

async function chamadaAsync() {
  console.log("Chamando a Promise, e espernado o resultado");
  const result = await resolveComDelay();
  console.log(`O resultado chegou: ${result}`);
}

chamadaAsync();
