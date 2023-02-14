// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function PokemonVista() {
  const { id } = useParams();
  var [datosPokemon, setDatos] = useState([]);
  var [imagenes, setImagenes] = useState([]);


  useEffect(() => CcargarDatosPokemon(), []);
  function CcargarDatosPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/" + id)
      .then((response) => response.json())
      .then((datosApi) => {
        // console.log(datos);
        setDatos(datosPokemon = datosApi);
        setImagenes(imagenes = datosApi.sprites.other.home);
        console.log(datosPokemon);
        console.log(imagenes);

      });

  }
  return (
    <>
      {/* <h1> {id}</h1> */}
      <div id="infoPelicula">
        <div id="infoPeliculaDiv">
            {/* <img key={datosPokemon.name} src={imagenes.front_default} /> */}
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
              <div class="carousel-indicators">

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                {/*<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button> */}
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_default} />
                </div>
                {/* <div class="carousel-item">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.back_default} />
                </div> */}
                <div class="carousel-item">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_female} />
                </div>
                {/* <div class="carousel-item">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.back_female} />
                </div> */}
                <div class="carousel-item">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_shiny} />
                </div>
                {/* <div class="carousel-item">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.back_shiny} />
                </div> */}
                <div class="carousel-item">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.front_shiny_female} />
                </div>
                {/* <div class="carousel-item">
                  <img class="d-block w-100" key={datosPokemon.name} src={imagenes.back_shiny_female} />
                </div> */}
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
               <Link to="/pokemons"><button>Volver a los pokemons <i class="fa fa-long-arrow-left"></i></button></Link>
               
            </div>
          </div>
        </div>

    </>
  );

}

