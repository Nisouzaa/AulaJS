import MyComponent from "./MyComponent";

// 1 - Criando componentes
const FirstComponent = () => {
  return (
    <div>
      <h2>Meu primeiro componente 2!</h2>
      <MyComponent />  {/* 5 - Hierarquia de componentes, onde um componente pode ser utilizado dentro do outro, formando uma hierarquia. */}
    </div>
  );
};

export default FirstComponent;
