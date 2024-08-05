/**
 * 
 * @param {Array<String>} deck es un array de string
 * @returns {String} retorna la carta del deck
 */
export const pedirCarta = ( deck ) => {

    //console.log('Deck recibido:', deck);

    if (!Array.isArray(deck)) {
        throw new TypeError('deck debe ser un arreglo');
    }

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}