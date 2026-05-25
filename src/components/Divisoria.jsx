import root from '../styles/main';

const estilo = {
  div: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: root.spacings.paddingG,
    backgroundColor: root.colors.foreground,
    gap: root.spacings.gap,
  },
}

export default function Divisoria({children})  {
  return(<div style={estilo.div}>
    {children}
  </div>)
}
