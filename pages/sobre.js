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
          Pero llegue a un punto donde sentía que quería influir en la vida de más personas, este deseo me llevó a investigar cómo podía lograr esto y  hace unos años tuve la fortuna de conocer
          {' '}
          <a href="https://platzi.com/" className="ref">Platzi</a>
          {' '}
          y de escuchar a
          {' '}
          <a href="https://twitter.com/freddier" className="ref">Freddy Vega</a>
          .
        </p>
        <p>
          Gracias él y su team pude aprender cómo funcionaba la industria del software, como cada dia se resuelven problemas cada vez más grandes con código y yo quería hacer parte de eso.
        </p>
        <p>
          Gracias a ellos y su increíble comunidad ahora soy un Frontend Developer, que busca resolver problemas con código, compartir experiencias y conocimientos.
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
