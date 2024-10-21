import React from 'react'

const Nivel= ({ nivel }) => {
  return (
    <div>
      {nivel === "iniciante" ? (
        <h2>Bem-vindo, iniciante!</h2>
      ) : nivel === "intermediário" ? (
        <h2>Você está progredindo!</h2>
      ) : nivel === "avançado" ? (
        <h2>Parabéns, especialista!</h2>
      ) : (
        <h2>Nível desconhecido</h2> 
      )}
    </div>
  )
}

export default Nivel
//Crie um componente que receba uma prop chamada online. Use o operador ternário para renderizar "Usuário online" se for true, e "Usuário offline" se for false.h2