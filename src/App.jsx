import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvParagrafo from './components/AtvParagrafo';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <Paragrafo conteudo="Sou um exemplo"/>
          <Botao/>
          <AtvBotaoAcaoInterna/>
          <AtvParagrafo/>
          <AtvBotaoAcaoExterna/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
