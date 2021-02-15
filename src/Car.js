import "./Car.css";
import Pricing from './Pricing';

const Car = (props) => {
    return(
      <div className="Car">
        <img src={props.img}></img>
        <h1>{props.name}</h1>
        <Pricing />
      </div>
    )
}

export default Car;