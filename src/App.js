import React from 'react';
import car1 from './car1.png';
import car2 from './car2.png';
import car3 from './car3.png';
import car4 from './car4.png';
import Car from './Car';
import './App.css';

function App() {
  return (
    <div className = "App">
    <h1>Latest brand new car deals</h1>
    <h2>View more deals</h2>
      <div className = "Carcontainers">
        <Car name="Fiat" img={car1} id="car1"/>
        <Car name="KIA" img={car2} id="car2"/>
        <Car name="Audi" img={car3} id="car3"/>
        <Car name="Suzuki" img={car4} id="car4"/>
      </div>
    </div>
  );
}

export default App;