import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cabecera from './cabecera/Cabecera';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Cabecera from './cabecera/Cabecera.js';
import  PokemonVista from './detallePokemonVista/Ejercicio.js'; 
import  Jugar from './jugar/jugar'; 
import  Home from './home/home.js'; 
import  Login from './login/navigation';
import  Register from './register/navigation';
import { Link } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebaseConfig';
import { useState } from 'react';
import  Marcador from './marcador/Ejercicio.js';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
    <Cabecera />

  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/pokemons" element={<App />}></Route>
    <Route path="/jugar" element={<Jugar />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/registrarse" element={<Register />}></Route>
    <Route path="/pokemonVista/:id" element={<PokemonVista />}></Route>
    <Route path="/marcador" element={<Marcador />}></Route>
    **<Route path="*" element={<h1>404</h1>}></Route>**
  </Routes>

</BrowserRouter>
  </>
);

reportWebVitals();
