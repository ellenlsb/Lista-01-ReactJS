import React from 'react'
import './App.css'
import Saudacao from './components/Saudacao'
import Ola from './components/Ola'
import BemVindo from './components/BemVindo'
import Idade from './components/Idade'
import Estudante from './components/Estudante'
import Nota from './components/Nota'
import Desconto from './components/Desconto'
import User from './components/User'
import Nivel from './components/Nivel'
import Login from './Login'

function App() {

  return (
    <div className="App">
      <Saudacao />
      <Ola/>
      <BemVindo autenticacao={true}/>
      <Idade idade={18}/>
      <Estudante autenticacao={true}/> 
      <Nota nota={90}/>
      <Desconto temDesconto={true}/>
      <User online={false} />
      <Nivel nivel={"iniciante"}/>
      <Login logado={false}/>
    </div>
  );
}

export default App;