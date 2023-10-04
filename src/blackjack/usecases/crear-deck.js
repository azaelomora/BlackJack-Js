import _ from 'underscore';

/**
 * Está función crea un nuevo deck
 * @param {Array} tiposDeCarta
 * @param {Array} tiposEspeciales
 * @returns {Array} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta>0) throw new Error('Tipos de carta es obligatorio como un arreglo de string');

    let deck = [];
    for(let i= 2; i<=10; i++){
        for(let tipo of tiposDeCarta){
            deck.push( i + tipo);
        }
    }
    for(let tipo of tiposDeCarta){
        for(let especial of tiposEspeciales){
            deck.push( especial + tipo);
        }
    }
    return _.shuffle(deck);
    
}

// export default crearDeck;