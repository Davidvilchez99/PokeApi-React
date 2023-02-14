import logo from './logo.svg';
import './App.css';
import {  useState, useEffect } from 'react';
import PokemonDetalle from './pokemonDetalle/Ejercicio';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cabecera from './cabecera/Cabecera.js';
import  Navigation from './navigation/navigation.js'; 
import  PokemonVista from './detallePokemonVista/Ejercicio.js'; 
import  Jugar from './jugar/jugar.js'; 

import { Link } from "react-router-dom";

function App() {

  const [numPokemons, setNumPokemons] = useState(0);
  const [listaPokemons, setlistaPokemons] = useState([]);
  const [urlPokeApi, setUrlPokeApi]  = useState("https://pokeapi.co/api/v2/pokemon?limit=9");
  const [pokemonDetalles, setpokemonDetalles]  = useState([]);

  useEffect ( ()=> cargaTodos(), []);
  function cargaTodos(){
    fetch(urlPokeApi)
    .then((response) => response.json())  
    .then((listaPokemon) => {
      setNumPokemons( listaPokemon.count);
      setlistaPokemons(listaPokemons.concat(listaPokemon.results));
      setUrlPokeApi(listaPokemon.next);

      // for (let i=0; i<listaPokemon.results.length; i++){
      //   fetch("https://pokeapi.co/api/v2/pokemon/"+listaPokemon.results[i].name)
      //   .then((response) => response.json())  
      //   .then((datos) => { 
      //     console.log(datos);
      //     setpokemonDetalles(pokemonDetalles.push(datos));
      //     console.log(pokemonDetalles);
      //     // for (let j=0; j<datos.length; j++){
      //     //   setpokemonDetalle(pokemonDetalle.push(datos[j]));
      //     //   console.log(pokemonDetalle);
      //     // }
    
      //   })
      //   }
    });



  }

  function traerMas(){
    cargaTodos();
  }
  function FunctpokemonDetalle(){
    // fetch("https://pokeapi.co/api/v2/pokemon/"+name)
    // .then((response) => response.json())  
    // .then((ola) => { 
    //   setpokemonDetalle(ola);
    //   console.log(ola);
    // });
  }
  return (
    <>
    {/* {numPokemons} */}


  <div id="demo">

        {
        listaPokemons.map((pokemon)=>
        <PokemonDetalle pokemon={pokemon.name}/>
          )
      }
      </div>

      <button onClick={traerMas}>Cargar mas</button>


    </>
    
  );
}

export default App;
