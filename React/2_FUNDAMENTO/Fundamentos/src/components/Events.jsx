import React from "react"; //{*/rafce*/}
// 6 - Eventos em React, onde podemos utilizar eventos como onClick, onMouseOver, onChange, entre outros, para interagir com o usuário.

const Events = () => {
  const handleClick = () =>
    //Função para ser executada quando o evento for acionado.
    console.log("Executou!");

  // 8 - Função de rederização, onde podemos criar uma função para renderizar um componente, e essa função pode ser chamada em outros lugares do código, como por exemplo em um evento.
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizou isso!</h1>;
    } else {
      return <h1>Renderizou aquilo!</h1>;
    }
  };

   // return 10 > 2 && <p>Carregando...</p> // 9 - Renderização condicional, onde podemos utilizar operadores lógicos para renderizar um componente ou outro, dependendo de uma condição. Nesse caso, como 10 é maior que 2, o componente <p>Carregando...</p> será renderizado. Se fosse 10 < 2, nada seria renderizado.

  return (
    <div>
      <div>
        <button onClick={() => console.log("Clicou no botão!")}>
          Clique aqui
        </button>
      </div>
      {/* { 7- Eventos com função, onde podemos criar uma função para ser executada quando o evento for acionado. } */}
      <div>
        <button onClick={handleClick}>Clique aqui também</button>
      </div>
      <div>
        {/* 8 - Função de renderização */}
        {renderSomething(true)}
        {renderSomething(false)}
      </div>
    </div>
  );
};

export default Events;
