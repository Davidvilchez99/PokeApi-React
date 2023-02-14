
import {  useState, useEffect } from 'react';

function Jugar(){
    var [nombres, setNombres] = useState([]);
    var [imagenes, setImagenes] = useState([]);

    useEffect ( ()=> detalle(), []);
  
      function detalle(){
        fetch("https://pokeapi.co/api/v2/evolution-chain/"+Math.floor(Math.random()*350))
        .then((response) => response.json())  
        .then((datos) => { 

          console.log(datos.chain.species.name);
          console.log(datos.chain.evolves_to[0].species.name);
          console.log(datos.chain.evolves_to[0].evolves_to[0].species.name);
          // setPokemonDetalleLista(pokemonDetalleLista = datos);
          // setImagen(imagen = datos.sprites.front_default);
          // console.log(pokemonDetalleLista);
          fetch("https://pokeapi.co/api/v2/pokemon/"+datos.chain.species.name)
          .then((response) => response.json())  
          .then((evolucion1) => { 
            // console.log(evolucion1);
            console.log(evolucion1.name);
            // console.log(evolucion1.sprites.other.home.front_default)
            setNombres([...nombres,evolucion1.name]);
            // setImagenes([...imagenes,evolucion1.sprites.other.home.front_default]);
            console.log(nombres);
            // console.log(pokemonDetalleLista);
            if (datos.chain.evolves_to.length>0)
            fetch("https://pokeapi.co/api/v2/pokemon/"+datos.chain.evolves_to[0].species.name)
          .then((response) => response.json())  
          .then((evolucion2) => { 
            // console.log(evolucion2);
            console.log(evolucion2.name);
            // console.log(evolucion2.sprites.other.home.front_default)
            setNombres([...nombres,evolucion2.name]);
            // setImagenes([...imagenes,evolucion2.sprites.other.home.front_default]);
            console.log(nombres);
            console.log("2 console");
            
          });
            
          });
          // fetch("https://pokeapi.co/api/v2/pokemon/"+datos.chain.evolves_to[0].species.name)
          // .then((response) => response.json())  
          // .then((evolucion2) => { 
          //   // console.log(evolucion2);
          //   console.log(evolucion2.name);
          //   // console.log(evolucion2.sprites.other.home.front_default)
          //   setNombres([...nombres,evolucion2.name]);
          //   // setImagenes([...imagenes,evolucion2.sprites.other.home.front_default]);
          //   console.log(nombres);
            
          // });
          // fetch("https://pokeapi.co/api/v2/pokemon/"+datos.chain.evolves_to[0].evolves_to[0].species.name)
          // .then((response) => response.json())  
          // .then((evolucion3) => { 
          //   // console.log(evolucion3);
          //   console.log(evolucion3.name);
          //   // console.log(evolucion3.sprites.other.home.front_default)
          //   setNombres([...nombres,evolucion3.name]);
          //   // setImagenes([...imagenes,evolucion3.sprites.other.home.front_default]);
          //   console.log(nombres);
          //   // console.log(pokemonDetalleLista);
            
          // });
          
        });
      }
      return (<>
        {
          nombres.map((nombre)=>{
            return <><h1 key={nombre}>{nombre}</h1></>
          })
        }

{
          imagenes.map((imagen)=>{
            return<><img key={imagen} src={imagen}></img></>
          })
        }
      
      </>)
}


export default Jugar;
