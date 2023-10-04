import _ from 'underscore';

import {crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases';
import { determinarGanador } from './usecases/determinar-ganador';

//Patrón módulo
const miModulo = (()=> {
  'use strict'

  let deck = [];
  const tipos = ['C', 'D', 'H', 'S',],
        especiales = ['A', 'J', 'Q', 'K',];

  let puntosJugadores = []; 

  //Referencias del html
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const divCartasJugadores = document.querySelectorAll('.divCartas') ,
        puntosHTML = document.querySelectorAll('small');

  //Esta función inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(tipos, especiales);

      puntosJugadores = [];
      for( let i = 0; i<numJugadores; i++) {
          puntosJugadores.push(0);
      }

      //Limpia el puntaje mostrado en pantalla
      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );

      //Habilita los botones
      btnPedir.disabled = false;
      btnDetener.disabled = false;
      return puntosJugadores;
  }

  
  //Eventos
  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);

      crearCarta(carta, 0, divCartasJugadores);

      if(puntosJugador>21){
          console.warn('Perdiste');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          console.log(puntosJugador);
          let array = []
          array = [puntosJugador,0];
          turnoComputadora(array, deck, puntosHTML, divCartasJugadores);
      } else if(puntosJugador === 21){
          console.warn('21, genial');
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          let array = []
          array = [puntosJugador,0];
          determinarGanador(array);
      }
  });

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugadores, deck, puntosHTML, divCartasJugadores);
  });

  btnNuevo.addEventListener('click', () => {

      inicializarJuego();
      
  });

  return {
      nuevoJuego: inicializarJuego
  };
})();
