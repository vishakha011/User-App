import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../Users/Form/UserForm";
import { editUser, setDuplicateUser } from "../../actions";
import { useHistory } from "react-router-dom";
// import { useSetSnackbar } from "../Snackbar/useSnackbar";


const EditUser = ({ hasDupsUser, handleChange, users, clearData }) => {
  const user = useSelector((state) => state.user);
  const duplicateUser = useSelector((state) => state.duplicateUser);
  const dispatch = useDispatch();
  // // const setSnackbar = useSetSnackbar();
  let history = useHistory();

  const handleSubmit = () => {
    let { userFirstName, userLastName, userNumber, id } = user;
    let duplicate = hasDupsUser(user);
    
    if(userFirstName !== '' && userLastName !== '' && userNumber !== '') {
      if(duplicate === true) {
        dispatch(setDuplicateUser(user));
        alert(`User with id- ${id} already exits`)
      } else if (id)  {
        dispatch(editUser(user));
        // setSnackbar("Success", "success");
        history.push("/");
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
      buttonText = "UPDATE"
    />
    
  );
}

export default EditUser;

