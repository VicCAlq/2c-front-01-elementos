import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <AtvParagrafo />
          <Paragrafo conteudo="Sou um exemplo"/>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
