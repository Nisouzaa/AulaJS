import "./App.css";

// 2 - Importando componentes
import FirstComponent from "./components/FirstComponent";

// 4 - Template Expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - Hierarquia de componentes
import MyComponent from "./components/MyComponent";

// 6 - Eventos em React
import Events from "./components/Events";

function App() {
  // 3 - Comentarios
  return (
        <div className="App">
          {/* Comentário em JSX */}
          <h1>Fundamentos do React</h1>
          <FirstComponent />
          <TemplateExpression /> 
          <MyComponent /> {/* Podemos utilizar o mesmo componente em vários lugares, formando uma hierarquia de componentes. */}
          <Events /> {/* Podemos utilizar eventos para interagir com o usuário, como por exemplo onClick, onMouseOver, onChange, entre outros. */}
        </div>
  );
}

export default App;
