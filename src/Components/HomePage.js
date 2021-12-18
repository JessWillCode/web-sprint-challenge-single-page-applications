import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HomePage(){
    const history = useHistory()

    const routeToPizza = () => {
        history.push('/pizza');
    }

    return (
        <div className='home container'>
        <div 
        className='pizza-image'
        alt='This is a margherita pizza'
        />
        <button onClick={routeToPizza} id='order-pizza' className='pizzaBtn'>Pizza?</button>
        </div>
    )
}