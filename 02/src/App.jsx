import React from 'react'

// Componente que recebe a prop 'nome'
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>
}

// Componente principal
function App() {
  return (
    <div>
      {/* Passando a prop 'nome' para o componente Saudacao */}
      <Saudacao nome="Ellen Luiza" />
    </div>
  )
}

export default App;
