import React from "react";

function Estudante ({autenticacao}) {
    if (autenticacao){
        return (
            <>
            <h2>Você é um estudante</h2>
            </>
        )
    }
    else {
        return (
            <>
            <h2>Você não é um estudante</h2>
            </>
        )
    }
}

export default Estudante