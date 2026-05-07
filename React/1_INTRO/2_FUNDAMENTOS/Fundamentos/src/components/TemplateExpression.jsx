// 4 - Template Expression

const TemplateExpression = () => {
  const name = "Nicolas";

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
