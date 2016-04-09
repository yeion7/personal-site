const page = require('page');

const app = document.getElementById('app');

const menu = document.getElementById('menu');
const nav = document.querySelector('.nav');

const linkProyectos = document.getElementById('proyectos');

// Listener de acciones
linkProyectos.addEventListener('click', function (e) {
  e.preventDefault();
  page.redirect('/proyectos');
});

menu.addEventListener('click', function () {
  nav.classList.toggle('hidden');
});

// Pagina proyectos
function proyectos() {
  const proyectosTemplate = `<div class="proyectos">
    <div class="proyecto">
      <h3 class="proyecto-name">HangoutJS</h3>
      <p class="proyecto-text">
        Evento en linea donde nos reunimos a compartir conocimiento sobre JavaScript
        desarrolladores de habla hispana.
      </p>
      <div class="proyecto-links">
        <a href="https://www.youtube.com/playlist?list=PLH3EFUtS4FBzUYU6BSouy0kiX3cnzyTKc" target="_blank">
          <i class="icon-youtube icon"></i>
        </a>
        <a href="https://twitter.com/HangoutJs" target="_blank">
          <i class="icon-twitter icon"></i>
        </a>
      </div>
    </div>

    <div class="proyecto">
      <h3 class="proyecto-name">180 websites</h3>
      <p class="proyecto-text">
        Voy a crear 180 miniproyectos en 180 dias, compartiendo el código
        y las experiencias en la comunidad.
      </p>
      <div class="proyecto-links">
        <a href="https://github.com/yeion7/websites" target="_blank">
          <i class="icon-github icon"></i>
        </a>
        <a href="http://yeion7.github.io/websites/" target="_blank">
          <i class="icon-web icon"></i>
        </a>
      </div>
    </div>

    <div class="proyecto">
      <h3 class="proyecto-name">Impresionante JS</h3>
      <p class="proyecto-text">
        Recopilamos contenido de calidad en español
        para quienes desean aprender JavaScript.
      </p>
      <div class="proyecto-links">
        <a href="https://github.com/sergiodxa/impresionante-javascript" target="_blank">
          <i class="icon-github icon"></i>
        </a>
      </div>
    </div>

    <div class="proyecto">
      <h3 class="proyecto-name">Canal YouTube</h3>
      <p class="proyecto-text">
        Enseño sobre linux y software libre,
        publicando un video nuevo cada semana.
      </p>
      <div class="proyecto-links">
        <a href="https://www.youtube.com/user/yeison0327/" target="_blank">
          <i class="icon-youtube icon"></i>
        </a>
      </div>
    </div>

    <div class="proyecto">
      <h3 class="proyecto-name">Blog</h3>
      <p class="proyecto-text">
        Escribo un post semanal sobre JavaScript
      </p>
      <div class="proyecto-links">
        <a href="https://medium.com/@yeion7" target="_blank">
          <i class="icon-medium icon"></i>
        </a>
      </div>
    </div>
  </div>`;
  app.innerHTML = proyectosTemplate;
}

function cleanApp() {
  app.innerHTML = ' ';
  next();
}

//Router
page('/proyectos', proyectos);

page();
