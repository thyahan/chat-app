import React from "react";
import PropTypes from "prop-types";

const MessageText = ({ textAlign, children, avatar, username }) => {
  const backgroundColor = textAlign === "left" ? "#ccc" : "#6df980";

  return (
    <div className="message-text" style={{ textAlign }}>
      {(avatar && textAlign === "left" && (
        <img src={avatar} alt={username} />
      )) || <span id="empty-img" />}
      <span className='text' style={{ backgroundColor }}>{children}</span>
    </div>
  );
};

MessageText.propTypes = {
  textAlign: PropTypes.oneOf(["left", "right"]).isRequired,
  children: PropTypes.string.isRequired
};

export default MessageText;
