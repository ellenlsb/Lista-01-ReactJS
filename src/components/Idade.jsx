import React from 'react'
const Idade = ({ idade }) => {

  if (idade >= 18) {
    return <h2>Você é adulto</h2>
  } else {
    return <h2>Você é menor de idade</h2>
  }
}

export default Idade


//Renderizar Elementos com If-Else: Crie um componente que receba uma prop chamada idade. Se idade for maior ou igual a 18, renderize "Você é adulto", senão renderize "Você é menor de idade".