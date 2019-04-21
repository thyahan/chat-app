export const SEND_MESSAGE = "SEND_MESSAGE";
export const RECEIVED_NEW_MESSAGE = "RECEIVED_NEW_MESSAGE";

export const sendMessage = messsage => {
  return {
    type: SEND_MESSAGE,
    value: messsage
  };
};

export const receivedNewMessage = messsage => {
  return {
    type: RECEIVED_NEW_MESSAGE,
    value: messsage
  };
};
