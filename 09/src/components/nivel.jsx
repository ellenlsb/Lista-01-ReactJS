import React from 'react'

const Nivel= ({ nivel }) => {
  return (
    <div>
      {nivel === "iniciante" ? (
        <p>Bem-vindo, iniciante!</p>
      ) : nivel === "intermediário" ? (
        <p>Você está progredindo!</p>
      ) : nivel === "avançado" ? (
        <p>Parabéns, especialista!</p>
      ) : (
        <p>Nível desconhecido</p> 
      )}
    </div>
  )
}

export default Nivel
