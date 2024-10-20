import React from 'react'
import UserLevel from './components/nivel'

function App() {
  return (
    <div className="App">
      <h1>Status do Usuário por Nível</h1>
      <UserLevel nivel="iniciante" />
      <UserLevel nivel="intermediário" />
      <UserLevel nivel="avançado" />
      <UserLevel nivel="expert" />
    </div>
  )
}''

export default App;
