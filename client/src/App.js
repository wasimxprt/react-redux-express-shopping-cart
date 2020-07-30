import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './main.scss';
import Home from './components/Home';
import Cart from './components/Cart';



function App() {

  //const prpoducts = useSelector(state => state.)
  


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
