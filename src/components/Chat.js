import React from "react";
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";

function Chat() {
  try {
    var socket = socketClient(SERVER);
    socket.on("connection", () => {
      if (this.state.channel) {
        this.handleChannelSelect(this.state.channel.id);
      }
    });
  } catch (e) {
    console.log(e);
  }

  return <h1>Test</h1>;
}

export default Chat;
