/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
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

export default function AtvBotaoAcaoExterna({comando}) {
    return(<>
    <div>
        <p style={estilos.p}>Clique abaixo</p>
        <button style={estilos.button} onClick={comando}>Clique aqui</button>    
    </div>    
</>)
}