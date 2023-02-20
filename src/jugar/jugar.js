import './jugar.css'
import { useState, useEffect } from 'react';
import ListaDatos from "../accesoDB/Ejercicio";
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { db } from '../firebaseConfig.js';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { puntuacion} from '../accesoDB/Ejercicio';

function Jugar() {
  var [estaLogueado, setLogueado] = useState("");
  var [correo, setCorreo] = useState("");
  var [nombres, setNombres] = useState([]);
  var [imagenes, setImagenes] = useState([]);
  var [pokemon, setPokemon] = useState([]);
  var [puntuacion, setPuntuacion] = useState([]);
  var [datosUsuario, setDatosUsuario] = useState([]);
  var [userId, setUserId] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
      setLogueado(estaLogueado = true);
      setCorreo(correo = user.email);
      } else {
       setLogueado(estaLogueado = false);
      }
    });
  }, []);
  useEffect(() => detalle(),
  []);
  function detalle() {
    var aux = new Array();
    var aux2 = new Array();
    fetch("https://pokeapi.co/api/v2/evolution-chain/" + Math.floor(Math.random() * 350))
      // fetch("https://pokeapi.co/api/v2/evolution-chain/2")
      .then((response) => response.json())
      .then((datos) => {

        // console.log(datos.chain.species.name);
        // console.log(datos.chain.evolves_to[0].species.name);
        // console.log(datos.chain.evolves_to[0].evolves_to[0].species.name);
        // setPokemonDetalleLista(pokemonDetalleLista = datos);
        // setImagen(imagen = datos.sprites.front_default);
        // console.log(pokemonDetalleLista);
        fetch("https://pokeapi.co/api/v2/pokemon/" + datos.chain.species.name)
          .then((response) => response.json())
          .then((evolucion1) => {
            // console.log(evolucion1);
            // console.log(evolucion1.sprites.other.home.front_default)
            // setNombres([...nombres,evolucion1.name]);
            aux.push(evolucion1.name);
            aux2.push(evolucion1.sprites.other.home.front_default);

            
            // setImagenes([...imagenes,evolucion1.sprites.other.home.front_default]);
            // console.log(pokemonDetalleLista);
            if (datos.chain.evolves_to.length > 0) {
              fetch("https://pokeapi.co/api/v2/pokemon/" + datos.chain.evolves_to[0].species.name)
                .then((response) => response.json())
                .then((evolucion2) => {
                  // console.log(evolucion2);
                  // console.log(evolucion2.sprites.other.home.front_default)
                  // setNombres([...nombres,evolucion2.name]);
                  aux.push(evolucion2.name);
                  aux2.push(evolucion2.sprites.other.home.front_default);

                  // setImagenes([...imagenes,evolucion2.sprites.other.home.front_default]);
                  if (datos.chain.evolves_to[0].evolves_to.length > 0) {
                    fetch("https://pokeapi.co/api/v2/pokemon/" + datos.chain.evolves_to[0].evolves_to[0].species.name)
                      .then((response) => response.json())
                      .then((evolucion3) => {
                        // console.log(evolucion3);
                        // console.log(evolucion3.sprites.other.home.front_default)
                        // setNombres([...nombres,evolucion3.name]);
                        aux.push(evolucion3.name);
                        aux2.push(evolucion3.sprites.other.home.front_default);
                        // setImagenes([...imagenes,evolucion3.sprites.other.home.front_default]);
                        // console.log(pokemonDetalleLista);
                        setNombres(aux);
                        setImagenes(aux2);
                      });
                  }else{
                    setNombres(aux);
                    setImagenes(aux2);
                  }
                }
                )}else{
                  setNombres(aux);
                  setImagenes(aux2);
                };
          });
});
  }
  function nuevoJuego(){
    detalle();
    setPokemon(pokemon = "");
    document.getElementById('img0').style.filter = 'contrast(0%)';
    document.getElementById('img0').style.filter = 'brightness(0%)';
    document.getElementById('img1').style.opacity = 0.2;
    document.getElementById('img2').style.filter = "contrast(0%)";
    document.getElementById('img2').style.filter = 'brightness(0%)';
  }
  function adivinar(){
    console.log(nombres);
    for (let index = 0; index < nombres.length; index++) {
      if (nombres[index] == pokemon) {
        document.getElementById('img'+index).style.filter = 'contrast(100%)';
        document.getElementById('img'+index).style.filter = 'brightness(100%)';
        document.getElementById('img'+index).style.opacity = 1;
        setPokemon(pokemon = "");
        const usuarioRef = doc(db, "listaDatos", userId);
        updateDoc(usuarioRef, {
            puntuacion: puntuacion + 1,
        });
        
        leerDatosFirestore();
      }else{
      }
    }
  }
    const leerDatosFirestore = async () => {
      await getDocs(collection(db, "listaDatos"))
          .then((querySnapshot)=>{               
              const listado = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
                  setDatosUsuario(datosUsuario = listado.filter((recordatorio) => recordatorio.usuario === correo));
                    setPuntuacion(puntuacion = datosUsuario[0].puntuacion);
                    setUserId(userId = datosUsuario[0].id);

              // console.log(todos, newData);
          })}
          useEffect(() => leerDatosFirestore(),
          []);

  return (
    <>
      {/* {
        nombres.map((nombre, index) => {
          return <><h1 key={index}>{nombre}</h1></>
        })
      }

      {
        imagenes.map((imagen, index) => {
          return <><img key={index} src={imagen}></img></>
        })
      } */}
      <div id="sectionJuego">
      {
        imagenes.map((imagen, index) => {
          return (
          <div className='divJuego'>
            <img id={'img'+index} key={index} src={imagen}></img>
          </div>
          )
        })
      }
      </div>
      <div><label>¿Dime uno de los tres pokemons?</label><input id="input" type="text" onChange={e=>setPokemon(e.target.value)} value={pokemon}/>
      <button id='button' onClick={adivinar}>Adivinar</button><button id='button2' onClick={nuevoJuego}>Nuevo juego</button></div>
      <div><label>Puntuación: {puntuacion}</label></div>



    </>
  )
}


export default Jugar;
