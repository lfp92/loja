import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import App from '../App/App';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/produto/:id" component={ProductDetail} />
        <App />
      </Switch>
    </Router>
  );
}

export default Routes;
