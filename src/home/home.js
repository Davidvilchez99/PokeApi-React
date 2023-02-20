// import './navigation.css';
import ListaDatos from "../accesoDB/Ejercicio";
function Home(){
    return <>
    {/* <ListaDatos/> */}
  <div class="cover-container ola d-flex w-100  p-3 mx-auto flex-column img text-center">
    <main class="px-3">
      <h1>Bienvenido al mundo de los pokemons</h1>
      <p class="lead">Puedes jugar y ver todos los pokemons de la pokedex</p>
      {/* <p class="lead">
        <a class="btn btn-lg btn-secondary fw-bold border-white bg-primary" [routerLink]="['/monedasAll']">Ver todas las
          monedas</a>
      </p> */}
    </main>
  </div>

<section id="sobrenosotros" class="container marketing">
  {/* <h1>Sobre nosotros</h1> */}
  {/* <div class="row">
    <div class="col-lg-4">
      <title>Placeholder</title>
      <img width="50%" height="50%" style="border-radius: 100%;" src="../../assets/img/CAP3.JPG" alt=""/>
      <h2>Deposita fondos en tu cuenta</h2>
      <p>Añade fondos a tu cuenta de criptomonedas para comenzar a operar. Puedes añadir fondos a través de distintos
        métodos de pago.</p>
      <button type="button" class="bg-dark boton btn btn-secondary" data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Más información &raquo;
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Cifrado de datos avanzado
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="../../assets/img/CAP6.JPG" style="width: 80%;"/>
              <hr/>
              <p>Los datos de tus transacciones se protegen mediante un cifrado de extremo a extremo, lo que garantiza
                que solo tú tengas acceso a tu información personal.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <title>Placeholder</title>
      <img width="50%" height="50%" style="border-radius: 100%;" src="../../assets/img/CAP4.JPG" alt=""/>
      <h2>Verifica tu identidad
      </h2>
      <p>Completa el proceso de verificación de identidad para proteger tu cuenta y tus transacciones y descubre todos
        los productos de Binance.</p>
      <button type="button" class="bg-dark btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
        Más información &raquo;
      </button>
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Fondo de activos seguro para usuarios (SAFU)</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="../../assets/img/CAP6.JPG" style="width: 80%;"/>
              <hr/>
              <p>Binance almacena el 10 % de todas las comisiones de trading en un fondo de activos seguro para proteger
                una parte de los fondos de los usuarios.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <title>Placeholder</title>
      <img width="50%" height="50%" style="border-radius: 100%;" src="../../assets/img/CAP5.JPG" alt=""/>

      <h2>Empieza a operar
      </h2>
      <p>¡Ya lo tienes todo listo! Compra y vende criptomonedas, establece compras recurrentes para tus inversiones y
        descubre todos los productos de Binance.
      </p>
      <button type="button" class="bg-dark btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
        Más información &raquo;
      </button>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Control de acceso personalizado
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="../../assets/img/CAP6.JPG" style="width: 80%;"/>
              <hr/>
              <p>Los controles de acceso personalizados te permiten limitar los dispositivos y las direcciones que
                pueden acceder a tu cuenta para brindarte una mayor tranquilidad.
              </p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  <hr class="featurette-divider"/>

  <div class="row featurette">
    <div class="col-md-7">
      <h2 class="featurette-heading" id="nuestrosexpertosdicen">PokeApi <span
          class="text-muted">DVA</span>
      </h2>
      <p class="lead">Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de televisión, películas, juegos de cartas, ropa, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial.
      </p>
    </div>
    <div class="col-md-5">
      <img width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        src={require("../img/pokemon-pokemon-red-and-blue-blastoise-pokemon-bulbasaur-pokemon-wallpaper-preview.jpg")} alt=""/>
      <title>Placeholder</title>
    </div>
  </div>
  <hr class="featurette-divider"/>
  <div class="row featurette">
    <div class="col-md-7 order-md-2" id="loqueofrecemos">
      <h2 class="featurette-heading" id="nuestrosexpertosdicen">Juega y diviertete <span
          class="text-muted">con nuestra página</span>
      </h2>
      <p class="lead">La historia de Pokémon (abreviatura de Pocket Monsters) comienza en Japón, país en el que un amante de los videojuegos llamado Satoshi Tajiri, con apenas 25 años tuvo la idea de diseñar un sistema en el que varios jugadores pudieran interactuar en un mundo compartido. Era una idea ambiciosa para 1990, pero fue el germen de lo que años más tarde se convertiría en un suceso a nivel mundial. Tajiri tuvo la suerte de trabajar bajo la dirección del mítico Shigeru Miyamoto (padre de Mario Bros) en varios videojuegos y luego de años de elaborar la idea, presentó en febrero de 1996 su primer Pokémon para la consola portátil Game Boy. Dos versiones salieron al mercado, Pokémon: "Red" y "Green", y luego, se sumaría el "Blue". El juego era un RPG (role playing game), que ponía al jugador en un mundo lleno de criaturas a las que debían coleccionar y entrenar. El gran agregado y principal atractivo era la posibilidad de que los jugadores interactúen y pongan a combatir sus Pokémones. La fórmula era tan sencilla como adictiva, el público se volcó masivamente al juego y la crítica lo elogió hasta el hartazgo. Poco tardó en convertirse en un fenómeno global.
      </p>
    </div>
    <div class="col-md-5 order-md-1">
      <img width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
        src={require("../img/og-default-image.jpeg")} alt=""/>
      <title>Placeholder</title>

    </div>
  </div>
  <hr class="featurette-divider"/>
  {/* <div class="row featurette" id="contacta">
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contacta</h2>
    <p class="text-center w-responsive mx-auto mb-5">¿Tiene usted alguna pregunta? Por favor, no dude en contactarnos
      directamente. Nuestro equipo se comunicará contigo en cuestión de horas para ayudarte.</p>
    <div class="col-md-11 mb-md-0 mb-5" style="width: 100%;">
      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
        <div class="row">
          <div class="col-md-6">
            <div class="md-form mb-0">
              <label for="name" class="">Tu nombre</label>
              <input placeholder="Introduzca el nombre" type="text" id="name" name="name" class="form-control"></input>
            </div>
          </div>
          <div class="col-md-6">
            <div class="md-form mb-0">
              <label for="email" class="">Tu email</label>
              <input placeholder="ejemplo@gmail.com" type="text" id="email" name="email" class="form-control"></input>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <br></br>
            <div class="md-form">
              <label for="message">Tu mensaje</label>
              <textarea placeholder="Comentanos..." type="text" id="message" name="message" rows="2"
                class="form-control md-textarea"></textarea>
            </div>

          </div>
        </div>
      </form>
      <div class="text-center text-md-left">
        <a class="btn text-light col-12 bg-dark" style="margin-top: 3%">Enviar</a>
      </div>
      <div class="status"></div>
    </div>
  </div> */}
</section>
{/* footer */}

{/* <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="facebook" viewBox="0 0 16 16">
    <path
      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
  </symbol>
  <symbol id="instagram" viewBox="0 0 16 16">
    <path
      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
  </symbol>
  <symbol id="twitter" viewBox="0 0 16 16">
    <path
      d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" id="volverInicio" width="16" height="16" fill="currentColor"
    class="bi bi-arrow-90deg-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd"
      d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z" />
  </symbol>
</svg> */}

<div class="b-example-divider">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        {/* <svg class="bi" width="30" height="24">
          <use xlink:href="#bootstrap"></use>
        </svg> */}
      </a>
      <span class="mb-3 mb-md-0 text-muted">© 2023 David Vilchez Almohalla, DVA Crypto</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24">
            {/* <use xlink:href="#twitter"></use> */}
          </svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24">
            {/* <use xlink:href="#instagram"></use> */}
          </svg></a></li>
      <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24">
            {/* <use xlink:href="#facebook"></use> */}
          </svg></a></li>
    </ul>
  </footer>
</div>
    </>
}


export default Home;
