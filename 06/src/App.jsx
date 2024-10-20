import React from 'react'
import VerificacaoNota from './components/verificacaoNt'

const App = () => {
  const notaUsuario = 85
  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <VerificacaoNota nota={notaUsuario} />
    </div>
  )
}

export default App
