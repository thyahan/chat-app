import React from "react";
import MessageText from "./MessageText";
import { connect } from "react-redux";
import get from "lodash/get";

const mapStateToProps = ({ user, chat }) => {
  return {
    userId: user.userId,
    username: user.username,
    messages: chat.messages
  };
};

const shouldRenderAvatar = (collections, index) => {
  console.log({ collections, index });
  if (index === 0) return true;
  if (
    get(collections, `${index}.userId`) !==
    get(collections, `${index - 1}.userId`)
  )
    return true;
  return false;
};

const renderMessageText = ({ messages, userId }) => {
  return messages.map((message, index) => {
    const textAlign = message.userId === userId ? "right" : "left";

    return (
      <MessageText
        key={index}
        textAlign={textAlign}
        username={message.username}
        avatar={shouldRenderAvatar(messages, index) ? message.avatar : undefined}
      >
        {message.message}
      </MessageText>
    );
  });
};

const MessageView = props => {
  return <div className="message-view">{renderMessageText(props)}</div>;
};

export default connect(
  mapStateToProps,
  () => ({})
)(MessageView);
