import Chance from "chance";
const chance = new Chance();

export const GET_USER = "GET_USER";
export const SET_AVATAR = "SET_AVATAR";

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      value: {
        userId: Math.floor(Math.random() * 100) + 1,
        username: chance.first()
      }
    });
  };
};

export const setAvatar = path => {
  return {
    type: SET_AVATAR,
    value: path
  };
};
