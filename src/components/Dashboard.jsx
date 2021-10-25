import React from "react";
import Header from "./Header";

import UserForm from "./Users/UserForm";
import UserList from "./Users/UserList";


const Dashboard = () => {

  return (
    <>
      <Header />
      <UserForm />
      <UserList/>
      
    </>
  );
};


export default Dashboard;
