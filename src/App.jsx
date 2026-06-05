import { useState } from 'react'
import './App.css'
import Divisoria from './components/AtvDivisoria';
import Paragrafo from './components/AtvParagrafo';
import Botao from './components/AtvBotaoAcaoInterna';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria largura = "65">
          <Paragrafo titulo= "Receba a benção de ManoCoxas" conteudo="Amém"></Paragrafo>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
