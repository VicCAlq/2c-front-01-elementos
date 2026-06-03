import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <Paragrafo conteudo="Sou um exemplo"/>
          <Botao/>
          <AtvBotaoAcaoInterna/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
