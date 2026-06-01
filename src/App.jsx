import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/AtvParagrafo';
import Botao from './components/Botao';

function App() {
  return (
    <>
      <section id="center">
        <Divisoria>
          <Paragrafo conteudo="Sou um exemplo"/>
          <Paragrafo titulo={"Titulo massa"}>
            Sou um texto
          </Paragrafo>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
