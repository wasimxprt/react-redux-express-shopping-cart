import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/scss/main.scss';
import Home from './components/Home';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
