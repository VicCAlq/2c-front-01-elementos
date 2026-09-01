import './App.css'
import AtvDivisoria from './components/AtvDivisoria';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvParagrafo from './components/AtvParagrafo'

function App() {
  return (
    <>
      <section id="center">
        <AtvDivisoria largura={30}>
          <AtvParagrafo titulo="oi" conteudo="tudo bem" />
          <AtvBotaoAcaoInterna />
        </AtvDivisoria>
      </section>
    </>
  )
}

export default App
