// 1 - Array são listas, com qualquer tipo de elementos
// const list = [1, 2, 3, 4, 5];

// console.log(list);

// console.log(typeof list);

// const itens = ["Nicolas", 25, 1.73, true, []];

// console.log(itens);

// 2 - Mais sobre arrays
// const arr = ["N", "i", "i", "h"];

// console.log(arr[0]);

// console.log(arr[2]);

// console.log(arr[4]);

// 3 - Propriedades: são como informações de um objeto; //
// os arrays tem propriedades, assim como outros tipos de dados,
// as propriedades podem ser acessadas por notrção de pontos ou colchetes:
// dado.prop ou dado[´prop´]

// const number = [5, 4, 3];

// console.log(number.length); // =propriedade= para saber a quantidade de elementos de uma lista length.
// console.log(number[`length`]);

// const userName = "Nicolas";

// console.log(userName.length);

// 4 - Métodos: São como funções, acessamos com notação de pontos () para invocar; um importante conceito da OOP: Objetos são composto por métodos e propriedades; como muitos dados são objeto em JS, temos métodos e propriedade nelas.
// const otherNumbers = [1, 2 ,3];

// const allNumbers = number.concat(otherNumbers);

// console.log(allNumbers);

// const text = "algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// console.log(text.indexOf("g"));

// 5 - Objetos (Object Literals)
// Em Js tremos um tipo de dado que é objeto, mais seu nome técnico é objetc literals; isso porque o objeto vem da Orientaçãos a Objetos, com outros recusos: instância, herança...
// Já o literals possui apenas propriedades e métodos, nós mesmo os criamos, objeto fica em um bloco de {}.

// const person = {
//     name: "Nicolas",
//     age: 25,
//     job: "Militar",
// }

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// console.log(typeof person);

// 6 - Criando e Deletando objetos
// const car = {
//   engine: 12.0,
//   brand: "Ferrari",
//   modelo: "F8",
//   Km: 30000,
// };

// console.log(car);

// car.doors = 2;

// console.log(car);

// delete car.modelo;

// console.log(car);

// // Annotation: Diferança entra arraus e objetos
// // Os arrays são utilizados como listas de itens; Já os objetos são utilizados para descrever um item, contém as informações do mesmo, e as propriedades possuim diferentes tipos de dados, podemos ter também um arrays de objetos, isso é muito utilizado; Estes dois dados são muito importantes na programação.

// //  7 - Mais sobre Objetos:
// // Podemos copiar todos as propreidades de um objeto para outro com o Método assing;
// //O objeto literal é uma instância de um objeto, chamado Object;
// // Um objeto ou array criado com const pode ter sues elementos e propreidades modificadas.
// const obj = {
//   a: "teste",
//   b: true,
// };

// console.log(obj);

// console.log(obj instanceof Object);

// const obj2 = {
//   c: [],
// };

// Object.assign(obj2, obj); // copia os elementos de outro objeto

// console.log(obj2);

// // 8 - Conhendo mais sobre objetos
// //Podemos verificar as propriedades de um objeto pelo Método Keys de object;
// // Com o Método entries, recebemos arrays dos nomes das propriedades com seus valores;
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));

// console.log(Object.keys(car));
// console.log(Object.entries(car));

// // 9 - Mutação (Mutability)
// //Outra característica interessante é a mutação, isso ocorre quando criamos um objeto a partir de outro;
// // Este novo Objeto, não é novo e sim uma referência do primeiro;
// // As mudanças dele, podem afetar a cópia e vice-versa;
// const a = {
//   name: "Nicolas",
// };

// console.log(a);

// const b = a;

// a.age = 25;

// console.log(a === b);

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// 10 - Loop em arrays
// Algo muito comum é percorrer os arrays atráves de estruturas de repetição, como for e while;
// Isso serve para utilizar o resultado de cada um dos elementos de forma simples, sem repetição de código;
// const user = ["Nicolas", "Natalia", "Zeus", "Souza"];

// for (let i = 0; i < user.length; i++) {
//   //length comprimemnto;
//   console.log(`Listando o usuário: ${user[i]}`);
// }
// // 11 - Métodos de arrays:
// // Push e pop
// // Os métodos de array são muitos úteis para Manipular os arrays, ou seja, alterar os seus valores de alguma forma;
// // Com o push adicionamos um item ao fim do array;
// // Com o pop temos a remoção de um elemento no fim array;
// // const array = ["A", "B", "C"];

