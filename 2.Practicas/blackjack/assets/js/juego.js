/*
    2C = Treboles
    2D = Diamantes
    2H = Corazones
    2S = Picas

    A, J, Q, K
*/

let deck = [], puntosJ = 0, puntosM = 0;
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const btnN = document.querySelector('#btnN');
const btnP = document.querySelector('#btnP');
const btnD = document.querySelector('#btnD');
const Puntos = document.querySelectorAll('small');
const divManosJ = document.querySelector('#jugador-cartas');
const divManosM = document.querySelector('#computadora-cartas');


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

const pedirCarta = () => (deck.length === 0) ? console.log('No hay cartas en el Deck') : carta = deck.pop();

const valorCarta = carta => {
    const valor = carta.substring(0, carta.length-1);
    return (isNaN(valor)) ? ((valor === 'A') ? 11 : 10) : (valor*1);
}

const turnoCompu = (puntosMinimos) => {
    do{
        const carta = pedirCarta();
        puntosM += valorCarta(carta);
        Puntos[1].innerText = puntosM;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divManosM.append(imgCarta);
        if (puntosMinimos > 21) {
            break;
        }
    }while ((puntosM<puntosMinimos) && (puntosMinimos <= 21));

}

crearDeck();


btnP.addEventListener('click',() =>{
    let carta = pedirCarta()
    puntosJ += valorCarta(carta);
    Puntos[0].innerText = puntosJ;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divManosJ.append(imgCarta);

    if (puntosJ > 21){
        console.warn('Lo siento ya perdiste');
        btnP.disabled = true;
        btnD.disabled = true;
        turnoCompu(puntosJ);
    }else if (puntosJ === 21){
        console.warn('21 Genial');
        btnP.disabled = true;
        btnD.disabled = true;
        turnoCompu(puntosJ);
    }
});

btnD.addEventListener('click',()=>{
    btnP.disabled = true;
    btnD.disabled = true;
    turnoCompu(puntosJ);
});

btnN.addEventListener('click', ()=>{
    deck = [];
    deck = crearDeck();
    puntosM = 0;
    puntosJ = 0;
    Puntos[0].innerHTML = 0;
    Puntos[1].innerHTML = 0;
    divManosM.innerHTML = '';
    divManosJ.innerHTML = '';
    btnD.disabled = false;
    btnP.disabled = false;
});