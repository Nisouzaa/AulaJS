//  Movendo-se pelo DOM
// Todos os elementos podem ser acessados atráves de document.body;
// A partir deste elemento pai, vamos encontrando os childNodes (nós);
// E podemos acessar suas propriedades, e consequentemente modificá-los;

console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);