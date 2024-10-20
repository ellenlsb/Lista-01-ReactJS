import React from 'react'

const Saudacao = ({ autenticado }) => {
  if (autenticado) {
    return <h1>Bem-vindo, usuário!</h1>;
  } else {
    return null;
  }
}

export default Saudacao;
