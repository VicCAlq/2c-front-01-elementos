/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando".
 Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo",
  e um <button> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/
  
 const estilo = {
  botao: {
    borderRadius: "5px"
  },
  texto: {
    color: "white"
  }
}
export default function AtvBotaoAcaoExterna() {
  return(<div>
    <button style={estilo.botao} onClick={() => console.log("Pressionado")}>
      <p style={estilo.texto}>Pode clicar!</p>
    </button>
  </div>)
}