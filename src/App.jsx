import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Divisoria from './components/Divisoria';
import Paragrafo from './components/Paragrafo';
import Botao from './components/Botao';
import AtvParagrafo from './components/AtvParagrafo';
import AtvDivisoria from './components/AtvDivisoria';
import AtvBotaoAcaoInterna from './components/AtvBotaoAcaoInterna';
import AtvBotaoAcaoExterna from './components/AtvBotaoAcaoExterna';

function App() {
  const [count, setCount] = useState(0);

  const handleComando = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <section id="center" className="showcase-container">
      <motion.div 
        className="showcase-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="showcase-header">Exemplo Inicial</h2>
        <Divisoria>
          <Paragrafo conteudo="Sou um exemplo" />
          <Botao />
        </Divisoria>
      </motion.div>

      <motion.div 
        className="showcase-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="showcase-header">Parágrafo</h2>
        <AtvParagrafo 
          titulo="Paragrafoooooooooooooooooooo" 
          conteudo="AAAAAAAAAAAAAAA"
        />
      </motion.div>

      <motion.div 
        className="showcase-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="showcase-header">Divisória</h2>
        <AtvDivisoria largura={35} />
        <AtvDivisoria largura={70} />
      </motion.div>




      <motion.div 
        className="showcase-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="showcase-header">Botões com Ação</h2>
        <div className="showcase-grid">
          <AtvBotaoAcaoInterna />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
            <AtvBotaoAcaoExterna comando={handleComando} />
            <div style={{ fontSize: '15px', color: 'var(--text)', fontWeight: '500' }}>
              Cliques no botão externo: <strong style={{ color: 'var(--accent)', fontSize: '18px' }}>{count}</strong>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default App;
