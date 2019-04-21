import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser } from "../actions/user";

const mapStateToProps = ({ user }) => {
  return user;
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators({ getUser }, dispatch) };
};

const User = ({ actions, username, id }) => {
  useEffect(() => {
    actions.getUser();
  }, []);

  console.log({ username });
  return <div>{username}</div>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
