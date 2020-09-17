import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './assets/scss/main.scss';
import Home from './components/Home';
import Cart from './components/Cart';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Spinner from './components/Spinner';
import { useSelector } from 'react-redux';

function App() {
  const isLoading = useSelector(state=>state.loading.isLoading);
  return (
    <BrowserRouter>
      <div className="App">
      {isLoading ? <Spinner /> : null}
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
