import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from "axios";
import * as yup from 'yup';

import HomePage from './Components/HomePage';
import PizzaForm from './Components/PizzaForm';
import Order from './Components/Order';
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
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
    .then(res => {
      setOrders(res.data.data);
    }).catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders')
    .then(res => {
      setOrders([res.data.data, ...orders ]);
    }).catch(err => console.log(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: '' }))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value 
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      special: formValues.special.trim(),
      toppings: ['pepperoni', 'sausage', 'black olives', 'banana peppers', 'chicken', 'ham', 'pineapple'].filter(topping => !!formValues[topping])
    }
    postNewOrder(newOrder);
  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])
 
  return (
    <>
      <div className='container'>
        <h1>Bloomin' Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <Link to='/help'>Help</Link>
          </div>

        <Switch>
          <Route path='/pizza/confirmation'>
            <Order details={orders}/>
          </Route>
          <Route path='/pizza'>
            <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            errors={formErrors}
            disabled={disabled}
            />

            {
              orders.map(order => {
                return (
                  <Order key={order.id} details={order} />
                )
              })
            }

          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </>
  );
};
export default App;
