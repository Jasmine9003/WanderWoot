import React, { Component } from "react";
import "react-dates/initialize";
import axios from 'axios';
import moment from "moment";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import { Redirect } from "react-router";
import { Alert } from 'reactstrap';

class PropertyBookedPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pid: this.props.pid,
      bid:this.props.bid,
      startDate:this.props.startDate,
      endDate:this.props.endDate,
      visible : false
    };
  }

  gotoTraveldash=()=>{ 
    this.setState({traveldashshow:true});
  }


  handleCancelBooking = bid => {
    axios.defaults.withCredentials = true;
    const data = {
      bid:bid
    };
    console.log("Inside handleCancelBooking: "+data);
    axios.post("http://localhost:8000/cancelBooking",data).then(response => {
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
    }else{alert("Sorry. Couldn't cancel your booking.")}
   });
  };

  render() {
    var redirectVar=null;
    if(this.state.traveldashshow){
      redirectVar = <Redirect to= "/TravelDash"/>
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
              Here is your booking dates
          </small>

          <DateRangePicker
                startDate={moment(new Date(this.state.startDate))}
                endDate={moment(new Date(this.state.endDate))}
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
                See Other Bookings
          </a>

          <a  onClick={() => { this.handleCancelBooking(this.state.bid) }}  className="btn btn-danger text-white m-2">
               Cancel Booking
          </a>
          <Alert color="success"  isOpen={this.state.visible} >
           Cancelled Booking id {this.state.bid} successfully! Redirecting to MyTrips.
          </Alert>

        </div>
      </div>
      </div>
    );
  }
}

export default PropertyBookedPanel;
