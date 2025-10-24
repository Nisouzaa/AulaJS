// 1 - O que é Axios
// Uma biblioteca javaScript para requisições HTTP;
// Axios é Promise based, ou seja, retorna uma promessa de suas funções;
// Tornado muito mais simples o trabalho com APIs e requisições assíncronas;
// Muiro utilizado nas empresas;
// Apesar disso, perdeu muita notoriedade para recuros de fetch da JS

// console.log(axios);

// 2 - Nosso Primeiro request
// Para fazer uma requisição podemos utilizar o método get, isso vai nos trazer dados de algum local;
// É recomendado utilizar um try catch para indentificar possíveis erros;
// Como o Axios é baseado em promisses, podemos utilizar as async functions;
const gatData = async () => {
  try {
    const response = await postsFetch.get(
      "/users",
      // 4 - definindo headers
      {
        Headers: {
          "Content-Type": "aplication/json",
          custom: "header",
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

gatData();

// 3 - Exibindo dados na tela
// Após um request é comum exibir os dados na tela;
// Podemos fazer isso juntando a resposta da chamada com os nosso conhecimentos em DOM;
// criar elementos baseados no que veio na requisição;
const container = document.querySelector("#user-container");

const printData = async () => {
  const data = await gatData();

  console.log(data);

  data.forEach((user) => {
    const div = document.createElement("div");

    const nameElement = document.createElement("h2");

    nameElement.textContent = user.name;

    div.appendChild(nameElement);

    const emailElement = document.createElement("p");

    emailElement.textContent = user.email;

    div.appendChild(emailElement);

    const idElement = document.createElement("p");

    idElement.textContent = user.id;

    div.appendChild(idElement);

    container.appendChild(div);
  });
};

printData();

// 4 - Configurando os Headers
// Os headers são configurados no momento da requisição;
// Podemos adicionar parâmetros adicionais;
// por exemplo: determinar o tipo de dados que queremos;
// Junto com o 2 Exercício

// 5 - Requisição de Post
// para Enviar dados vamos utilizar o método post
// É necessário configurar a propreiedade body com os dados a serem enviados;
const form = document.querySelector("#post-form");
const titleInput = document.querySelector("#title");
const bodyInput = document.querySelector("#body");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  postsFetch.post("/posts", {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1,
  });
});

//  6 - Global Instance do Axios
// Podemos alterar diretamente as configurações do Axios
// Isso nos gera uma facilidade de trabalhar com os mesmos parâmetros em todas as reuisições
// Ou seja, se configuramos os headers na Global, não é necessário configurar nas requisições
// Pasta global.js

// 7 - Custom Instance do Axios
// A Custom Instance é semelhante a global Instance
// Porém aqui temos outras propriedades que são possíveis de configurar, como a baseURL
// Esta estrátegia deve ser utilizada para personalização do nosso projeto
// Obs: não é recomendado utilizar as duas instances juntas (manutenção, configuração em dois locais... ).
// Pasta Custom.js

// 8 - Interceptors
// Interceptors são como middlewares
// Ou seja, podemos interceptar a requisição e a resposta
// Inserindo algum código entre estas duas ações.