import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router";
import cookie from 'react-cookies';
import '../../../src/style.css';

class SignUpHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      lname: "",
      fname: "",
      userAdded: false,
      userAddingError: false,
      userAddingErrorMessage: ""
    };

    this.submitSignUp = this.submitSignUp.bind(this);
    this.fnameChangeHandler = this.fnameChangeHandler.bind(this);
    this.lnameChangeHandler = this.lnameChangeHandler.bind(this);
    this.emailChangeHandler = this.emailChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);

  }

  fnameChangeHandler = e => {
    this.setState({
      fname: e.target.value
    });
  };

  lnameChangeHandler = e => {
    this.setState({
      lname: e.target.value
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

  submitSignUp = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
      lname: this.state.lname,
      fname: this.state.fname
    };

    axios.defaults.withCredentials = true;
    axios.post("http://localhost:8000/addUserLight", data).then(response => {
      console.log("Status Code : ", response.status);
    if(response.status===200){
      if(response.data.success){

        this.setState({
            userAdded: true,
            userAddingError: false,
            userAddingErrorMessage: ""
          });
        }else{
          this.setState({
            userAdded: false,
            userAddingError: true,
            userAddingErrorMessage: response.data.error
          });
        }
    }else{
        this.setState({
            userAdded: false,
            userAddingError: true,
            userAddingErrorMessage: response.data.err
          });
          console.log(response);
    }

    }).catch(err =>{
        this.setState({
            userAdded: false,
            userAddingError: true,
            userAddingErrorMessage: "An Error occoured"
          });

    });
  };




  render() {
    let redirectVar = null;
    if(cookie.load('email')){
      redirectVar = <Redirect to= "/TravelDash"/>
  }else{
    if (this.state.userAdded) {
      redirectVar = <Redirect to="/TravelDash" />;
    }
  }
    return (
      <div style={{width:'450px'}} className="login-box" >
        {redirectVar}
        <h1>Sign up for Wanderwoot</h1>
        <div>
            <div className=" increaseHeight d-flex ">
              <div className="mx-auto text-center">
               
                <br />
                <h5 className="roboFontLight">
                  Already have an account? <a href="/Login">Log in</a>
                </h5>
                <br />
                <div className="text-left somePadding">
                
                {this.state.userAddingError ? (
                    <div className="alert alert-danger"  role="alert">
                 {this.state.userAddingErrorMessage}
                </div>      ) : (null)}</div>

                  
                    <div className="row">
                      <div className="col-6">
                        <div className="textbox">
                          
                          <input
                            type="text"
                            onChange={this.fnameChangeHandler}
                            className="form-control sharpEdges"
                            name="FirstName"
                            aria-describedby="emailHelp"
                            placeholder="First Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="textbox ">
                        
                          <input
                            type="text"
                            onChange={this.lnameChangeHandler}
                            className="form-control sharpEdges"
                            name="LastName"
                            aria-describedby="emailHelp"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="textbox">
                    <i className="fas fa-user"></i>
                      <input
                        type="email"
                        onChange={this.emailChangeHandler}
                        className="form-control sharpEdges"
                        name="Email"
                        aria-describedby="emailHelp"
                        placeholder="Email address"
                        required
                      />
                    </div>
                    <div className="textbox">
                    <i className="fas fa-lock"></i>
                      <input
                        type="password"
                        onChange={this.passwordChangeHandler}
                        className="form-control sharpEdges"
                        id="Password"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      onClick={this.submitSignUp}
                      className="btnLogin"
                    >
                      Sign Me Up
                    </button>
                    <br />
                    <br />
                
                
                <br />
                <br />
                <br />
                <small>
                This site is developed for educational purposes only. 
                <br/>If you have any doubts/queries please email us!
                </small>
              </div>
            </div>
         
        </div>
      </div>
    );
  }
}

export default SignUpHeader;
