// Inserindo imagens no React
// As imagwens do projeto podem ficar na pasta public ou src, estando la, elas podem ser utilizadas diretamente no projeto.
// A pasta public fica linkada com a src, exemplo: "/imagem.png".

// Imagens em assets
// Outro local comun de colocar imagens em um projeto React é na pasta assets;
// Em asstes precisamos importar a imagem, como se fosse em componente;
// Estas duas abordagens são muito utilizadas.

import "./App.css";

// 2 - Imagem em Assets
import img2 from "./assets/img2.jpeg";


function App() {
  return (
    <div className="hero">
      <h1>Avançando no React</h1>
      {/* 1 - Imagem em Public */}
      <img src="./img1.jpeg" alt="Imagem 1" />
      {/* 2 - Imagem em Assets */}
      <img src={img2} alt="Imagem 2" />

    </div>
  );
}

export default App;
