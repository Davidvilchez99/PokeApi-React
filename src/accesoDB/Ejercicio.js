import { collection, getDocs, addDoc } from "firebase/firestore";
import {db} from '../firebaseConfig.js';
import { useState, useEffect } from 'react';


export default function ListaDatos() {
  const [recordatorios, setRecordatorios] = useState([]);

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
      recordatorios.map((recordatorio=>
        <p key={recordatorio.name}>{recordatorio.name}</p>))
    }
      </>
    );
    
  }
  
