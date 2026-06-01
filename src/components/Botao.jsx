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
      <p style={estilo.texto}>vai te lasca</p>
    </button>
    <button style={estilo.botao} onClick={() => alert("endoidou")}>
      <p style={estilo.texto}>e o caba vai endoidar é?</p>
    </button>
  </div>)
}