// // const novArray = ["F", "G", "H"];

// // array.push("D");

// // console.log(array);

// // array.pop();

// // console.log(array);

// // const itemRemovido = array.pop(); //pop retorna o valor removido da arrays;

// // console.log(itemRemovido);

// // console.log(array);

// // array.push("z", 23, "Olá");

// // console.log(array);

// // 12 - Shift e Unshift
// // Ao contrario de pop e push, temos shift e unshift;
// // Método shift remove o primeiro elemento do array;
// // Já o método unshift adiciona elementos ao início do array;

// const letters = ["a", "b", "c"];

// const letter = letters.shift(); //shift  retorna o valor removido da arrays;

// console.log(letters);

// console.log(letter);

// letters.unshift("q", 23, "Olá");

// letters.unshift("d");

// console.log(letters);

// // 13 - IndexOf e lastIndexOf
// // o método indexOf nos permite encotrar o índece de um elemento, que passamos como argumento para o método;
// // Já o lastIndexOf é utilizado quando há repetições de elementos e precisamos do ìndice da última ocorrência;
// const myElmento = ["Morango", "Maçã", "Abacate", "pêra", "Abacate"];

// console.log(myElmento.indexOf("Maçã"));
// console.log(myElmento.indexOf("Abacate"));

// console.log(myElmento[2]);
// console.log(myElmento[myElmento.indexOf("Abacate")]);

// console.log(myElmento.lastIndexOf("Abacate"));

// console.log(myElmento.indexOf("Mamão"));

// 14 - Slice
// Método slice é utilizado para extrair um array menor de um arrays maior;
// O intervalo de elementos é determinado pelos parâmetros, que são: índice de ínicio e o índice de fim;
// O último elemento ´ignorado, se quisermos ele devemos somar 1 ao índice final;
// const testeSlice = ["a", "b", "c", "d", "e", "f"];

// console.log(testeSlice);

// const subArray = testeSlice.slice(2, 4);

// console.log(subArray);

// const subArra2 = testeSlice.slice(2, 4 + 1);

// console.log(subArra2);

// const subArray3 = testeSlice.slice(10, 20);

// console.log(subArray3);

// const subArray4 = testeSlice.slice(2);

// console.log(subArray4);

// // 15 - ForEach:
// //O forEach é como uma estrutura for ou while, porém é um método;
// // Ele percorre cada um dos elementos do array:
// // para alguns sua sintaxe pode ser mais simples;
// const nums = [1, 2, 3, 4, 5];

// nums.forEach((numero) => {
//   console.log(`O número é ${numero}`);
// });

// const posts = [
//   { title: "Primeiro post", category: "PHP" },
//   { title: "Segundo post", category: "JavaScript" },
//   { title: "Terceiro post", category: "Python" },
// ];

// posts.forEach((post) => {
//   console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
// });

// // 16 - Includes:
// //método include verifica se o array tem um elemento
// //Utilizamos no array e como argumento colocamos elemento que buscamos.
// const brands = ["BMW", "VW", "Fiat"];

// console.log(brands.includes("Fiat"));

// console.log(brands.includes("Porche"));

// if (brands.includes("BMW")) {
//   console.log("Há carros da marca BMW!");
// }

// // 17 - Reverse:
// // O método reverse inverte os elementos de um array;
// // Este método modifica os array original, então tome cuidado.
// const reverseTest = [1, 2, 3, 4, 5];

// reverseTest.reverse();

// console.log(reverseTest);

// 18 - Métodos de String:
// As strings também são objetos, ou seja, tem métodos e propriedades;
// Note que voçê pode utilizar length em uma string ou em uma array;
// E também acessar cada caractere pelo seu índece;

// Trim:
// O trim remove tudo que não é texto em uma string;
// Como método especiais e espaços em branco;
// Um método interessanta para utilizar em sanitização de dados;
// O método não modifica o texto original.
// const trimTest = "    Testando \n ";

// console.log(trimTest);

// console.log(trimTest.trim());

// console.log(trimTest.length);

// console.log(trimTest.trim().length);

