import React, { useState } from "react";
import SimpleForm from "../../SimpleForm";

const Chatbot = props => {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <div className="bot">
      <div style={{ display: showChat ? "" : "none" }}>
        <SimpleForm></SimpleForm>
      </div>
      {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
      <div>
        {!showChat ? (
          <button className="btn_bot" onClick={() => startChat()}>
            Click to Chat...{" "}
          </button>
        ) : (
          <button className="btn_bot" onClick={() => hideChat()}>
            Click to hide...{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
