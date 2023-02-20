// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'
import PokemonVista from '../detallePokemonVista/Ejercicio.js'
import {  useState, useEffect } from 'react';
import { Link } from "react-router-dom";


export default function PokemonDetalle(props) {
  var [pokemonDetalleLista, setPokemonDetalleLista] = useState([]);
  var [imagen, setImagen] = useState("");
  useEffect ( ()=> detalle(), []);

    function detalle(){
      fetch("https://pokeapi.co/api/v2/pokemon/"+props.pokemon)
      .then((response) => response.json())  
      .then((datos) => { 
        setPokemonDetalleLista(pokemonDetalleLista = datos);
        setImagen(imagen = datos.sprites.front_default);
        
        
      });
    }
    return (
      <>
      
      <div class="div--demo" id="tt3606752">
        <h2>{pokemonDetalleLista.name}</h2>
    <div>
    <img  key={pokemonDetalleLista.name} src={imagen}/>
    </div>
      <div>
      <Link to={"/pokemonVista/"+pokemonDetalleLista.name}><button class="btnsInformacion" >Mas informacion</button></Link>
        
      </div>
      </div>
      </>
    );
  }
  
