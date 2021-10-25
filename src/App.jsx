import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./styles/main.css";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Dashboard} />
    </Router>
  );
};

export default App;
