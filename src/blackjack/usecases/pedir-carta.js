
/**
 * Está función me permite pedir una carta
 * @param {Array<string>} deck es un arreglo de String
 * @returns {String} retorna una carta
 */

export const pedirCarta = (deck) => {

    if(!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.shift();
}

// export default pedirCarta;