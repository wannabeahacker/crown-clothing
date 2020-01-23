import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";

import "./App.css";
import "./pages/homepage/homepage.styles.scss";

class App extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
