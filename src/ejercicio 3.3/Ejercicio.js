// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'

const BootstrapCard = (props) => {
  return <div class="card">
    ...
      <h5 class="card-title">{props.title}</h5>
    ...
  </div>;
}



export default function Ejercicio3_3() {
    return (
      <>
      <BootstrapCard title="Paul Mccartney" />

//for Bob Dylan
<BootstrapCard title="Bob Dylan" /></>
    );
    
  }
  
