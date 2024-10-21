import React from 'react'

const Desconto = ({ temDesconto }) => {
  
  return (
    <h2>{temDesconto ? "Desconto Aplicado" : "Sem Desconto"}</h2>
  )
}

export default Desconto