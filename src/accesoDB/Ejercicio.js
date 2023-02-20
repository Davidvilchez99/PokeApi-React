import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from '../firebaseConfig.js';
import { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';


export default function ListaDatos() {
  const [recordatorios, setRecordatorios] = useState([]);
  var [estaLogueado, setLogueado] = useState("");
  var [correo, setCorreo] = useState("");
  var [puntuacion, setPuntuacion] = useState("");
  var [datosUsuario, setDatosUsuario] = useState([]);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //   setLogueado(estaLogueado = true);
  //   setCorreo(correo = user.email);
  //   setDatosUsuario(datosUsuario = recordatorios.filter((recordatorio)=>recordatorio.usuario === correo));
  //   } else {
  //    setLogueado(estaLogueado = false);
  //   }
  // });

  const leerDatosFirestore = async () => {
    await getDocs(collection(db, "listaDatos"))
        .then((querySnapshot)=>{               
            const listado = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setRecordatorios(listado);                
            // console.log(todos, newData);
        })
   
}
useEffect(()=>{
  leerDatosFirestore();

}, []);

  
  const escribeDatos = async () => {   
    try {
        const docRef = await addDoc(collection(db, "listaDatos"), {
          name: "hello",    
        });
        console.log("Document written with ID: ", docRef.id);
        leerDatosFirestore();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
    return (
      <>
      <button onClick={escribeDatos}>Escribe</button>
    {
        
        datosUsuario.map((recordatorio=>
        <>
        <p key={recordatorio.usaurio}>{recordatorio.usuario}</p>
        <p>{recordatorio.puntuacion}</p>
        </>
        ))
    }
      </>
    );
    
  }
  
