import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import Dashboard from "./components/Dashboard";
import CreateUser from './components/Users/CreateUser';
import EditUser from "./components/Users/EditUser";
import { useDispatch, useSelector } from "react-redux";
import { editUser, setUser, clearUser, setDuplicateUser } from "./actions";
import { useHistory } from "react-router-dom";
// import SimpleSnackbar from "./components/Snackbar/Snackbar";
// import { SnackbarContainer } from "./components/Snackbar/SnackbarContext"

const App = () => {
  const user = useSelector((state) => state.user);
  const users = useSelector(state=>state.users);
  const dispatch = useDispatch();
  let history = useHistory();

  const hasDupsUser = (user) => {
    const { userFirstName, userLastName, userNumber } = user;
    return users.some((userObj) => {
      return (userObj.userFirstName === userFirstName && userObj.userLastName === userLastName && userObj.userNumber === userNumber)
    })
  }
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }))
  };

  const clearData = () => {
    dispatch(clearUser())
  };

  return (
    <Router>
      <Route 
        exact path="/" 
        component={Dashboard} 
      />
      <Route 
        exact path="/user/create" 
        component={() => (<CreateUser 
                            handleChange={handleChange} 
                            hasDupsUser={hasDupsUser}              
                            clearData={clearData} />)}
      />
      <Route 
        exact path="/user/edit/:id" 
        component={() => (<EditUser 
                            handleChange={handleChange} 
                            hasDupsUser={hasDupsUser}
                            clearData={clearData} />)}
      />
    </Router>
    
  );
};

export default App;
