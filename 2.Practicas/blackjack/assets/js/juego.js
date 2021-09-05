/*
    2C = Treboles
    2D = Diamantes
    2H = Corazones
    2S = Picas

    A, J, Q, K
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const btnP = document.querySelector('#btnP');
const Puntos = document.querySelectorAll('small');

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (const tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (const tipo of tipos) {
        for (const esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    return deck;
}

const pedirCarta = (carta) =>{
    if (deck.length === 0){
        console.error('No hay cartas en el deck');
    }else {
        carta = deck.pop();
    }
    return carta;
}

const pedirCarta2 = carta => (deck.length === 0) ? console.log('No hay cartas en el Deck') : carta = deck.pop();

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);
    let puntos = 0;
    if (isNaN(valor)){
        puntos = (valor === 'A') ? 11 : 10;
    }else{
        puntos += valor*1;
    }
    return puntos;
}

const valorCarta2 = carta => {
    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : (valor*1);
}

crearDeck();
let carta;

console.time('Funciones Coral');
carta = pedirCarta2(carta);
console.timeEnd('Funciones Coral');

console.time('Funciones Vintage');
let puntos = valorCarta(pedirCarta(carta));
console.timeEnd('Funciones Vintage');

btnP.addEventListener('click',() =>{
    puntos += valorCarta2(pedirCarta2(carta));
    Puntos[1].innerText = puntos;
});