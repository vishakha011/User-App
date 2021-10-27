import React from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addUser, setDuplicateUser } from "../../actions";
import UserForm from "./Form/UserForm";
import { useHistory } from "react-router-dom";

function CreateUser({ hasDupsUser, handleChange, clearData }) {
  const user = useSelector((state) => state.user);
  const duplicateUser = useSelector((state) => state.duplicateUser)
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = () => {
    let { userFirstName, userLastName, userNumber, id } = user;
    let duplicate = hasDupsUser(user);

    if(userFirstName !== '' && userLastName !== '' && userNumber !== '') {
      if(duplicate === true) {
        dispatch(setDuplicateUser(user));
        alert(`User with id- ${id} already exits`)
      }else if (!id) {
        user.id = uuid()
        dispatch(addUser(user));
        history.push("/")
      }else{
        alert("Enter User Details.");
      }
      clearData();
    }
    
  };

  return (
    <UserForm
    userFirstName={user.userFirstName}
    userLastName={user.userLastName}
    userNumber= {user.userNumber}
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    buttonText = "ADD"
  />
  )
}

export default CreateUser;
