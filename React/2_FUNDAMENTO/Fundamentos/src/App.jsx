import "./App.css";

// 2 - Importando componentes
import FirstComponent from "./components/FirstComponent";

// 4 - Template Expression
import TemplateExpression from "./components/TemplateExpression";

// 5 - Hierarquia de componentes
import MyComponent from "./components/MyComponent";

function App() {
  // 3 - Comentarios
  return (
        <div className="App">
          {/* Comentário em JSX */}
          <h1>Fundamentos do React</h1>
          <FirstComponent />
          <TemplateExpression />
          <MIDIAccess />
        </div>
  );
}

export default App;
