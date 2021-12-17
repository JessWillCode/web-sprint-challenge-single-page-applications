import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HomePage(){
    const history = useHistory();

    const routeToPizza = () => {
        history.push('/pizza');
    }

    return (
        <div className='home-wrapper'>
            <img 
            className='pizza-image'
            src='..../assets/pizza.jpg'
            alt='This is a pizza'
            />
            <button onClick={routeToPizza} className='pizzaBtn'>Pizza?</button>
        </div>
    )
}