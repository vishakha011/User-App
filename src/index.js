import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import userReducer from "./reducer";

if(localStorage.getItem('users') == null) {
  localStorage.setItem('users', JSON.stringify([]))
}
let initialState = {
  currentState: -1,
  list: JSON.parse(localStorage.getItem('users'))
}

let store = createStore(userReducer, initialState)

ReactDOM.render(
<Provider store = {store}>
    <App />
</Provider>, 
document.getElementById("root")
);
