import { Children } from 'react';
import root from '../styles/main';

const estilo = {
  texto: {
    color: root.colors.texto,
    fontSize: "16px",
  },
  titulo: {
    backgroundColor: "red",
    fontSize: "32 px",
  }
}

export default function Paragrafo({children, titulo})  {
  return(
    <>
    <h1 style={estilo.titulo}>{titulo}</h1> 
    <p style={estilo.texto}>{children}</p> 
    </>
  )
}