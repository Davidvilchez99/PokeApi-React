import './Cabecera.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

  export default function Cabecera() {
    const navigate = useNavigate();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
        setLogueado(estaLogueado = true);
        setCorreo(correo = user.email);
        console.log("logueado")
        } else {
         setLogueado(estaLogueado = false);
          console.log("no logueado")
        }
      });
  }, []);

    var [estaLogueado, setLogueado] = useState("");
    var [correo, setCorreo] = useState("");


    function logOut() {
      auth.signOut().then(() => {
        console.log("saliste")
        navigate("/");
      }).catch((error) => {
        console.log("no saliste")
      });
    }


    if (estaLogueado == true) {
      return <>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <Link class="navbar-brand" to="">DVA PokeApi</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <Link class="nav-link active" to="">Home</Link></li>
        <li class="nav-item">
        <Link class="nav-link active" to="pokemons">Pokemons</Link></li>
        <li class="nav-item">
        <Link class="nav-link active" to="jugar">Jugar</Link></li>
        <li class="nav-item">
        <Link class="nav-link active" to="marcador">Marcador</Link></li>
        <li class="nav-item">
        <Link class="nav-link active" to="" onClick={logOut}>Salir ({correo})</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </>
  }
  else{
    return <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
        <Link class="navbar-brand" to="">DVA PokeApi</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link class="nav-link active" to="">Home</Link></li>
        <li class="nav-item">
        <Link class="nav-link active" to="pokemons">Pokemons</Link></li>
        <li class="nav-item">
        <Link class="nav-link active" to="login">Login</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </>
  }
  }
  
