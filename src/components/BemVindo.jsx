import React from "react";

function BemVindo ({autenticacao}) {
    if (autenticacao){
        return ( 
           <>
           <h2>Bem-vindo, usuário!</h2>
            </> 
        )
    }
    else {
        return null
    }
}

export default BemVindo


//Rendecomponente que receba uma prop chamada autenticado. Se for true, renderize "Bem-vindo, usuário!", senão não renderize nada.rizar Elementos Condicionalmente com If:

