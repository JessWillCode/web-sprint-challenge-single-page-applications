import React from "react";

export default function Order(props) {
    const { details } = props
    if(!details) {
        return <h3>Fetching your Order...Thanks again for Choosing us!</h3>
    }

    return(
        <div className='order container'>
            <h2>Here's your Order: </h2>
            <p>Name: {details.name}</p>
            <p>Size: {details.size}</p>
            {
                !!details.topping && !!details.toppings.length &&
                <div>
                    Toppings:
                    <ul>
                    {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}    
                    </ul> 
                </div>       
            }
            <p>Special Instructions: {details.special}</p>
        </div>
    )
}