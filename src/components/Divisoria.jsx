import root from '../styles/main';

export default function Divisoria({children})  {

  const estilo = {
    esquerda: {
      width: "100%",
      backgroundColor: "#333333"
    }, 
    direita: {
      width: "100%",
      backgroundColor: "green"
    }, 
  }

  return(<>
    <div style={estilo.esquerda}>
      {children}
    </div>
  </>
  )
}
