import "./Car.css";
import Pricing from './Pricing';
import Details from './Details';

const Car = (props) => {
    return(
      <div className="Car">
        <img src={props.img}></img>
        <h1>{props.name}</h1>
        <Pricing rrp = {props.rrp} price = {props.price}/>
        <Details type = {props.type} desc = {props.desc}/>
        <p className="New">BRAND NEW - IN STOCK</p>
      </div>
    )
}

export default Car;