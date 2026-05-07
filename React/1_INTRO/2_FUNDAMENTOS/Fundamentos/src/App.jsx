import "./App.css";

// 2 - Importando componentes
import FirstComponent from "./components/FirstComponent";

// 4 - Template Expression
import TemplateExpression from "./components/TemplateExpression";

function App() {
  // 3 - Comentarios
  return (
        <div className="App">
          {/* Comentário em JSX */}
          <h1>Fundamentos do React</h1>
          <FirstComponent />
          <TemplateExpression />
        </div>
  );
}

export default App;
