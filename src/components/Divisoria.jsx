import root from '../styles/main';



export default function Divisoria({largura})  {

  const larguraEsquerda = `${largura}%`
  const larguraDireita = `${100-largura}%`

  const estilo = {
    esquerda: {
      width: larguraEsquerda,
      backgroundColor: "blue"
    }, 
    direita: {
      width: larguraDireita,
      backgroundColor: "green"
    }, 
  }

  return(<>
    <div style={estilo.esquerda}>
    </div>
  </>
  )
}