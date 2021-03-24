import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { withRouter } from "react-router-dom";

class LandingHeader extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      date: moment(),
      where: "",
      startDate: null,
      endDate: null,
      people: "1",
      searchedClicked: false
    };
  }

  onSearchClickedListener = () => {
    if (this.state.startDate === undefined || this.state.startDate === null) {
      this.setState({
        startDate: moment()
      });
    }

    if (this.state.endDate === undefined || this.state.endDate === null) {
      this.setState({
        endDate: moment().add(1, "year")
      });
    }

    this.setState({
      searchedClicked: true
    });
  };

  datesChageHandler = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  WhereChangeHandler = e => {
    this.setState({
      where: e.target.value
    });
  };

  peopleChangeHandler = e => {
    this.setState({
      people: e.target.value
    });
  };

  render() {
    let redirectVar = null;
    if (this.state.searchedClicked) {
      this.setState({
        searchedClicked: false
      });

      if (this.state.where.toString().replace(/\s/g, "") === "") {
        alert("Please enter the details.");
      } else {
        this.props.history.push({
          pathname: "/Properties",
          state: {
            where: this.state.where,
            startDate: this.state.startDate.toDate().toString(),
            endDate: this.state.endDate.toDate().toString(),
            people: this.state.people
          }
        });
      }
    }

    return (
      <div className="landing middleWater">
        {redirectVar}
        <header className="masthead">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 mx-auto">
                <div>
                  <h1 className="">
                    <center>Take a break.</center>
                  </h1>
                  <h3 className="">
                    <center>
                      <font color="white">
                        Discover best destinations and places to stay
                      </font>
                    </center>
                  </h3>
                  <div className="card  mastcard increaseWidthLandingCard ">
                    <div className="card-body text-white">
                      <div className="row">
                        <div className="col-4 ">
                          {/* <small> Location</small> */}

                          <input
                            className="form-control-lg"
                            type="text"
                            placeholder=" Search destination or property"
                            value={this.state.where}
                            onChange={this.WhereChangeHandler}
                          />
                        </div>
                        <div className="col-3 ">
                          {/* <small>When</small> */}
                          <br />

                          <div className="date-lg w3-round-large">
                            <DateRangePicker
                              startDate={this.state.startDate}
                              startDateId="your_unique_start_date_id"
                              endDate={this.state.endDate}
                              endDateId="your_unique_end_date_id"
                              onDatesChange={({ startDate, endDate }) =>
                                this.setState({ startDate, endDate })
                              }
                              focusedInput={this.state.focusedInput}
                              onFocusChange={focusedInput =>
                                this.setState({ focusedInput })
                              }
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          {/* <small>Guests</small> */}
                          <select
                            // value={this.state.people}
                            onChange={this.peopleChangeHandler}
                            className="form-control-lg"
                          >
                            <option default>Guests</option>
                            {/* <option value="1">{this.state.people}</option> */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                          </select>
                        </div>
                        <div className="col-1">
                          <br />
                          <button
                            type="button"
                            onClick={this.onSearchClickedListener}
                            className=" roundcornerbutton btn btn-primary btn-lg"
                          >
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;&nbsp;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(LandingHeader);

{
  /* <div className="mx-auto text-left ">

<div className="card mastcard increaseWidthLesser">
  <div className="card-body mastcardContent ">
   
  </div>
</div>
</div> */
}
