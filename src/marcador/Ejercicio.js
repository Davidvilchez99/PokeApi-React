import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from '../firebaseConfig.js';
import { useState, useEffect } from 'react';
import { doc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebaseConfig';


export default function Marcador() {
  const [recordatorios, setRecordatorios] = useState([]);
  const leerDatosFirestore = async () => {
    await getDocs(collection(db, "listaDatos"))
        .then((querySnapshot)=>{               
            const listado = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));

            setRecordatorios(listado.sort((a,b)=>b.puntuacion-a.puntuacion));                
        })
   
}
useEffect(()=>{
  leerDatosFirestore();

}, []);

    return (
        <>
        <table id="puntuacionTabla">
          <tr>
            <th>Nombre</th>
            <th>Puntuacion</th>
          </tr>
          {recordatorios.map((recordatorio) => (
            <tr>
              <td>{recordatorio.usuario}</td>
              <td>{recordatorio.puntuacion}</td>
            </tr>
          ))}
        </table>
      </>
    );
    
  }
  
