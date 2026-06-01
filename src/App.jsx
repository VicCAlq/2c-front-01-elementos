import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna'

function App() {

  return (
    <>
        <AtvParagrafo  titulo = "ManoCoxas" conteudo="Site da atividade de ManoCoxas (João Guilherme nas horas vagas)"/>
        <AtvBotaoAcaoExterna/>
    </>
  )
}

export default App
