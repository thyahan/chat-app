import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import reducers from "../reducers";

export default initialState => {
  const { NODE_ENV } = process.env;
  const middlewares = [thunk];

  if (NODE_ENV !== "production") middlewares.push(createLogger());

  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
