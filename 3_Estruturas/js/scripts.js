// 1 - variáveis
// let nome = "Nicolas"; // let, variável comun que o valor se altera.

// console.log(nome);

// nome = "Nicolas Souza";

// console.log(nome);

// const idade = 25; // const (constante), e o mais usado para declarar variáveis, pois seu valor não é alterado .

// console.log(idade);

// idade = 26;

// console.log(typeof nome);

// console.log(typeof idade);

// 2 - Mais sobre variáveis

// Simbolos Não permitidos
// let 2teste = 'inválido'
// let @teste = "inváldo"

// let a = 20,
//   b = 30,
//   c = 40;

// console.log(a, b, c);

// const nomecompleto = "Nicolas de souza";

// const nomeCompleto = "Natalia souza";

// console.log(nomecompleto);

// console.log(nomeCompleto);

// // Simbolos permitidos
// let _teste = "ok";

// let $teste = "ok";

// console.log(_teste, $teste);

// // 3 - Prompt de comando

// // a função prompt recebe um dado do usuário, e uma função pouca utilizada, mais podemos permitir fazer ações interessantes.

//const age = prompt(`Digite sua idade.`);

// console.log(`Voçê tem ${age} idade.`);

// 4 - Finçõe Alert

// A função alert emite uma mensagen na tela por um pop up, tambem não e multo utilizada, mais é um clássico.
// alert("testando");

// const z = 10;

// alert(`O núemero é ${z}`);

// 5- Objeto Math
// Math é um objeto, que possui diversas funções para fins matemáticos max: encontras o maior numero, floor: arrendoda para baixo.
//console.log(Math.max(5, 1 ,4, 10));

// console.log(Math.floor(5.15));

// console.log(Math.ceil(5.15));

// // 6 - Objeito console
// // console tambem é um objeto assim com Math, tem várias funções, sua função principal é exibir uma mensagem de alguma categoria na aba de Console
// console.log("teste!");

// console.error("erro!");

// console.warn("aviso!");

// 7 - if
// const m = 10;

// if(m > 5){
//   console.log("M é maior que 5");
// }

// const user = "Nicolas";

// if(user === "Nicolas"){
//   console.log("Olá Nicolas");
// }

// if(user === "Maria"){
//   console.log("Olá Maria");
// }

// //  8 - else
// const loggedIn = false;

// if(loggedIn){
//   console.log("Altenticado!");
// }else{
//   console.log("Não Autenticado!");
// }

// const q = 10;
// const w = 15;

// if(q > 5 && w > 20){
//   console.log("Números Mais Altos");
// }else {
//   console.log("Números Mais baixos");
// }

// // 9 - Else if
// if(1 > 2){
//   console.log("teste");
// }else if(2 > 3){
//   console.log('Teste 2');
// }else if(5 > 1){
//   console.log("Verdadeiro");
// }

// const userName = "Nicolas";
// const userAge = 25;

// if(userName === "João"){
//   console.log("Olá João");
// }else if(userName === "Nicolas" && userAge === 25){
//   console.log("Bem vindo Nicolas, voçê tem 25 anos!")
// }else{
//   console.log("Nenhuma condição encontrada!")
// }

// 10 - While
// let p = 0;

// while(p < 5){
//   console.log(`Repetindo ${p}`);
//   p = p + 1;
// }

// loop infinio

// let x = 10;

// while(x > 5){
//   console.log(`Testando ${x}`);
// }

// 11 - do while

// let o = 10;

// do{
//   console.log(`Valor de o:${o}`);
//   o--
// }while(o > 1);

// 12 - for
// for (let t = 0; t < 10; t++) {
//   console.log(`Repetindo algo...`);
// }

// let r = 10;

// for (r; r > 0; r = r - 1) {
//   console.log(`R está diminuindo ${r}`);
// }

// 13 - Indentação
// for (let u = 0; u < 10; u++) {
//   if (u * 2 > 10) {
//     console.log(`Maior que 10! ${u}`);
//   } else {
//     if (u / 2 === 0) {
//       console.log("deu 0");
//     }
//   }
// }

// 14 - break
// for(let g = 20; g > 10; g--){
//   console.log(`valor de g é: ${g}`);

//   if(g === 15){
//     console.log("g é 15");
//     break;
//   }
// }

// for(let h = 15; h > 10; h--){
//   console.log(`valor de h é: ${h}`);

//   if(h === 13){
//     console.log("h é 13");
//     break;
//   }
// }

// // 15 - Continiue
// for (let s = 0; s < 10; s = s + 1) {
//   if (s % 2 === 0) {
//     console.log("Número par !");
//     continue;
//   }

//   console.log(s);
// }

// // 16 - switch
// const job = "Advogado";

// switch (job) {
//   case "Programador":
//     console.log("Você é um programador! ");
//     break;
//   case "Advogado":
//     console.log("Você é um Programador! ");
//     break;
//   case "Engenheiro":
//     console.log("Você é um engenheiro!");
//     break;
//   default:
//     console.log("Nenhuma profissão encontrada!");
// }

// switch execução errada
// const l = 100;

// switch (l) {
//   case 200:
//     console.log("L é 200");
//   case 100:
//     console.log("L é 100");
//   case 10:
//     console.log("l é 10");
//   default:
//     console.log("Nenhum número encontrado! ");
// }
