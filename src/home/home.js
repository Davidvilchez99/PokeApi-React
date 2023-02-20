// import './navigation.css';
import Footer from "../footer/home";
function Home(){
    return <>
  <div class="cover-container ola d-flex w-100  p-3 mx-auto flex-column img text-center">
    <main class="px-3">
      <h1 class="text-black">Bienvenido al mundo de los pokemons</h1>
      <p class="lead">Puedes jugar y ver todos los pokemons de la pokedex</p>
    </main>
  </div>

<section id="sobrenosotros" class="container marketing">

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
</section>

  <Footer/>
    </>
}


export default Home;
