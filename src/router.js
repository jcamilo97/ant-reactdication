// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import About from './components/About';
import Contact from './components/Contact';
import Page404 from './components/Page404';

// Container
import Home from './components/Home';
//import Library from './containers/Library';

const Routes = () =>
  <App>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />    
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;
//<Route exact path="/library/:id" component={Library} />
// <Route exact path="/library" component={Library} />

export default Routes;