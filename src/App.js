import React from 'react';
import car1 from './car1.png';
import car2 from './car2.png';
import car3 from './car3.png';
import car4 from './car4.png';
import Car from './components/Car';
import './App.css';

function App() {
  return (
    <div className = "App">
    <h1>Latest brand new car deals</h1>
    <h2>View more deals</h2>
      <div className = "Carcontainers">
        <Car name="Fiat" rrp = {14745} price = {11790} img={car1} id="car1"/>
        <Car name="KIA" rrp = {18850} price = {1233} img={car2} id="car2"/>
        <Car name="Audi" rrp = {1231} price = {1233} img={car3} id="car3"/>
        <Car name="Suzuki" rrp = {1231} price = {1233} img={car4} id="car4"/>
      </div>
    </div>
  );
}

export default App;