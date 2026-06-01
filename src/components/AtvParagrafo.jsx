/*
[ATIVIDADE PARÁGRAFO]

Crie e exporte por padrão um componente chamado "AtvParagrafo" que recebe dois argumentos: um "titulo" e um "conteudo". O componente deve exibir uma <div> com um elemento <h1> e um elemento <p> internos. O <h1> terá o conteúdo do argumento "título" e <p> terá o conteúdo do argumento "conteudo". O <h1> de "titulo" deve ter o tamanho de 32px, e o <p> de "conteudo" deve ter o tamanho de 16px. O texto do "titulo" deve ficar acima do texto do "conteudo".
*/

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

export default function AtvParagrafo({conteudo, titulo})  {
  return(
    <>
    <h1 style={estilo.titulo}>{titulo}</h1> 
    <p style={estilo.texto}>{conteudo}</p> 
    </>
  )
}
