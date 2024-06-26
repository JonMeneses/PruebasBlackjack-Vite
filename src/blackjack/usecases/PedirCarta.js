
/**
 * 
 * @param {Array<String>} deck  -- example deck= [a,b,c,d...]
 * @returns {<String>}  -- example d
 */
export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}