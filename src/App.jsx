import { useState } from 'react'
import './App.css'
import Divisoria from './components/AtvDivisoria';
import Botao from './components/AtvBotaoAcaoInterna';
import Paragrafo from './components/AtvParagrafo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria largura = "30">
          <Paragrafo t = "oi" c = "tudo bem"></Paragrafo>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
