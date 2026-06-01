/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura", cujo valor pode ser entre 10 e 90. 
O componente deve exibir uma <div> que ocupe 90% da largura da tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <div> devem ter duas outras <div> exibidas lado a lado. 
A <div> da esquerda deve ocupar uma percentagem da <div> inicial, essa percentagem é determinada pelo argumento "largura". A <div> da direita deve ocupar a largura restante da <div> inicial. 

Exemplo:

argumento largura = 30
<div> inicial = 90% da largura da tela
<div> esquerda = 30% da largura da div inicial (30% de 90% da largura da tela)
<div> direita = 70% da largura da div inicial (70% de 90% da largura da  tela)
*/

const estilo = {
  container: {
    display: 'flex',
    width: '90vw',
    height: '50vh',
  },
  esquerda: {
    backgroundColor: "blue"
  },
  direita: {
    backgroundColor: "red"
  }
};

export default function AtvDivisoria({ largura, children }) {
  let validacao = largura;

  // <10 = 10, >90 = 90
  if (validacao < 10) {
    validacao = 10
  } else if (validacao > 90) {
    validacao = 90
  }
  const resto = 100 - validacao;

  estilo.esquerda.width = `${validacao}%`
  estilo.direita.width = `${resto}%`

  return (
    <div style={estilo.container}>
      <div style={ estilo.esquerda }>
        {children}
      </div>
      <div style={ estilo.direita }>
        {children}
      </div>
    </div>
  );
}
