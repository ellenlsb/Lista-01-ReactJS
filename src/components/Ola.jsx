import React from "react";

function Ola (props) {
    return (
        <>
        <h2> Olá,Ellen Luiza {props.nome}!</h2>
        </>
    );
}

export default Ola;

//2) Passar uma Prop Simples: Crie um componente que receba uma prop chamada nome e renderize a frase "Olá, [nome]!" onde [nome] é o valor da prop.
