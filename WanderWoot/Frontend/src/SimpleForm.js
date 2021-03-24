import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import Review from "./Review";

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Welcome to Wanderwoot! May I know your name please?",
            trigger: "name"
          },
          {
            id: "name",
            user: true,
            trigger: "3"
          },
          {
            id: "3",
            message:
              "Hi {previousValue}! Do you want to book a property or list your property?",
            trigger: "property"
          },
          {
            id: "property",
            options: [
              { value: "book", label: "book", trigger: "book" },
              { value: "list", label: "list your own", trigger: "list" }
            ]
          },
          {
            id: "book",
            message:
              "Just login using - using this link here....-> put traveller's login link here",
            trigger: "Thanks"
          },
          {
            id: "list",
            component: (
              <div>
                For listing go to
                <a href="http://localhost:3000/TravelDash"> link </a>
              </div>
            ),
            asMessage: true,
            // message:
            //   "For listing go to" +
            //   <a href="http://localhost:3000/TravelDash"> + "link" </a>,
            trigger: "Thanks"
          },
          {
            id: "Thanks",
            message:
              "Thanks for chatting! If you have any other queries, click on yes",
            trigger: "queries"
          },
          {
            id: "queries",
            options: [
              { value: "yes", label: "yes", trigger: "yes" },
              { value: "no", label: "no", trigger: "no" }
            ]
          },
          {
            id: "yes",
            message: "Please enter your query here!",
            trigger: "enter"
          },
          {
            id: "enter",
            user: true,
            trigger: "getBackMail"
          },

          {
            id: "getBackMail",
            message: "Please enter your email id",
            trigger: "email"
          },

          {
            id: "email",
            user: true,
            trigger: "getBack"
          },
          {
            id: "getBack",
            message:
              "Our team will get back to you within 24-48 hours, thanks for contacting us!"
          },

          {
            id: "no",
            message: "Thanks for responding! Good day :)"
          }
        ]}
      />
    );
  }
}

export default SimpleForm;

