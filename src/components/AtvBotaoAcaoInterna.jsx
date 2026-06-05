/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento.
 Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um
  <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
*/

export default function AtvBotaoAcaoInterna(){
    return (<div>
<p>
    "Clique abaixo!!!!!1"
</p>
<button onClick={() => alert ("Você acabou de ganhar 100 anéis de graça, parabéns! :-)")}>"Clique aki para ganhar ANÉIS!!!!!"</button>
    </div>)

}