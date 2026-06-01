import root from '../styles/main';

const estilo = {
  texto: {
    color: root.colors.texto,
    fontSize: "16px", 
  },
  titulo: {
    fontSize: "32px",
  }
}

export default function Paragrafo({children, titulo})  
{
  return(
    <>
      <h1 style={estilo.titulo}>bla</h1>
      <p style={estilo.texto}>
      {children}
      </p>
    </>

  )
}

