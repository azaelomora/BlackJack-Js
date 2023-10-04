import {determinarGanador} from './determinar-ganador';
import { acumularPuntos } from './acumular-puntos';
import { pedirCarta } from './pedir-carta';
import { crearCarta } from './crear-carta';

//Turno computadora
export const turnoComputadora = (puntosMinimos, deck, puntosHTML, divCartasJugadores) => {
    let puntosComputadora = 0;
    let puntosJugadores = puntosMinimos[0]
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosMinimos.length - 1, puntosMinimos, puntosHTML);
        crearCarta(carta, puntosMinimos.length - 1, divCartasJugadores);
        } while((puntosComputadora < puntosMinimos[0]) && (puntosMinimos[0] <= 21));

        determinarGanador(puntosMinimos);
}