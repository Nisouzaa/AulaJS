// 4 - Template Expression

const TemplateExpression = () => {
  const name = "Nicolas";

  // Podemos colocar qualquer expressão dentro das chaves, como por exemplo um objeto, uma função, etc.
  const data = {
    age: 26,
    job: "Programador",
  };

  return (
    <div>
      <p>O resultado da expressão é: {2 + 2}</p>
      <h2>Bem vindo {name}!</h2>
      <p>
        Sua idade é {data.age} e sua profissão é {data.job}.
      </p>
    </div>
  );
};

export default TemplateExpression;