// // 19 - PadStart:
// // O método padStart insere um texto no começo da string;
// // O texto pode ser repetido, de acordo com o segundo argumento ao método, ele detemina o máximo de caracteres do texto alvo.
// const TestePadStart = "1";

// const newNumber = TestePadStart.padStart(4, "0");

// console.log(TestePadStart);

// console.log(newNumber);

// const testePadEnd = newNumber.padEnd(10, "0");

// console.log(testePadEnd);

// // 20 - split:
// // O split divide uma string em uma array;
// // cada elemento será determinado por um separados em comum;
// // Os mais utilizado, são: ponto e vírgula, vírgula, espaço.
// const frase = "O rato roeu a roupa do rei de Roma";

// const arrayDaFrade = frase.split(" ");

// console.log(arrayDaFrade);

// // 21 - Join:
// // Já o join une uma array em uma string;
// // Podemos colocar um separadodor também, para formatar a string.
// const fraseDeNovo = arrayDaFrade.join(" ");

// console.log(fraseDeNovo);

// const intesDeCompra = ["Mouse", "Teclado", "Monitor"];

// const FraseDeCompra = `Precisamos comprar: ${intesDeCompra.join(", ")}.`;

// console.log(FraseDeCompra);

// // 22 - Repeat:
// // O método repeat repete um texto n vezes;
// // Onde n é o numero que colocamos como seu argumento.
// const palavra = "Testando ";

// console.log(palavra.repeat(5));

// // 23 - Rest Operator / Rest Parameters
// // Rest Operator é caracteriazado pelo símbolo ...
// // Podemos utilizá-lo para receber indefinidos argumentos em uma função;
// // Assim não precisamos declarar exatamente o que vamos receber, deixando a função mais ampla;

// const somaInfinita = (...args) => {
//   let toatal = 0;

//   for (let i = 0; i < args.length; i++) {
//     toatal += args[i];
//   }

//   return toatal;
// };

// console.log(somaInfinita(1, 2, 3));

// console.log(somaInfinita(25.5, 156, 588.56, 994, 544));

// 24 - Estrutura de repetição for...of
// O for...of é uma estrutura de repetição semelhante ao for, porém mais simples
// O número de repetição é baseado no array utilizado;
// E podemos nos referi aos elementos sem precisar acessar o índice dele.
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }
  return total;
};

console.log(somaInfinita2(45, 50, 20));

console.log(somaInfinita2(500, 145, 89, 664));

// 25 - Destructuring em objetos:
//  O destructuring é uma funcionalidade que nos permite destruturar algum dado;
// No caso dos objetos, é possível criar variáveis a partir das suas prioridades, com uma simples sintaxe;
const userDetails = {
  fisrtName: "Nicolas",
  lastName: "Souza",
  job: "Militar",
};

const { fisrtName, lastName, job } = userDetails;

console.log(fisrtName, lastName, job);

// renomendo a variaveis
const { fisrtName: primeiroNome } = userDetails;

console.log(fisrtName);

// 26 - Destructuring com arrays:
// O destructuring também poder ser utilizado para destruturar um array em variáveis;
// A sintaxe é um pouco diferente, agora utilizaremos colchetes, e não temos nomes das chavez.
const myList = ["Avião", "Moto", "Carro"];

console.log(myList);

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - O Json, JavaScript Objetos Notation, é um dado em forma de texto;
// Utilizamos para comunicação ente API e Front-end;
// Sua formatação é rigorosa, se for mal feita o dado é invalidado e não conseguimos comunicaçao;
// Seu formato lembra os objetos literals;
// Regras: apenas aspas duplas e não aceita comentários.

const myJson =
  '{"name": "Nicolas", "age": 25, "skills": ["php", "JavaScript", "Python"]}';

const myNumber = "{13, 141}";

console.log(myNumber);

console.log(typeof myNumber);

console.log(myJson);

console.log(typeof myJson);

// 28 - JSON para objeto e objeto para JSON:
//Na maioria das vezes vamos precisar converter objeto para JSON;
// Ou um JSON para objeto JavaScript válido;
// Utilizamos o objto JSON e os métodos stringify e parse.

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

// JSon invalida
const badJson = '{"name": Nicolas, "age": 25}';

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);
