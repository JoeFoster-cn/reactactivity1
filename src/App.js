import React from 'react';
import car1 from './car1.png';
import car2 from './car2.png';
import car3 from './car3.png';
import car4 from './car4.png';
import Car from './components/Car';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './App.css';

class App extends React.Component {

state = {
  cars: [
    {id: 1, rrp: 14745, price: 11790, type: "Fiat 500 1.0 MHEV Lounge (s/s) 3dr", desc: "3 door Manual Petrol Hatchback", img: car1},
    {id: 2, rrp: 18850, price: 17342, type: "KIA Ceed 1.0 T-GDi ECO 2 (s/s) 5dr", desc: "5 door Manual Petrol Hatchback", img: car2},
    {id: 3, rrp: 88055, price: 76588, type: "Audi Q8 3.0 TDI V6 50 Vorsprung Tiptronic quattro (s/s) 5dr", desc: "5 door Automatic Diesel SUV", img: car3},
    {id: 4, rrp: 17214, price: 15214, type: "Suzuki Ignis 1.2 Dualjet SHVS SZ5 ALLGRIP (s/s) 5dr", desc: "5 door Manual Hybird - Petrol/Electric Hatchback", img: car4}
  ]
}
  render() {
    const eachCar = this.state.cars.map((car) => {
      return <Car key = {car.id} rrp = {car.rrp} price = {car.price} type = {car.type} desc = {car.desc} img = {car.img}/>
    });

    return (
      <div className="App">
        <h1 className="Title">Latest brand new car deals</h1>
        <h2 className="Deals">View more deals <FontAwesomeIcon icon={ faArrowRight }/></h2>
        <div className="Carcontainer">
          {eachCar}
        </div>
      </div>
    );
  }
}

export default App;