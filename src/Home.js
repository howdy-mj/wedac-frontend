import React, { Component } from "react";
import HomeNav from "./component/HomeNav";
import Main from "./pages/Main/Main";
import HomeFooter from "./component/HomeFooter";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HomeNav />
        <Main />
        <HomeFooter />
      </div>
    );
  }
}

export default Home;
