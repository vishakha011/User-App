import React, { Component } from "react";

import * as actions from "../../actions";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

class UserForm extends Component {

  state = {
      ...this.returnStateObject()
  }

  returnStateObject() {
      if(this.props.currentIndex == -1)
          return {
              userFirstName: '',
              userLastName: '',
              userNumber: '',
          }
        else 
           return this.props.list[this.props.currentIndex]
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
        this.setState({ ...this.returnStateObject() })
    }
}

  handleInputChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.currentIndex == -1)
            this.props.add(this.state)
        else
            this.props.update(this.state)
  }


  render() {
    return (
      <>
      <div className="container">
      <form onSubmit={this.handleSubmit} autoComplete="off">
            <input className = "userinput" name="userFirstName" placeholder="First Name" onChange={this.handleInputChange} value={this.state.userFirstName} />
            < input className = "userinput" name="userLastName" placeholder="Last Name" onChange={this.handleInputChange} value={this.state.userLastName} />
            < input className = "userinput" name="userNumber" placeholder="Contact Number" onChange={this.handleInputChange} value={this.state.userNumber} />
            <button 
            className="btn-1" 
            type="submit"
            >Submit
            </button>
        </form>
      </div>
    
    </>

    )
  }
}
const mapStateToProps = (state) =>{
  return {
      list: state.list,
      currentIndex: state.currentIndex
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
      add: actions.add,
      update: actions.update
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
