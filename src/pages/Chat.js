import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import MessageInput from "../components/MessageInput";
import MessageView from "../components/MessageView";
import UserView from "../components/UserView";

import { sendMessage, receivedNewMessage } from "../actions/chat";
import { getUser } from "../actions/user";

const socket = socketIOClient("http://localhost:8080");

const mapStateToProps = ({ user }) => {
  return user;
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      { getUser, sendMessage, receivedNewMessage },
      dispatch
    )
  };
};

const Chat = props => {
  const { avatar, userId, username, actions } = props;

  const onSubmitMessage = (message, userId) => {
    socket.emit("send-message", { message, userId, avatar });
  };

  const listenNewMessage = () => {
    socket.on("new-message", messageObject => {
      actions.receivedNewMessage(messageObject);
    });
  };

  useEffect(() => {
    actions.getUser();
    listenNewMessage();
  }, []);

  return (
    <div className="chat">
      <UserView username={username} userId={userId} />
      <MessageView />
      <MessageInput onSubmit={message => onSubmitMessage(message, userId)} />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
