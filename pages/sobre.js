import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Social from '../components/Social';
import H1 from '../components/H1';

export default () => (
  <div>
    <Header />
    <Main>
      <H1>¡Hola!</H1>
      <div>
        <p>
          Creo que la tecnología tiene el poder de cambiar vidas, en mi caso me mostró mi pasión. Como muchas cosas en este mundo, ocurrió después de equivocarme, después de dañar una computadora, por fin me hice esa pregunta que cambió mi vida, ¿cómo funcionan esas cosas?
        </p>
        <p>
          Así, desde hace más de diez años, la tecnología ha sido el centro de mi vida. Me ha llevado a conocer cosas interesantes, pero más importante, me ha llevado a conocer profesionales increíbles.
        </p>
        <p>
          Al principio de mi carrera, me enfoque en la administración de redes y soporte, tuve la posibilidad de apoyar a varias empresas en estas áreas y aprender de muchas personas.
        </p>
        <p>
          Buscando nuevos retos encontré la programación y me enamoré de construir cosas, poder resolver todos los días problemas nuevos es mágico.
        </p>
        <p>
          Tuvé la suerte de trabajar con buenas startups en Colombia y hoy trabajo como Frontend construyendo interfaces que ayudan a hacer un poco mejor la vida de las personas.
        </p>

        <p>
          ¿Tienes una pasión que mueve tu vida? contactame me gustaria escuchar tu historia.
        </p>
      </div>
      <Social />
      <style jsx>{`
          div {
            width: 50%;
          }
          p {
            margin: 1em 0;
            line-height: 1.5em;
          }
        `}</style>
    </Main>
  </div>
);
