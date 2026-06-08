const estilo = {
  texto: {
    color: "#333333",
    fontSize: "16px",
  },
};

export default function Paragrafo({ conteudo = "" }) {
  return (
    <p style={estilo.texto}>{conteudo}</p>
  );
}