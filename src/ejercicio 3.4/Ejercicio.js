// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'



export default function Ejercicio3_4(props) {
    return (
      <div class="jumbotron m-5">
        <h1 class="display-4">{props.title}</h1>
        <p class="lead">{props.description}</p>
        <a class="btn btn-primary btn-lg" href={props.buttonURL} role="button">{props.buttonLabel}</a>
      </div>
    );
    
  }
  
