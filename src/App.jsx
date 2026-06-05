import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvDivisoria from './components/AtvDivisoria';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <AtvDivisoria largura={30} />
      </section>
    </>
  )
}

export default App