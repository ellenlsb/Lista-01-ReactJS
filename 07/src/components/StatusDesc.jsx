import React from 'react'

const StatusDesconto = ({ temDesconto }) => {
  
  return (
    <h1>{temDesconto ? "Desconto Aplicado" : "Sem Desconto"}</h1>
  )
}

export default StatusDesconto;
