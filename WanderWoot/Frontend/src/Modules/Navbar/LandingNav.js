import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

import cookie from "react-cookies";

class LandingNav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      LoginClicked: false,
      OwnerLoginClicked: false
    };
  }

  onListPropertiesClicked(e) {
    e.preventDefault();
  }

  onLogoutClickedListener = () => {
    cookie.remove("email");
  };

  render() {
    let Listing1 = "";
    let LoginStatus = "";
    let loggedinEmail = "";
    let name = "";
    if (!cookie.load("email")) {
      Listing1 = "Login";
      LoginStatus = "Login";
    } else {
      loggedinEmail = cookie.load("email");
      name = loggedinEmail.split("@", 1);
      Listing1 = name + "'s Dashboard";
      LoginStatus = "Logged in";
    }

    let redirectVar = null;
    if (this.state.LoginClicked) {
      redirectVar = <Redirect to="/Login" />;
    }

    let loginsitem = "";

    if (LoginStatus == "Logged in") {
      loginsitem = (
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle smallNegetiveMarginUp"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            href=""
          >
            &#128100; {Listing1}
          </a>
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <a
              href=""
              onClick={this.onLogoutClickedListener}
              className="nav-link dropdown-item"
              style={{ color: "black" }}
            >
              Logout
            </a>
          </div>
        </li>
        //
      );
    } else {
      loginsitem = (
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <a
            className="nav-link  smallNegetiveMarginUp"
            role="button"
            href="/Login"
          >
            &#128100; {Listing1}
          </a>
        </div>
      );
    }

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        {" "}
        {redirectVar}
        <a className="navbar-brand">
          <img
            width="130"
            height="130"
            src={"./img/WanderWoot_logo.jpg"}
            className="img-fluid navButtonCursor"
            alt=""
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <a
              className="nav-link  smallNegetiveMarginUp"
              role="button"
              href="/Login"
            >
              &hearts; My Trips
            </a>
            {loginsitem}
            <li className="nav-item">
              <br />
              <Link to="/OwnerLogin">
                <button className="roundcornerbutton WhiteButtonTextBlue smallNegetiveMarginUp navButtonCursor">
                  List Your Property
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default LandingNav;
