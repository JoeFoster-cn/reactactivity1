import "./Pricing.css";

const Pricing = (props) => {
    return(
        <div className="Pricing">
            <RRP rrp = {props.rrp}/>
            <Price price = {props.price}/>
            <Saving rrp = {props.rrp} price = {props.price}/>
        </div>
    )
}

const RRP = (props) => {
    return(
        <div className="RRP">
            <h3>RRP</h3>
            <p>£{props.rrp}</p>
        </div>
    )
}

const Price = (props) => {
    return(
        <div className="Price">
            <p>£{props.price}</p>
        </div>
    )
}

const Saving = (props) => {
    return(
        <div className="Save">
            <h3 className="saveTxt">Save</h3>
            <p className="Savings">£{props.rrp - props.price}</p>
        </div>
    )
}

export default Pricing;