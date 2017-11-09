import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk) //, // untuk redux-thunk
    // typeof window === "object" && window.devToolsExtension !== "undefined"
    //   ? window.devToolsExtension()
    //   : f => f // untuk redux dev tools
  )
);

export default store;
