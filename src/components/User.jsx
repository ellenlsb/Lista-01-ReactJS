import React from 'react';

const User = ({ online }) => {
  return (
    <div>
      {online ? <h2>Usuário online</h2> : <h2>Usuário offline</h2>}
    </div>
  );
};

export default User;


//Crie um componente que receba uma prop chamada online. Use o operador ternário para renderizar "Usuário online" se for true, e "Usuário offline" se for false.