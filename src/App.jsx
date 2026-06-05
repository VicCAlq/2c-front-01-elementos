import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvParagrafo from './components/AtvParagrafo';
import AtvDivisoria from './components/AtvDivisoria';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <Paragrafo conteudo="Sou um exemplo"/>
          <Botao/>
          <AtvBotaoAcaoExterna/>
          <AtvBotaoAcaoInterna/>
          <AtvParagrafo/>
          <AtvDivisoria/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
