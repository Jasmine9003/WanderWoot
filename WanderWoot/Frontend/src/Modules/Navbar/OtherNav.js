import React, { Component } from "react";
import "react-dates/initialize";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

class OtherNav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      LoginClicked: false,
      OwnerLoginClicked: false
    };
  }

  onLogoutClickedListener = () => {
    cookie.remove("email");
  };

  render() {
    let email = cookie.load("email");
    let redirectVar = null;
    if (this.state.OwnerLoginClicked) {
      redirectVar = <Redirect to="/OwnerLogin" />;
    }

    return (
      <nav
        className="navbar  navbar-expand-lg navbar-light fixed-top   bg-white "
        id="loginNav"
        style={{ background: "#ffffff" }}
      >
        {redirectVar}
        <a className="navbar-brand" href="/">
          <img
            src={"./img/WanderWoot_logo_Blue.jpg"}
            className="img-fluid"
            alt=""
          />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"></li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle "
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              href=""
            >
              {email}
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
          <li className="nav-item">
            <br />
            <Link to="/">
              <button className="roundcornerbutton WhiteButtonTextBlue  navButtonCursor">
                Search Properties
              </button>
            </Link>
          </li>

          
          <li className="nav-item">
            <br />
            <Link to="/TravelDash">
              <button className="roundcornerbutton WhiteButtonTextBlue  navButtonCursor">
                My Trips
              </button>
            </Link>
          </li>

          <li className="nav-item">
            <br />
            <Link to="/OwnerLogin">
              <button className="roundcornerbutton WhiteButtonTextBlue  navButtonCursor">
                Manage Properties
              </button>
            </Link>
          </li>

          <li className="nav-item">
            <a className="navbar-brand">
              <img
                width="130"
                height="130"
                src={"./img/WanderWoot_logo.jpg"}
                className="img-fluid navButtonCursor"
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default OtherNav;
