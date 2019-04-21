import assign from "lodash/assign";
import { GET_USER, SET_AVATAR } from "../actions/user";

const initialState = {
  userId: "default",
  username: "default",
  avatar: "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return assign({}, state, { ...action.value });
    case SET_AVATAR:
      return { ...state, avatar: action.value };
    default:
      return state;
  }
};
