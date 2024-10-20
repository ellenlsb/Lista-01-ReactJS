import React from 'react'
import StatusDesconto from './components/StatusDesc'

const App = () => {
  const usuarioTemDesconto = true

  return (
    <div>
      <h1>Meu Aplicativo</h1>
      <StatusDesconto temDesconto={usuarioTemDesconto} />
    </div>
  )
}

export default App
