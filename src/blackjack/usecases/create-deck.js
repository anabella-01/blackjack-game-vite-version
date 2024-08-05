import _ from 'underscore';

/** 
 * Esta función crea un nuevo deck
 *   @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 *   @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 *   @returns {Array<String>} regresa un nuevo deck de cartas
*/

export const crearDeck = (tiposDeCarta , tiposEspeciales) => {
   
    if(!tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error ('tiposDeCarta es obligatorio como array de string');
    
    if(!tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error ('tiposDeCarta es obligatorio como array de string');

    let deck = [];
    
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }
    
    return _.shuffle(deck) ;
}
