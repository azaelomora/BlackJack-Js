export const determinarGanador = (puntosJugadores) => {
    const [puntosJugador,puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if(puntosComputadora === puntosJugador) {
            alert('Nadie gana :(');
        }else if(puntosJugador > 21) {
            alert('La computadora ganó');
        } else if(puntosComputadora > 21) {
            alert('El jugador ganó');
        } else if(puntosJugador === 21) {
            alert('El jugador ganó');
        } else if(puntosJugador < 21 && puntosComputadora>21) {
            alert('El jugador ganó');
        }
        else if(puntosComputadora > puntosJugador && puntosComputadora<21) {
            alert('La computadora ganó');
        }
    }, 100);
}