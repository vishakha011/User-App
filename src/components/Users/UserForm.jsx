import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addUser, editUser, setUser, clearUser, setDuplicateUser } from "../../actions";

function UserForm() {
  const user = useSelector((state) => state.user);
  const users = useSelector(state=>state.users)
  const duplicateUser = useSelector((state) => state.duplicateUser)
  const dispatch = useDispatch();

  const handleSubmit = () => {
    let { userFirstName, userLastName, userNumber, id } = user;
    let duplicate = hasDupsUser(user);
    if(userFirstName !== '' && userLastName !== '' && userNumber !== '') {
      if(duplicate === true) {
        dispatch(setDuplicateUser(user));
        alert("User already exits")
      }else if (!id) {
        user.id = uuid()
        dispatch(addUser(user));
      } else if (id)  {
        dispatch(editUser(user));
      }else{
        alert("Enter User Details.");
      }
      clearData();
    }
    
  };

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
            required
          />
          <input
          className="userinput"
            onChange={handleChange}
            value={userLastName}
            type="text"
            placeholder="Last Name"
            name="userLastName"
            required
          />
          <input
            className="userinput"
            onChange={handleChange}
            value={userNumber}
            type="number"
            placeholder="Contact Number"
            name="userNumber"
            required
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

