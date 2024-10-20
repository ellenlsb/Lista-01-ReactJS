import React from 'react'

const LoginButton = ({ logado }) => {
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

export default LoginButton
