import "./Pricing.css";

// const PriceDetails = (props) => {
//     return(
//     <div className="Prices">
//         <p>{props.RRP}</p>
//         <p>{props.RRPFig}</p>
//         <p>{props.price}</p>
//         <p>{props.save}</p>
//         <p>{props.saveFig}</p>
//     </div>
//     )
// }

// <PriceDetails RRP = "RRP" RRPFig = {14745} price = {11790} save = "Save" saveFig = {2955}/> 

const Pricing = (props) => {
    return(
        <div>
            <RRP rrp = {props.rrp}/>
            <Price price = {props.price}/>
            <Saving rrp = {props.rrp} price = {props.price}/>
        </div>
    )
}

const RRP = (props) => {
    return(
        <div>
            <h3>RRP</h3>
            <p>£{props.rrp}</p>
        </div>
    )
}

const Price = (props) => {
    return(
        <div>
            <h3>Price</h3>
            <p>£{props.price}</p>
        </div>
    )
}

const Saving = (props) => {
    return(
        <div>
            <h3>Saving</h3>
            <p>£{props.rrp - props.price}</p>
        </div>
    )
}



export default Pricing;