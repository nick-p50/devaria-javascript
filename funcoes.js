function numeroAleatorio() {
    console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();

const olaMundo = () => {
    console.log("olá mundo")
}

olaMundo();

function soma(numero1, numero2) {
    return numero1 + numero2;
}

const primeiraSoma = soma(1, 3);
const segundaSoma = soma(6, 7);

console.log({
    primeiraSoma, 
    segundaSoma
});