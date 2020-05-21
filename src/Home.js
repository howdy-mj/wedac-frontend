import React, { Component } from "react";
import HomeNav from "./component/HomeNav/HomeNav";
import Main from "./pages/Main/Main";
import HomeFooter from "./component/HomeFooter/HomeFooter";
// import Footer from "./component/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <HomeNav />
        <Main />
        <HomeFooter />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
