import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <Paragrafo titulo="Grandão">
            Pequenininho
          </Paragrafo>
          <Botao/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
