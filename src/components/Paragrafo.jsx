import root from '../styles/main';

const estilo = {
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  },
  titulo:{  
    fontSize: "30px",
    backgroundColor: "black",
    color: "red",
    padding: "50px",
    border: "1px solid red",
    borderRadius: "12px"
  }
}

export default function Paragrafo({conteudo})  {
  return(
    <>
    <h1 style={estilo.titulo}>ai ai ai</h1>
    <p style={estilo.texto}>{conteudo}</p>
    </>
  )
}

