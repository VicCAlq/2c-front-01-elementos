import root from '../styles/main';

const estilo = {
  botao: {
    borderRadius: "5px",
    padding: root.spacings.paddingM,
    backgroundColor: root.colors.primaria,
  },
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  }
}

export default function Botao({})  {
  return(<div>
    <button style={estilo.botao} onClick={() => console.log("Pressionado")}>
      <p style={estilo.texto}>Pode clicar!</p>
    </button>
  </div>)
}
