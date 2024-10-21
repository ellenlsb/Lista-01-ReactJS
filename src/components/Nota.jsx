import React from 'react'

const Nota = ({ nota }) => {

  if (nota >= 90) {
    return <h2>Excelente</h2>
h2
  } else if (nota >= 70) {
    return <h2>Bom</h2>

  } else {
    return <h2>Precisa melhorar</h2>
  }
}

export default Nota

//Crie um componente que receba uma prop chamada nota. Se nota for maior ou igual a 90, renderize "Excelente". Se for entre 70 e 89, renderize "Bom". Se for menor que 70, renderize "Precisa melhorar".