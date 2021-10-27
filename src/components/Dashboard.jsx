import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import UserList from "./Users/UserList";
import * as Styled from "./Dashboard.styles"

const Dashboard = () => {

  return (
    <>
      <Header />
        <Styled.Container>
          <Link to="/user/create">
            <button className="btn-1">Add user</button>
          </Link>
        </Styled.Container>  
        <UserList/>     
    </>
  );
};


export default Dashboard;
