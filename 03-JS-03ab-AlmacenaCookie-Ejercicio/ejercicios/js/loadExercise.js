"use strict";

// Función para cargar el contenido de los ejercicios con el diseño de tarjetas
function loadExercise(exercise) {
  const mainContent = document.getElementById("mainContent");
  switch (exercise) {
    case 'mini-calculadora':
      mainContent.innerHTML = `
      <div class="container">
        <div class="card">
          <div class="cardTitle">Mini Calculadora</div>
          <div class="cardBody">
            <p>Aquí va la descripción de las funciones de la Mini Calculadora...</p>
          </div>
          <div class="cardFooter"><a href="./NUMBER/mini-calculadora/index.html">&gt;&gt; Solución</a></div>
        </div>
      </div>`
      break;
    case 'cambios-de-base':
      mainContent.innerHTML = `
      <div class="container">
        <div class="card">
          <div class="cardTitle">Cambios de Base</div>
          <div class="cardBody">
            <p>Aquí va la descripción de las funciones del Cambio de Base...</p>
          </div>
            <div class="cardFooter"><a href="./NUMBER/cambios-de-base/index.html">&gt;&gt; Solución</a></div>
        </div>
      </div>`
      break;
    case 'calculadora':
      mainContent.innerHTML = `
      <div class="container">
        <div class="card">
          <div class="cardTitle">Calculadora</div>
          <div class="cardBody">
            <p>Aquí va la descripción de la funcionalidad de la Calculadora...</p>
          </div>
          <div class="cardFooter"><a href="./NUMBER/calculadora/index.html">&gt;&gt; Solución</a></div>
        </div>
      </div>`
      break;
    case 'modificar-texto':
      mainContent.innerHTML = `
        <div class="container">
          <div class="card">
            <div class="cardTitle">Modificación del texto</div>
            <div class="cardBody">
              <p>Aquí va la descripción para las modificaciones del texto...</p>
            </div>
              <div class="cardFooter"><a href="./STRING/modificar-texto/index.html">&gt;&gt; Solución</a></div>
          </div>
        </div>`
      break;
    case 'modificar-texto-api':
      mainContent.innerHTML = `
          <div class="container">
            <div class="card">
              <div class="cardTitle">Modificación del texto cargado desde una API</div>
              <div class="cardBody">
                <p>Aquí va la descripción para las modificiones de texto cargado desde API Web...</p>
              </div>
               <div class="cardFooter"><a href="./STRING/modificar-texto-api/index.html">&gt;&gt; Solución</a></div>
            </div>
          </div>`
      break;
    case 'genera-matrices':
      mainContent.innerHTML = `
          <div class="container">
            <div class="card">
              <div class="cardTitle">Modificación del texto</div>
              <div class="cardBody">
                <p>Aquí va la descripción para las modificaciones del texto...</p>
              </div>
                <div class="cardFooter"><a href="./ARRAY/genera-matrices/index.html">&gt;&gt; Solución</a></div>
            </div>
          </div>`
      break;
    case 'genera-matrices-aleatorio':
      mainContent.innerHTML = `
            <div class="container">
              <div class="card">
                <div class="cardTitle">Modificación del texto cargado desde una API</div>
                <div class="cardBody">
                  <p>Aquí va la descripción para las modificiones de texto cargado desde API Web...</p>
                </div>
                 <div class="cardFooter"><a href="./ARRAY/genera-matrices-aleatorio/index.html">&gt;&gt; Solución</a></div>
              </div>
            </div>`
      break;
      case 'cookie':
      mainContent.innerHTML = `
      <div class="container">
        <div class="card">
          <div class="cardTitle">Almacenamiento con Cookies</div>
          <div class="cardBody">
            <p>Aquí podrás almacenar, mostrar y borrar datos usando Cookies.</p>
          </div>
          <div class="cardFooter"><a href="./ALMACENA/cookie/index.html">&gt;&gt; Solución</a></div>
        </div>
      </div>`;
      break;
    default:
      break;
  }
}
