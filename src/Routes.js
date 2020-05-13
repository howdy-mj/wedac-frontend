import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Balance from "./pages/Balance/Balance";
import History from "./pages/History/History";
import PageNotFound from "./pages/PageNotFount/PageNotFound";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/history" component={History} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
