//4 - Renderização de listas no React
// Dados do tipo array são muito comuns em aplicções;
// Geralmente recebemos um array de objetos, e precisamos iterar nele e exibir os elementos na tela;
// O método map fará a interação;
// É possível iserir jsx na execução.

// 5 - Apropriedade Key
// Iterar uma lista sem a propriedade key, gera um erro no console;
// O React precisa de uma chave única para cada elemento;
// Isso serve para ajudar a renderização do compontente;
// O React utiliza isso para manipulação dos intes.

// 6 - Previous state
// Previous state é um recuso do hook useState;
// Podemos pegar o valor original dos dados, e fazer alguma alteração;
// Muito utilizado em listas, pois pegamos o valor antigo e o modificamos;
// O primeiro argumento do set sempre é o previous state.

import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "João", "Maria", "José"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 30 },
    { id: 2, name: "João", age: 25 },
    { id: 3, name: "Maria", age: 28 },
    { id: 4, name: "José", age: 35 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== randomNumber),
    );
  };

  return (
    <div>
      {/* 4 -Render sem key */}
      <ul>
        {list.map((item) => (
          <li>{item}</li> // O método map retorna um novo array, e para cada item do array original, ele executa a função passada como argumento, que recebe o item como parâmetro e retorna o elemento jsx a ser renderizado. O resultado é um array de elementos jsx, que é renderizado na tela.
        ))}
      </ul>
      {/* 5 - render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      {/* 6 - Previous state */}
      <button onClick={deleteRandom}>Delete Random user</button>
    </div>
  );
};

export default ListRender;
