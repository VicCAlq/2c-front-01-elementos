/*
[ATIVIDADE DIVISÓRIA]

Crie e exporte por padrão um componente chamado "AtvDivisoria" que recebe um argumento "largura", cujo valor pode ser entre 10 e 90. O componente deve exibir uma <div> que ocupe 90% da largura da tela visível (use a propriedade "width" com o valor "90vw" para isso), e dentro desta <div> devem ter duas outras <div> exibidas lado a lado. A <div> da esquerda deve ocupar uma percentagem da <div> inicial, essa percentagem é determinada pelo argumento "largura". A <div> da direita deve ocupar a largura restante da <div> inicial. Exemplo:

argumento largura = 30
<div> inicial = 90% da largura da tela
<div> esquerda = 30% da largura da div inicial (30% de 90% da largura da tela)
<div> direita = 70% da largura da div inicial (70% de 90% da largura da  tela)
*/
export default function AtvDivisoria({ largura }) {
    const Esquerda = `${largura}%`;
    const Direita = `${100 - largura}%`;

    const style = {
        container: {
            backgroundColor: "blue",
            width: "90vw",
            display: "flex",
        },
        esquerda: {
            width: Esquerda,
            backgroundColor: "red",
        },
        direita: {
            width: Direita,
            backgroundColor: "black",
        },
    };
    
    return (
        <div style={style.container}>
            <p> Teste</p>
            <div style={style.esquerda}>meu plano benigno esta se concretizandoooooo</div>
            <div style={style.direita}>plano benigno finalizadooooooooooooo (se voce for japones leia a parte esquerda primeiro)</div>
        </div>
    );
}
