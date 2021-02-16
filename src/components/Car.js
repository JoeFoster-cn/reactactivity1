import "./Car.css";
import Pricing from './Pricing';
import Details from './Details';

const Car = (props) => {
    return(
      <div className="Car">
        <img src={props.img}></img>
        <h1>{props.name}</h1>
        <Pricing rrp = {props.rrp} price = {props.price}/>
        <Details/>
      </div>
    )
}

export default Car;