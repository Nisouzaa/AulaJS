// O que é programação assíncrona?
// A programação assíncrona precisa ser utilizada quando as respostas não são obtidas de forma imediata no programa;
// Chamadas de API são assíncronas, não sabemos quanto tempo a resposta pode demorer;
// Até agora utilizamos só instruções síncronas;
// Na programação assíncrona as execuções não ocorrem em formato de fila, e sim no seu tempo;

// 1 - Função setTimeout
// A função setTimeout faz parte da programação assíncrona;
// Pois estabelecemos uma opção para ser executada após um cert tempo;
// Ou seja, o código continua rondando e depois temos a execução da função;

console.log("Ainda não executou");

setTimeout(function () {
  console.log("Requisição assíncrona");
}, 3000);

console.log("Ainda não executou 2");

// 2 - Função SetInterval
// A função setInerval é semelhante a setTimeout, ela é executada após um tempo;
// Porém ela não para de ser executada, temos a sua chamada definida pelo de espera na execução;
// è como um loop onfinito com execução de tempo controlada;

console.log("Intervalo assíncrono");

// setInterval(function () {
//     console.log("Intervalo Assíncrono");
// }, 3000);

console.log("Ainda não comecou 2");

// 3 - Promises
// As promises (promessas) são execuções assíncronas;
// É literalmente uma promessa de um valor que pode chegar em um ponto futuro;
// Utilizamos o objeto Promise e alugns métodos para auxiliar;
const promessa = Promise.resolve(5 + 5);

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })
  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("Outro código");

// 4 - Falhas nas Promises
// Uma promise pode conter um erro, ou dependendo de como o código é executado podemos receber um erro;
// Utilizamos a função catch para isso, podemos pegar o erro e exibir;
Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos");
    }
  })
  .catch((err) => console.log(`um erro ocorreu: ${err}`));

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

