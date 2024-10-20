import React from 'react'
import Saudacao from './components/saudacao'

const App = () => {
  const usuarioAutenticado = true

  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <Saudacao autenticado={usuarioAutenticado} />
    </div>
  )
}

export default App
