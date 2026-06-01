/*
[ATIVIDADE BOTÃO COM AÇÃO INTERNA]

Crie e exporte por padrão um componente chamado "AtvBotaoAcaoInterna" que não recebe nenhum argumento. Este componente deve exibir uma <div> com dois elementos: um <p> com o texto "Clique abaixo", e um <button> com o texto "Clique aqui" que ao ser clicado exibe um alerta com o texto "Fui clicado!"
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

    

return(<div>
    <button style={estilo.botao} onClick={() => console.log("Pressionado")}>
      <p style={estilo.texto}>Nao sei!</p>
    </button>
  </div>)

