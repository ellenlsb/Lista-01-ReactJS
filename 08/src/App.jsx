import React from 'react'
import UserStatus from './components/UserStat'

function App() {
  return (
    <div className="App">
      <h1>Status do Usuário</h1>
      
      <UserStatus online={true} />
      <UserStatus online={false} />
    </div>
  )
}

export default App
