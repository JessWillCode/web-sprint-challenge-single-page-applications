import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './Components/HomePage';
import PizzaForm from './Components/PizzaForm';
import Confirmation from './Components/Confirmation';


const App = () => {
  return (
    <>
      <h1>Bloomin' Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/help'>Help</Link>
        </div>
      <div className='header-link'>
        <Link to='/pizza'>Pizza?</Link>
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
