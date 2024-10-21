import React from 'react'

const Login = ({ logado }) => {
  return (
    <div>
      {logado ? (
        <button>Sair</button>
      ) : (
        <button>Entrar</button>
      )}
    </div>
  )
}

export default Login

//Crie um componente que receba uma prop chamada logado. Se for true, renderize um botão "Sair". Se for false, renderize um botão "Entrar".