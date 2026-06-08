/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/

import root from '../styles/main';

const estilos = {
    p: {
        color: root.colors.texto,
        fontSize: '30px'
    },
    button: {
        color: root.colors.desabilitado,
        height: '43px',
        width: '200px',
        borderRadius: '25px',
        marginTop: '20px',
        fontSize: '19px'
    }
}

export default function AtvBotaoAcaoInterna({}){
    return (<>
    <div>
        <p style={estilos.p}>Clique abaixo</p>
        <button style={estilos.button} onClick={function clicar(){alert("Fui clicado!")}}>Clique aqui</button>    
    </div>    
</>)
}