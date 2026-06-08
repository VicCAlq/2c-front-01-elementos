const estilo = {
  div: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    padding: "24px",
    backgroundColor: "#FFFFFF",
    gap: "16px",
  },
};

export default function Divisoria({ children }) {
  return (
    <div style={estilo.div}>
      {children}
    </div>
  );
}