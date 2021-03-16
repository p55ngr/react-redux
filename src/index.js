import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { compose, createStore, bindActionCreators } from "redux";

import { connect, Provider } from "react-redux";
import { rootReducer } from "./redux/reducers.tsx";
import { changeTitle } from "./redux/actions.tsx";
import { addPost } from "./redux/actions.tsx";
import { initialState } from "./redux/reducers.tsx";

const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
const devtoolMiddleware =
  ext && process.env.NODE_ENV === "development" ? ext() : (f) => f;

const store = createStore(rootReducer, compose(devtoolMiddleware));
const putStateToProps = (state = initialState) => {
  return {
    title: state.title,
    posts: state.posts,
  };
};
const putActionsToProps = (dispatch) => {
  return {
    changeTitle: bindActionCreators(changeTitle, dispatch),
    addPost: bindActionCreators(addPost, dispatch),
  };
};
const WrappedMainComponent = connect(putStateToProps, putActionsToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById("root")
);
export default changeTitle; // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
