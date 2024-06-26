import { valorCarta, pedirCarta } from "./index";

/**
 * 
 * @param {Number} puntosMinimos -- Puntos Jugador
 * @param {Array<String>} deck 
 * @param {HTML Element} puntosHTML 
 * @param {HTML Element} divCartasComputadora 
 */
export const turnoComputadora = (puntosComputadora, puntosMinimos, deck, puntosHTML, divCartasComputadora, carta) => {
    do {
        carta = pedirCarta(deck);
        
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}