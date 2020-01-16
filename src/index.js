import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import App from "./components/App";
import './reset.css';
import Products from "./components/Products/Products";

ReactDOM.render(
  <div>
    <Provider store={store}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Products}>
            </Route>
            <Route path="/produto/:id" component={ProductDetail} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
