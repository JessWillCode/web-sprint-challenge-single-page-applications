import React from "react";

export default function Order(props) {
    const { details } = props
    console.log(details);
    if(!details) {
        return <h3>Fetching your Order...Thanks again for Choosing us!</h3>
        
    }

    return(
        <div className='order container'>
            <h2>Congrats! Pizza is on the Way! </h2>
        </div>
     )
}