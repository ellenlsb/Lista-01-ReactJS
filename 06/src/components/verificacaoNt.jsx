import React from 'react'

const VerificacaoNota = ({ nota }) => {

  if (nota >= 90) {
    return <h1>Excelente</h1>
  } else if (nota >= 70) {
    return <h1>Bom</h1>
  } else {
    return <h1>Precisa melhorar</h1>
  }
}

export default VerificacaoNota
