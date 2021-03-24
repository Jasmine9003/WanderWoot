import React, { Component } from "react";
import LandingHeader from "../../Modules/Headers/LandingHeader";
import LandingNav from "../../Modules/Navbar/LandingNav";
import Chatbot from "./Chatbot";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingNav />

        <LandingHeader />
        <Chatbot />
      </div>
    );
  }
}
export default LandingPage;
