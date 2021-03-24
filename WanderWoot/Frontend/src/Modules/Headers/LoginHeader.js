import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import cookie from 'react-cookies';

import '../../../src/style.css';

class LoginHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userLoggedIn: false,
      userLoginError: false,
      userErrorMessage: "",
      isTraveller:this.props.isTraveller,
      isOwner:this.props.isOwner
    };

    this.submitLogin = this.submitLogin.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
  }



  submitLogin = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.defaults.withCredentials = true;
    axios.post("http://localhost:8000/login", data).then(response => {
      console.log("Status Code : ", response.status);
    if(response.status===200){
      if(response.data.success){

        this.setState({
            userLoggedIn: true,
            userLoginError: false,
            userErrorMessage: ""
          });
        }else{
          this.setState({
            userLoggedIn: false,
            userLoginError: true,
            userErrorMessage: response.data.error
          });
        }
    }else{
        this.setState({
          userLoggedIn: false,
          userLoginError: true,
          userErrorMessage: response.data.err
          });
          console.log(response);
    }

    }).catch(err =>{
        this.setState({
          userLoggedIn: false,
          userLoginError: true,
          userErrorMessage: "An Error Occoured"
          });

    });
  };




  emailChangeHandler = e => {
    this.setState({
      email: e.target.value
    });
  };
  passwordChangeHandler = e => {
    this.setState({
      password: e.target.value
    });
  };

  render() {
    let redirectVar = null;
    console.log(cookie.load('email'));
    if(cookie.load('email')){
      if(this.state.isTraveller){
      redirectVar = <Redirect to= "/TravelDash"/>
      }else if(this.state.isOwner){
        redirectVar = <Redirect to= "/OwnerDash"/>
      }
  }else{
    if (this.state.userLoggedIn) {
      if(this.state.isTraveller){
        redirectVar = <Redirect to= "/TravelDash"/>
        }else if(this.state.isOwner){
          redirectVar = <Redirect to= "/OwnerDash"/>
        }    }
  }
    return (
  <div className="login-box">
                {redirectVar}
                <h1>Login to WanderWoot</h1>
        <h5 className="roboFontLight">Need an Account? <a href="/SignUp">Sign Up</a></h5>
        <div className="text-left somePadding">
                  {this.state.userLoginError ? (
                          <div className="alert alert-danger"  role="alert">
                      {this.state.userErrorMessage}
                      </div>      ) : (null)}</div>
        <div className="textbox">
          <i className="fas fa-user"></i>
        <input type="email" onChange={this.emailChangeHandler}  name="email" aria-describedby="emailHelp" placeholder="Email address" required />
        </div>

        <div className="textbox">
          <i className="fas fa-lock"></i>
        <input type="password" onChange={this.passwordChangeHandler} name="password" placeholder="Password" required />
        </div>

        <input type="submit" onClick={this.submitLogin} className="btnLogin" value="Sign in"/>
    
  </div>

    );
  }
}

export default LoginHeader;
