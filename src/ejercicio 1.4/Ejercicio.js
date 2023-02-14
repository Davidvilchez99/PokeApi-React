// import './Cabecera.css';
// import Navigation from '../navigation/navigation.js'

const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Fredy Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>
];

const urlsInHTML = [
  <li class="nav-item">
    <a class="nav-link" href="#">Link to google.com</a>
  </li>,
  <li class="nav-item">
    <a class="nav-link" href="#">Link to facebook.com</a>
  </li>,
  <li class="nav-item">
    <a class="nav-link" href="#">Link to amazon.com</a>
  </li>
];

const content2 = <ul>{urlsInHTML}</ul>;

const content = <ul>{namesInHTML}</ul>;


export default function Ejercicio1_4() {
    return (
      <div id="myDiv">
            {content}

            <ul class="nav">
          {content2}
</ul>
      </div>
      

      
    );
  }
  
