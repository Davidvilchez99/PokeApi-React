import './navigation.css';
import { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from "firebase/auth";
import { db } from '../firebaseConfig.js';
import { collection, getDocs, addDoc } from "firebase/firestore";
function Login() {
    var [usuario, setUsuario] = useState("");
    var [contraseña, setContraseña] = useState("");
    function enviar() {
        signInWithEmailAndPassword(auth, usuario, contraseña)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    function googleAuth() {
        signInWithPopup(auth, new GoogleAuthProvider())
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const email = userCredential.user.email;
          const escribeDatos = async () => {   
            try {
                const docRef = await addDoc(collection(db, "listaDatos"), {
                  usuario: email,
                    puntuacion: 0    
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
        escribeDatos();
          // this.emailUser = userCredential.user.email;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    return <>
        <h1>Login</h1>
        <label>Correo</label><input value={usuario} onChange={e => setUsuario(e.target.value)} type="text" />
        <label>Contraseña</label><input value={contraseña} onChange={e => setContraseña(e.target.value)} type="text" />
        <button onClick={enviar}>Ingresar</button><br></br>
        <p>No tienes cuenta 
            <Link to="/registrarse"><a class="nav-link active" aria-current="page">Createla aqui</a></Link>
        </p><br></br>
        <p onClick={googleAuth}>Registrarte con google</p>
    </>
}


export default Login;
