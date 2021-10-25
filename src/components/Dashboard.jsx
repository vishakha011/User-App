import React, { Component } from "react";
import Header from "./Header";

import UserList from "./Users/UserList";
import * as actions from "../actions";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import UserForm from "./Users/UserForm";

class Dashboard extends Component {

  state = {
      ...this.returnStateObject()
  }

  returnStateObject() {
          return {
              userFirstName: '',
              userLastName: '',
              userNumber: '',
          }
  }

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.add(this.state)
}

  render() {
    return (
      <>
      <Header />
      <UserForm/>
      <UserList/>
      
    </>

    )
  }
}
const mapStateToProps = (state) =>{
  return {
      list: state.list,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      add: actions.add,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
