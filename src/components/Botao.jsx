const estilo = {
  botao: {
    borderRadius: "5px",
    padding: "8px 16px",
    backgroundColor: "#6200EE",
  },
  texto: {
    color: "#333333",
    fontSize: "16px",
  }
};

export default function Botao({ texto = "Pode clicar!", onClick }) {
  function handleClick() {
    if (onClick) {
      onClick();
    }
    alert("AIAIUIUI");
  }

  return (
    <button style={estilo.botao} onClick={handleClick}>
      <span style={estilo.texto}>{texto}</span>
    </button>
  );
}