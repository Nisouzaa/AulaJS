// Protocolos da Web \\
// Um protocolo é uma forma de comunicação entre computadores através da rede;
// O HTTP serve para solicitar arquivos e imagens do servidor (Hyper Text Transfer Protocol);
// É possivel navegar em site através do HTTP;
// SMTP: protcolo para envio do email;
// TCP: protocolo para trasferência de dados;

// Conhecendo melhor as URLs \\
// Cada arquivo é carregado no navegador tem uma URL;
// A URL (Uniform Resouce Locator) pode ser dividida em três parte;
// Por exemplo: https://horadecodar.com.br//index.html
// https é o protocolo, horadecodar.com.br é o domínio,
// que referencia um servidor (DNS > IP)
// E index.html o arquivo/pagina que estamos acessando;


// Conceitos importantes de HTML \\
// HTML (HyperText Markup Language) é uma linguagem de marcação;
// Onde estruturamos as paginas de web, criando elementos;
// Os elementos são chamados de tags, que podem ser: títulos, imagens, formulários, listas...
// As tags são carcterizadas por: <P> texto </P>
// Podemos adicionar estilo ao HTML com Css;

// Estrutura do HTML \\
// Toda página HTML tem duas partes importantes: Head e body;
// No head inserimos as configurações da página, e importações de outros arquivos (CSS, JS);
// Já no body temos os elementos que ficam visíveis para o usuário;
// As tags possuem atributos que configuram os elementos;

// HTML e JavaScript \\
// Podemos adicionar JavaScript ao HTML por meio da tag script, em arquivo externo ou script na página;
// Algumas tags tem atributos que podem executar JS, mais isso não é muito utilizado;
// Sempreque houver um link entre um arquivo e outro, uma chamada HTTP é executada;
// JavaScript pode ser utilizada para manipular elementos do HTMl e alterar estilos;

// HTML e DOM \\
// O DOM é uma representação fiel do HTML da página;
// Ele é utilizada para acessar o HTMl através de JS, acessamos os elementos/tags;
// Assim podemos modificá-lo através dos métodos e propriedades dos objetos que alteram o DOM;
// DOM vem de Document Object Model;
// Através dele também podemos alterar eventos ao HTML, como click ou pressionar teclados do mouse;

// DOM \\ 
// O DOM pode modificar completamente um página;
// É possível alterar: elementos, atributos, estilização;
// Adicionamos e removemos elementos;
// O DOM cria uma árvore do HTML, os elementos são chamados de nós;

//            | Documento |
//                  |
//                  |
//           | Root element:|
//           |     <html>   |
//                  |     
//                  |     
//      |-----------|-----------------------| 
//  |Element:|                         |Element:|
//  | <head> |                         | <body> |
//      |                                  |
//      |                               |--|-------------|
//  | Element:|      |Attribute|____| Element:|     | Element: |                     
//  | <title> |      |  "href" |    |   <a>   |     |   <h1>   |
//      |                                 |                |     
//      |                                 |                |   
// |   Text:    |                   |   Text:   |   |    text:    |
// | "My title" |                   | "My link" |   | "My header" |


