import React from 'react';
import VerificacaoIdade from './components/IdadeVerif'; 

const App = () => {
  const idadeUsuario = 20; 

  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <VerificacaoIdade idade={idadeUsuario} />
    </div>
  );
};

export default App;
