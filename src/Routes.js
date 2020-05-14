import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Balance from "./pages/Balance/Balance";
import Wallet from "./pages/Wallet/Wallet";
import History from "./pages/History/History";
import PageNotFound from "./pages/PageNotFount/PageNotFound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import SignupEmail from "./pages/Signup/SignupEmail/SignupEmail";
import Exchange from "./pages/Exchange/Exchange";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/balance" component={Balance} />
          <Route exact path="/wallet" component={Wallet} />
          <Route exact path="/history" component={History} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/signupEmail" component={SignupEmail} />
          <Route path="/exchange" component={Exchange} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
