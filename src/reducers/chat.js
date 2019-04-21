import assign from "lodash/assign";
import { RECEIVED_NEW_MESSAGE, SEND_MESSAGE } from "../actions/chat";

const initialState = {
  messages: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return assign({}, state, { messages: [...state.messages, action.value] });
    case RECEIVED_NEW_MESSAGE:
      return assign({}, state, { messages: [...state.messages, action.value] });
    default:
      return state;
  }
};
