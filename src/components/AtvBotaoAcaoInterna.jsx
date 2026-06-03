/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
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

export default function AtvBotaoAcaoInterna({}){
    return(<>
    <div>
    <p style={estilo.p}>Clique Abaixo</p>
    <button className='btn' style={estilo.button} onClick={() => alert('Fui clicado!')}>Clique aqui</button>  
    </div>    
</>)
}
