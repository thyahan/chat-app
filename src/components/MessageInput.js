import React, { useState } from "react";
import isEmpty from "lodash/isEmpty";
import { Button } from "antd";

const MessageInput = props => {
  const [message, setMessage] = useState("");
  const { onSubmit } = props;

  const handleOnClick = () => {
    onSubmit(message);
    setMessage("");
  };

  return (
    <div className="message-input">
      <input
        className="input message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        disabled={isEmpty(message)}
        type="primary"
        onClick={handleOnClick}
      >
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
