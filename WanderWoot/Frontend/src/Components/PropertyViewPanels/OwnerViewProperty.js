import React, { Component } from "react";
import "react-dates/initialize";
import moment from "moment";
import axios from "axios";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Redirect } from "react-router";
import { Alert } from 'reactstrap';

class OwnerPropertyPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: this.props.pid,
      bid:this.props.bid,
      startDate:this.props.startDate,
      endDate:this.props.endDate,
      visible:false
    };
  }

  gotoTraveldash=()=>{
    this.setState({
      traveldashshow:true
    })
  }

  handleDeleteProperty = pid => {
    axios.defaults.withCredentials = true;
    const data = {
      pid:pid
    };
    console.log("Inside handleDeleteProperty: "+data);
    axios.post("http://localhost:8000/deleteProperty",data).then(response => {
    console.log("Status Code : ", response.status);
    if(response.status===200){
      this.setState({visible:true},()=>{
        window.setTimeout(()=>{
          this.setState({
            visible:false,
            traveldashshow:true
          })   
        },2500)
      });
    }else{alert("Sorry. Couldn't delete your property.")}
   });
  };


  render() {
    var redirectVar=null;
    if(this.state.traveldashshow){
      redirectVar = <Redirect to= "/OwnerDash"/>
    }
 
    return (
        <div>
          {redirectVar}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      <div className="card">
        <div className="card-body shadow-lg">
          <h5 className="card-title">Booked Property</h5>
          <small>
              Property availability dates:
          </small>

          <DateRangePicker
                startDate={moment(new Date(this.props.startDate))}
                endDate={moment(new Date(this.props.endDate))}
                readOnly={true}
                startDateId="your_unique_start_date_id"
                endDateId="your_unique_end_date_id"
                onDatesChange={({ startDate, endDate }) =>
                console.log()
              }
              focusedInput={this.state.focusedInput} 
              onFocusChange={focusedInput =>
                console.log()
              }
              />
              <br/><br/>
          <a  onClick={this.gotoTraveldash} className="btn btn-primary text-white">
                See Other Properties
          </a>
          <a  onClick={() => { this.handleDeleteProperty(this.props.pid) }} className="btn btn-danger text-white m-2">
                Delete this property
          </a>
          <Alert color="success" className="m-2" isOpen={this.state.visible} >
           Succesfully deleted! Redirecting to your properties.
          </Alert>

        </div>
      </div>
      </div>
    );
  }
}

export default OwnerPropertyPanel;
