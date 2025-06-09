// O que é orientação a Objetos:
// UM paradigma de programação, uma outra forma de programra;
// Utilizando objetos como seu principal príncipio;
// A maioria dos softwares é desenvolvido neste paradigma;
// FrameWorks e biblioteca de front-end também são desenvolvidas com POO;
// Estávamos desenvolvendo no modo procedural.

// 1 - Métodos
// Métodos podem ser adicionados aos objetos;
// Eles são como propriedades, mas contém uma função;
// Invocamos os Métodos do mesmo modo que funções;

// const animal = {
//   name: "Zeus",
//   latir: function () {
//     console.log("Au au");
//   },
// };

// console.log(animal.name);

// animal.latir();

// // 2 - Aprofundando em Métodos
// // OS métodos são utilizados para interagir também com as propriedades do seu objeto;
// // Podemos exibir elas ou modificá-las;
// // Podemos nos referenciar com o próprio objeto com a palavra reservada this;

// const pessoa = {
//   nome: "Nicolas",

//   getNome: function () {
//     return this.nome;
//   },

//   setNome: function (novoNome) {
//     this.nome = novoNome;
//   },
// };

// console.log(pessoa.nome);

// console.log(pessoa.getNome());

// pessoa.setNome("Natalia");

// console.log(pessoa.getNome());

// // 3 - Sobre o Prototype:
// // Prototype é um recurso que faz parte da arquitetura de JavaScript;
// // É uma espécie de herança, onde objetos pais herdam propriedades e métodos aos filhos;
// // por isso muitos dados são considerados objetos e temos objetos, como: String, Number, e outros;
// // Ou seja, cada dado tem um objetos pai herdeou características pelo prototype;

// // Prototype:
// // O recurso fundamental do prototype que temos que entender é o fallback;
// // Quando uma propriedade não existe em um dado/objeto, ela é procurada no seu ancestral;
// // Ou seja, é por isso que temos acesso a length em strings, por exemplo;

// const text = "asd";

// console.log(Object.getPrototypeOf(text));

// const bool = true;

// console.log(Object.getPrototypeOf(bool));

// const arr = [];

// console.log(arr.length);

// console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre Prototype
// Quando criamos um objeto a partir de uotro, este outro será o prototype do objeto criado;
// Porém também herdará as características do objeto pai, se for um objeto, herda de Object;
// Esta é a cadeias do prototype.
// const myObject = {
//   a: "b",
// };

// console.log(Object.getPrototypeOf(myObject));

// console.log(Object.getPrototypeOf(myObject) === Object.prototype);

// const mySecundObject = Object.create(myObject);

// console.log(mySecundObject);

// console.log(mySecundObject.a);

// console.log(Object.getPrototypeOf(mySecundObject) === myObject);

// // 5 - classes básicas:
// // Os prototypes são originados de uma classe;
// // Que é o molde dos objeots, nela definimos os métodos e propriedades;
// // JavaScript já possui suas classes, porém podemos crias as nossas;
// // Issp é essencial para a Orientação a objeto.

// const cachorro = {
//   raca: null,
//   patas: 4,
// };

// const pastorAlemao = Object.create(cachorro);

// pastorAlemao.raca = "Pastor Alemão";

// console.log(pastorAlemao);

// console.log(pastorAlemao.patas);

// const bulldog = Object.create(cachorro);

// bulldog.raca = "Bulldog";

// console.log(bulldog);

// //  6 - Funções como classe
// // Classes baseadas em funções construtoras
// // Utilizando funções como classe, conseguimos iniciar as propriedades com a criação do objeto;
// // Chamamos de função contrutora, este recurso;
// // O construtor tem como objetivo instanciar um objeto, ou seja, criar um novo objeto;
// function criarCachorro(nome, raca) {
//   const cachorro = Object.create({});

//   cachorro.nome = nome;
//   cachorro.raca = raca;

//   return cachorro;
// }

// const bob = criarCachorro("Bob", "Vira lata");

// console.log(bob);

// const jack = criarCachorro("Jack", "Poodle");

// console.log(jack);

// console.log(Object.getPrototypeOf(jack));

// // 7 - Funções Construtivas:
// // Classe baseadas em funçoes;
// // Este recurso é semelhante ao anterior, mas com uma nova palavra chave: a new;
// // Em Várias linguagem o new é uttilizado para intanciar novos objetos, em JS isso também acontece;
// // E eles podem partir de funções;
// function Cachorro(nome, raca) {
//   this.nome = nome;
//   this.raca = raca;
// }

