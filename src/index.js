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
    **<Route path="*" element={<h1>404</h1>}></Route>**
  </Routes>

</BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
