// 1- Inserindo imagens no React
// As imagwens do projeto podem ficar na pasta public ou src, estando la, elas podem ser utilizadas diretamente no projeto.
// A pasta public fica linkada com a src, exemplo: "/imagem.png".

// 2 -Imagens em assets
// Outro local comun de colocar imagens em um projeto React é na pasta assets;
// Em asstes precisamos importar a imagem, como se fosse em componente;
// Estas duas abordagens são muito utilizadas.

// 3 - O que são hooks?
// Recusrso do React que tem diversas funções, podemos criar os nossos tambem;
// Exemplo: guardar e alterar o estado de algum dado;
// Os hooks precisa ser importatods, e sempre começam com "use", exemplo: useState, useEffect, useContext, etc;
// Os hooks que criamos são chamados de custom hooks;
// Geralmente toda aplicação React tem pelomenos um hooks




import "./App.css";

// 2 - Imagem em Assets
import img2 from "./assets/img2.jpeg";


// 3 - Hook useState
import Data from "./components/Data";

// 4 - Renderização de listas
import ListRender from "./components/ListRender";

function App() {
  return (
    <div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando no React</h1>
      {/* 1 - Imagem em Public */}
      <img src="./img1.jpeg" alt="Imagem 1" style={{width: "50%", height: "auto"}} />
      {/* 2 - Imagem em Assets */}
      <img src={img2} alt="Imagem 2" style={{width: "50%", height: "auto"}} />
      {/* 3 - Hook useState */}
      <Data />
      {/* 4 - Renderização de listas */}
      <ListRender />
    </div>
  );
}

export default App;
