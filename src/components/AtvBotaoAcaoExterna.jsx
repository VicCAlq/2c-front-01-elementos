/*
[ATIVIDADE BOTÃO COM AÇÃO EXTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoExterna" que recebe como argumento uma função chamada "comando". Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser pressionado executa a função recebida no argumento "comando".
*/

const estilo = {
  botao: {
    borderRadius: "8px",
    padding: root.spacings.paddingM,
    backgroundColor: root.colors.primaria,
  },
  texto: {
    color: root.colors.texto,
    fontSize: "18px",
  }
}

export default function AtvBotaoAcaoExterna (comando) {    
return(
  <div>
    <p>Clique abaixo</p>
    <button style={estilo.botao} onClick={() => comando}>Clique aqui</button>
  </div>)
}