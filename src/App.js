import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from "axios";
import * as yup from 'yup';

import HomePage from './Components/HomePage';
import PizzaForm from './Components/PizzaForm';
import Confirmation from './Components/Confirmation';
import schema from './validation/schema';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  blackOlives: false,
  bananaPeppers: false,
  chicken: false,
  ham: false,
  pineapple: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  special: ''
}

const initialOrders = []
const initialDisabled = true;

const App = () => {
  const [pizzas, setPizzas] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
    .then(res => {
      console.log(res)
    }).catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders')
    .then(res => {
      console.log(res)
    }).catch(err => console.log(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const formSubmit = () => {
    const newOrder = {
      name: '',
      size: '',
      special: '',
      toppings: ['pepperoni', 'sausage', 'black olives', 'banana peppers', 'chicken', 'ham', 'pineapple'].filter(topping => !!formValues[topping])
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    getOrders()
  }, [])
 
  return (
    <>
      <h1>Bloomin' Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
        </div>

      <Switch>
        <Route path='/pizza/confirmation'>
          <Confirmation />
        </Route>
        <Route path='/pizza'>
          <PizzaForm />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