// const husky = new Cachorro("Duke", "Husky");

// console.log(husky);

// // 8 - Métodos em funções contrutoras;
// // Classes de funções com métodos;
// // Para adicionar métodos antes da criação do objeto, podemos acessar o prototype e colocá-los lá;
// // Esta é basicamente a essência de JavaScript;
// // Porém com a evolução da linguagem, outros recursos foram criados;
// Cachorro.prototype.uivar = function () {
//   console.log("Auuuuu!");
// };

// console.log(Cachorro.prototype);

// husky.uivar();

// 9 - Classes em JavaScript;
// Classes ES6;
// Vas versões mais atuais de JS Abandonamos as functions e utilizamos as classes;
// Aqui temos rcursos comuns em outras linguagens, como o constructor;
// Além da instância por New;
// class CachorroClasse {
//   constructor(nome, raca) {
//     this.nome = nome;
//     this.raca = raca;
//   }
// }

// const jeff = new CachorroClasse("Jeff", "Lavrador");

// console.log(jeff);

// console.log(Object.getPrototypeOf(jeff));

// // 10 - Mais sobre Classes:
// // Não podemos adicionar proprieda diretamente as classes;
// // Isso precisa ser feito ao iniciá-la ou via prototype;
// // Métodos da classe também podem utilizar this para se referir ao objeto instanciado;
// // Os métodos não precisam da palavra function;
// class Caminhao {
//   constructor(eixos, cor) {
//     this.eixos = eixos;
//     this.cor = cor;
//   }

//   descreverCaminhao() {
//     console.log(
//       `Este caminhão tem ${this.eixos} eixos e é dar cor ${this.cor}`
//     );
//   }
// }

// const scania = new Caminhao(6, "vermelho");

// console.log(scania);

// scania.descreverCaminhao();

// Caminhao.motor = 4; // Não podemos atribuir o valor da propriedade assim

// const c2 = new Caminhao(4, "Preta");

// console.log(c2);

// console.log(c2.motor);

// Caminhao.prototype.motor = 4.0;

// const c3 = new Caminhao(6, "Azul");

// console.log(c3.motor);

// // 11 - Override (SUbistituição de valor)
//As instâncias dos objetos são criadas beseadas nas classe;
//OU seja, as propriedades têm os valores definidos no construtor ou por métodos;
//Para alterá-los podemos utilizar o prototype.

// class Humano {
//   constructor(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
//   }
// }

// const matheus = new Humano("Matheus", 31);

// console.log(matheus);

// Humano.prototype.idade = "Não definida";

// console.log(matheus.idade);

// console.log(Humano.prototype.idade);

// 12 - Symbol
//Quando utilizamos o recurso de Symbol com classe,
//é possível criar uma propriedade única e imutável;
//Isso é útil quando há alguma dado que repetirá em todos os onjetos criados a partir da classe;

class aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const piloto = Symbol();

aviao.prototype[piloto] = 3;

aviao.prototype[asas] = 2;

const boeing = new aviao("boeing", 10);

console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[piloto]);

// 13 - Getters e Setters
//Os getters e setters são bem famosos na orientação a objetos
//O get é um método utilizado para exibir o valor de alguma propriedade.
//E o set é utilizado para alterar o valor;
//Atráves de métodos, temos um bloco de código para transformação de dados;

class post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Voçê está lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArrays = tags.split(", ");
    this.tags = tagsArrays;
  }
}

const myPost = new post("Algum post", "É um post sobre programação");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programacao, Javascript, js";

// 14 - Herança
//Uma classe pode herdar propriedades de outra por meio de herança;
//Utilizando a palavra chave extends, para adicionar a classe que vai trazer as propriedades;
//E super para enviar os valores para a classe pai;

class Mamiferos {
  constructor(patas) {
    this.patas = patas;
  }
}

class lobo extends Mamiferos {
  constructor(patas, nome) {
    super(patas, nome);
    this.nome = nome;
  }
}

const shark = new lobo(4, "shark");

console.log(shark);

console.log(shark.patas);

// 15 - Operador Instaceof
//Assim como typeof que verifica o tipo, temos o operador instanceof;
//Que verifica se um objeto é pai de outro, para ter certeza da ancestralidade;
//Isso é verificado com objeto => classe, e não através das classes;

console.log(shark instanceof lobo);

console.log(lobo instanceof Mamiferos);

console.log(new lobo(4, "teste") instanceof Mamiferos);

console.log(new post("a", "b") instanceof lobo);
