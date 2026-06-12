// Hook: useState
// O useState é um dos mais utilizados
// Podemos gerenciar o estado de um ou mais dados, é como se fosse um getter/setter, ou seja, ele guarda um valor e tem uma função para atualizar esse valor;
// Utilizmos este hook pois as variáveis não funionam como esperado, elas não re-renderizam o coponente;
// Para guardar um dado vamos utilizar setNomeDoDado, e para atualizar o dado, utilizamos a função setNomeDoDado, passando o novo valor como argumento;


import { useState } from "react";

const Data = () => {
  const someData = 10;

  const [anotherNumber, setAnotherNumber] = useState(15); // O useState é um hook que retorna um array com dois elementos: o valor do estado e uma função para atualizar esse valor. O argumento passado para o useState é o valor inicial do estado.

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar valor</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(25)}>Mudar valor</button>{" "}
        {/* Para atualizar o estado, devemos usar a função setAnotherNumber, passando o novo valor como argumento. */}
      </div>
    </div>
  );
};

export default Data;
