import React from 'react';

const UserStatus = ({ online }) => {
  return (
    <div>
      {/* Usando o operador ternário para renderizar a mensagem */}
      {online ? <p>Usuário online</p> : <p>Usuário offline</p>}
    </div>
  );
};

export default UserStatus;
