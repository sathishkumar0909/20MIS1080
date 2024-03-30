import './content.css'
export default function Content(props){
    return(
        <div>
            <div className='cardholder'>
            <div className='Card'>
                <img src="./logo192.png"/>
                <p>{props.Name} ({props.Rating}), Available:{props.Availability}</p>
                <p>Company: {props.Company}, Category: {props.Category}</p>
                <p>Price : ${props.Price},  Discount: {props.Discount}%</p>
            </div>
            </div>
        </div>
    )
}