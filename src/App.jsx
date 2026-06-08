import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';
import AtvDivisoria from './components/AtvDivisoria';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <AtvDivisoria largura="30px"/>
          <AtvParagrafo titulo="Grandão" conteudo="Pequenininho"/>
          <Paragrafo conteudo="Eu sou um exemplo"/>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
