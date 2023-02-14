import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cabecera from './cabecera/Cabecera.js';
import Ejercicio1_2 from './ejercicio 1.2/Ejercicio.js';
import Ejercicio1_3 from './ejercicio 1.3/Ejercicio.js';
import Ejercicio1_4 from './ejercicio 1.4/Ejercicio.js';
import Ejercicio3_1 from './ejercicio 3.1/Ejercicio.js';
import Ejercicio3_3 from './ejercicio 3.3/Ejercicio.js';
import Ejercicio3_4 from './ejercicio 3.4/Ejercicio.js';
import Ejercicio3_5 from './ejercicio 3.5/Ejercicio.js';
import Ejercicio4_0 from './ejercicio 4.0/Ejercicio.js';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Cabecera from './cabecera/Cabecera.js';
import  Navigation from './navigation/navigation.js'; 
import  PokemonVista from './detallePokemonVista/Ejercicio.js'; 
import  Jugar from './jugar/jugar'; 
import  Home from './home/home.js'; 

import { Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <BrowserRouter>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">DVA Pokemons</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/"><a class="nav-link active" aria-current="page">Home</a></Link></li>
        <li class="nav-item">
        <Link to="/pokemons"><a class="nav-link active" aria-current="page">Pokemons</a></Link></li>
        <li class="nav-item">
        <Link to="/jugar"><a class="nav-link active" aria-current="page">Juega</a></Link></li>
      </ul>
    </div>
  </div>
</nav>

  {/* <div id="boton">
      <Link to="/"><button id="search">Inicio</button></Link>
      <Link to="/pokemons"><button id="search">Pokemons</button></Link>
      <Link to="/jugar"><button id="search">Jugar</button></Link>
  </div> */}
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/pokemons" element={<App />}></Route>
    <Route path="/jugar" element={<Jugar />}></Route>
    <Route path="/pokemonVista/:id" element={<PokemonVista />}></Route>
    **<Route path="*" element={<h1>404</h1>}></Route>**
  </Routes>
  {/* <Link to="/">Inicio</Link>
  <Link to="/pokemons">Pokemons</Link> */}

</BrowserRouter>
     {/* <App/> */}
   {/* <Cabecera />
    <App />
    <Ejercicio1_2/>
    <Ejercicio1_3/>
    <Ejercicio1_4/>
    <Ejercicio3_1/>
    <Ejercicio3_3/>
    <Ejercicio3_4 title="Welcome to react"
    description="React is the most popular rendering library in the world"
    buttonLabel="Go to the official website"
    buttonURL="https://reactjs.org/"/>
    <Ejercicio3_5 text="OMG! Something really bad has happended!"/>
    <Ejercicio4_0/>

  </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
