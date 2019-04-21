import React, { useEffect } from "react";
import isEmpty from "lodash/isEmpty";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setAvatar } from "../actions/user";
const avatarUrl = "https://ui-avatars.com/api/?background=0D8ABC&color=fff";

const mapStateToProps = ({ user }) => {
  return { avatar: user.avatar };
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ setAvatar }, dispatch) };
};

const getChars = username => {
  if (isEmpty(username)) return ["A", "A"];
  return [username.charAt(0), username.charAt(1)];
};

const UserView = (props) => {
  const { username, avatar, actions } = props;
  const [first, last] = getChars(username);

  useEffect(() => {
    actions.setAvatar(`${avatarUrl}&name=${first}+${last}`);
  }, [username]);

  return (
    <div className="user-view">
      <img src={avatar} alt={username} />
      <span>{username}</span>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserView);
