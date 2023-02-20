import logo from './logo.svg';
import './App.css';
import {  useState, useEffect } from 'react';
import PokemonDetalle from './pokemonDetalle/Ejercicio';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cabecera from './cabecera/Cabecera.js';
import  PokemonVista from './detallePokemonVista/Ejercicio.js'; 
import  Jugar from './jugar/jugar.js'; 

import { Link } from "react-router-dom";

function App() {

  const [numPokemons, setNumPokemons] = useState(0);
  const [listaPokemons, setlistaPokemons] = useState([]);
  const [urlPokeApi, setUrlPokeApi]  = useState("https://pokeapi.co/api/v2/pokemon?limit=9");
  const [pokemonDetalles, setpokemonDetalles]  = useState([]);
  const [isLoaded, setIsLoaded]  = useState(false);

  useEffect ( ()=> cargaTodos(), []);
  function cargaTodos(){
    fetch(urlPokeApi)
    .then((response) => response.json())  
    .then((listaPokemon) => {
      setNumPokemons( listaPokemon.count);
      setlistaPokemons(listaPokemons.concat(listaPokemon.results));
      setUrlPokeApi(listaPokemon.next);
      setIsLoaded(true);
    });



  }

  function traerMas(){
    cargaTodos();
  }

  if (isLoaded){
    return     <>
    

    <div id="demo">
  
          {
          listaPokemons.map((pokemon)=>
          <PokemonDetalle pokemon={pokemon.name}/>
            )
        }
        </div>
  
        <button id='cargarMas' onClick={traerMas}>Cargar mas</button>
  
  
      </>
  }
}

export default App;
