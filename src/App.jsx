import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import AtvParagrafo from './components/AtvParagrafo';
import Botao from './components/Botao';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <AtvParagrafo conteudo="ninguem liga"/>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
