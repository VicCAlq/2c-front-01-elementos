/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/

import root from '../styles/main';

const estilo = {
    p: {
        fontSize: '16px',
        color: root.colors.texto
    },
    button: {
        backgroundColor: root.colors.desabilitado,
        color: root.colors.background,
        borderRadius: '50px',
    }
}

export default function AtvBotaoAcaoExterna({comando}){
return(<>
    <p style={estilo.p}>Clique abaixo</p>
    <button onClick={comando} style={estilo.button}>Clique aqui</button>
</>)
}