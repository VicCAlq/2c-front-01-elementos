import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';
import AtvDivisoria from './components/AtvDivisoria';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        
        <Divisoria>
          <AtvDivisoria largura={30}/>
          <AtvParagrafo titulo="Grandão" conteudo="Pequenininho"/>
          <AtvBotaoAcaoInterna/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
