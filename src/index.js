import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Slider from './Slider';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Cookies from './Cookies';
import Cakes from './Cakes';
import Donuts from './Donuts';
import Bread from './Bread';
import Brownies from './Brownies';
import FastFood from './FastFood';
import SignIn from './SignIn';

// render header here......................................................................
ReactDOM.render(

  <BrowserRouter>
  <Header />
  </BrowserRouter>,
  document.getElementById('header')
);

// rendering cards from here.............................................................
ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/Cookies.js" component={Cookies} />
    <Route exact path="/Cakes.js" component={Cakes} />
    <Route exact path="/Donuts.js" component={Donuts} />
    <Route exact path="/Bread.js" component={Bread} />
    <Route exact path="/Brownies.js" component={Brownies} />
    <Route exact path="/FastFood.js" component={FastFood} />
    <Route exact path="/SignIn.js" component={SignIn} />
    <Route exact path="" component={App} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('body')
  );
  
  
  // render slider from here...............................................................
ReactDOM.render(
  <BrowserRouter>
    <Slider />
  </BrowserRouter>,
  document.getElementById('slider')
  );

  // render footer here.....................................................................
  ReactDOM.render(

    <BrowserRouter>
    <Footer />
    </BrowserRouter>,
    document.getElementById('footer')
  );

