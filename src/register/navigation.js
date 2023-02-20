import './navigation.css';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';
import { db } from '../firebaseConfig.js';
import { collection, getDocs, addDoc } from "firebase/firestore";

function Register(){
    var [usuario, setUsuario] = useState("");
    var [contraseña, setContraseña] = useState("");
    function enviar() {
        createUserWithEmailAndPassword(auth, usuario, contraseña)
            .then((userCredential) => {
                console.log("usuario creado");
                const user = userCredential.user;
                const escribeDatos = async () => {   
                    try {
                        const docRef = await addDoc(collection(db, "listaDatos"), {
                          usuario: usuario,
                            puntuacion: 0    
                        });
                        console.log("Document written with ID: ", docRef.id);
                      } catch (e) {
                        console.error("Error adding document: ", e);
                      }
                }
                escribeDatos();
            })
            .catch((error) => {
                console.log("no creado");
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return <>
        <h1>Register</h1>
        <label>Correo</label><input value={usuario} onChange={e => setUsuario(e.target.value)} type="text" />
        <label>Contraseña</label><input value={contraseña} onChange={e => setContraseña(e.target.value)} type="text" />
        <button onClick={enviar}>Registrarse</button>
    </>
}


export default Register;
