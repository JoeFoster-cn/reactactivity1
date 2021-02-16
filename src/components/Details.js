import "./Details.css";

const Details = (props) => {
    return(
        <div className="Details">
            <Type type = {props.type}/>
            <Desc desc = {props.desc}/>
        </div>
    )
}

const Type = (props) => {
    return(
        <div className="Type">
        <h3>{props.type}</h3>
        </div>
    )
}

const Desc = (props) => {
    return(
        <div className="Desc">
        <p>{props.desc}</p>
        </div>
    )
}

export default Details;