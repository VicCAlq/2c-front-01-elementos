/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura", cujo valor pode ser entre 10 e 90.
O componente deve exibir uma <div> que ocupe 90% da largura da tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <div> devem ter duas outras <div> exibidas lado a lado.
A <div> da esquerda deve ocupar uma percentagem da <div> inicial, essa percentagem é determinada pelo argumento "largura".
A <div> da direita deve ocupar a largura restante da <div> inicial. Exemplo:

argumento largura = 30
<div> inicial = 90% da largura da tela
<div> esquerda = 30% da largura da div inicial (30% de 90% da largura da tela)
<div> direita = 70% da largura da div inicial (70% de 90% da largura da  tela)
*/

const fabuloso = {
    container: {
        display: "flex",
        width: "90vw",
        height: "1000px"
    },
    esquerda: {
        backgroundColor: "green" 
    },
    direita: {
        backgroundColor: "purple" 
    }

} 
// largura < 10 = 10, largura > 90 = 90
export default function AtvDivisoria({largura, children}) {
    let variacaoE = largura
    if(variacaoE < 10){
        variacaoE = 10
    } else if (variacaoE > 90) {
        variacaoE = 90
    }

    let variacaoD = 100 - variacaoE

    fabuloso.esquerda.width = `${variacaoE}%`
    fabuloso.direita.width = `${variacaoD}%`

    return(
        <div style={fabuloso.container}>
            <div style={fabuloso.direita}>
                {children}
            </div>
            <div style={fabuloso.esquerda}>
                {children}
            </div>
        </div>
    )
}