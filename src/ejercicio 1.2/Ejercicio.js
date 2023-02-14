// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'

const customer = {
  first_name: 'Bob',
  last_name: 'Dylan'
};

export default function Ejercicio1_2() {
    return (
      <div>
        <h1>{customer.first_name}</h1>
        <h1>{customer.last_name}</h1>
      </div>
    );
  }
  
