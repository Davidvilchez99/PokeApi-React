// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function PokemonVista() {
  const { id } = useParams();
  var [datosPokemon, setDatos] = useState([]);
  var [imagenes, setImagenes] = useState([]);
  var [stats, setStats] = useState({ vida: 0, ataque: 0, defensa: 0, atq_especial: 0, def_especial: 0, velocidad: 0 });


  useEffect(() => CcargarDatosPokemon(), []);
  function CcargarDatosPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((datosApi) => {
        setDatos(datosPokemon = datosApi);
        setImagenes(imagenes = datosApi.sprites.other.home);
        setStats(stats = { vida: datosApi.stats[0].base_stat, ataque: datosApi.stats[1].base_stat, defensa: datosApi.stats[2].base_stat, atq_especial: datosApi.stats[3].base_stat, def_especial: datosApi.stats[4].base_stat, velocidad: datosApi.stats[5].base_stat })
      });

  }
  return (
    <>
      <div id="infoPelicula">
        <div id="infoPeliculaDiv">
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_default} />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_female} />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_shiny} />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_shiny_female} />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div>
            <h2>Nombre: {datosPokemon.name}</h2>
            <hr></hr>
            <p>Altura: {datosPokemon.height}</p>
            <p>Peso:  {datosPokemon.weight}</p>
            <p>Experiencia base: {datosPokemon.base_experience}</p>
            <p>Orden: {datosPokemon.order}</p>
            <hr></hr>
            <p>Stats</p>
            <p>Vida: {stats.vida}</p>
            <p>Ataque: {stats.ataque}</p>
            <p>Defensa: {stats.defensa}</p>
            <p>Ataque especial: {stats.atq_especial}</p>
            <p>Defensa especial: {stats.def_especial}</p>
            <p>Velocidad: {stats.velocidad}</p>
            <hr></hr>
            <Link to="/pokemons"><button id="volverPokemons">Volver a los pokemons <i class="fa fa-long-arrow-left"></i></button></Link>

          </div>
        </div>
      </div>

    </>
  );

}

