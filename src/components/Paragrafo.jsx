import root from '../styles/main';

const estilo = {
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  }
}

export default function Paragrafo({conteudo})  {
  return(
    <p style={estilo.texto}>{conteudo}</p>
  )
}

