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
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
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
// Após um request pe comum exibir os dados na tela;
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

    // const idElement = document.createElement("p");

    // idElement.textContent = user.id;

    // div.appendChild(idElement);

    container.appendChild(div);
  });
};

printData();

// 4 - Configurando os Headers
// Os headers são configurados no momento da requisição;
// Podemos adicionar parâmetros adicionais;
// por exemplo: determinar o tipo de dados que queremos;
