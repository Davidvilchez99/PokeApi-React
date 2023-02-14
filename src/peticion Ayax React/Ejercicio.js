// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'

const Alert = (props) => {
  if(props.show === false){
      return null;
  }
  else{
      return <>
      <Alert text="Are you sure?" show={false}/>
      <Alert text="Are you sure?" show={true}/></>
  }
};

export default function Ejercicio4_0() {
    return (
      <>
        <Alert/>
      </>
    );
    
  }
  
