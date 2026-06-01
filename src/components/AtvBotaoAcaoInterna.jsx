/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/

export default function AtvBotaoAcaoInterna() {
  
    function click() {
        alert("Fui clicado!");
    }
    
    return (
        <div>
            <p>Clique abaixo</p>
            <button onClick={click}>Clique aqui</button>
        </div>
    );
}