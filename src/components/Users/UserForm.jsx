import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, setUser, clearUser } from "../../actions";

function UserForm() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let { id } = user;
    if (!id) {
      user.id = uuid()
      dispatch(addUser(user));
    } else if (id) {
      dispatch(editUser(user));
    } else {
      alert("Enter User Details.");
    }
    clearData();
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch(setUser({ ...user, [name]: value }))
  };

  const clearData = () => {
    dispatch(clearUser())
  };

  const { userFirstName, userLastName, userNumber, id } = user;
  return (
    <div className="container">
          <input
          className="userinput"
            onChange={handleChange}
            value={userFirstName}
            type="text"
            placeholder="First Name"
            name="userFirstName"
          />{" "}
          <input
          className="userinput"
            onChange={handleChange}
            value={userLastName}
            type="text"
            placeholder="Last Name"
            name="userLastName"
          />
          <input
            className="userinput"
            onChange={handleChange}
            value={userNumber}
            type="text"
            placeholder="Contact Number"
            name="userNumber"
            />
          {id ? (
            <button onClick={handleSubmit}>UPDATE</button>
          ) : (
            <button onClick={handleSubmit}>ADD</button>
          )}
    </div>
    
  );
}

export default UserForm;

