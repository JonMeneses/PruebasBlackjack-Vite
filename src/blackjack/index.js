import {crearDeck, pedirCarta, valorCarta, turnoComputadora, CrearCartaHtml} from './usecases/index';


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


let deck = [],
    carta = '';
    
let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHTML = document.querySelectorAll('small');


// Eventos
btnPedir.addEventListener('click', () => {

    carta = pedirCarta(deck);
    
    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = CrearCartaHtml(carta);
    divCartasJugador.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosComputadora,puntosJugador, deck, puntosHTML, divCartasComputadora, carta);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosComputadora,puntosJugador, deck, puntosHTML, divCartasComputadora, carta);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosComputadora,puntosJugador, deck, puntosHTML, divCartasComputadora, carta);
});

btnNuevo.addEventListener('click', () => {

    // crearDeck()
    // deck = [];
    deck = crearDeck(tipos,especiales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;

});
