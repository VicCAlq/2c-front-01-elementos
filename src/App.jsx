import { useState } from 'react'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';
import AtvDivisoria from './components/AtvDivisoria';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';

function comando(){
  alert('Vamos lá?');
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Divisoria>
          <AtvParagrafo titulo = "Sou Ryan" conteudo = 'sou estudante de Programação'/>
          <Paragrafo conteudo="Sou um exemplo"/>
          <Botao/>
          <AtvDivisoria largura = '30'/>
          <AtvBotaoAcaoInterna/>
          <AtvBotaoAcaoExterna comando={comando}/>
        </Divisoria>
      </section>
    </>
  )
}

export default App
