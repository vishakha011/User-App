import React from "react";
import Header from "./Header";

import UserList from "./Users/UserList";
import UserForm from "./Users/UserForm";

const Dashboard = () => {
  return (
    <>
      <Header />
      <UserForm/>
      <UserList/>
      
    </>
  )
};

export default Dashboard;
