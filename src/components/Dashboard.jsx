import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import UserList from "./Users/UserList";
import * as Styled from "./Dashboard.styles";
import Button from "./Button/Button";

const Dashboard = () => {

  return (
    <>
      <Header />
        <Styled.Container>
          <Link to="/user/create">
            <Button buttonText="Add User"></Button>
          </Link>
        </Styled.Container>  
        <UserList/>     
    </>
  );
};


export default Dashboard;
