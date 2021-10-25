import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, deleteUser, setUser } from "../../actions";

const UserList = () => {
  const users = useSelector(state=>state.users)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(clearUser())
    dispatch(deleteUser(id));
  };


  return (
    <table className="container table">
      <tbody>
        {users?.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.userFirstName}</td>
              <td>{data.userLastName}</td>
              <td>{data.userNumber}</td>
              <td>
                <button className="btn-1" onClick={() => dispatch(setUser(data))}>EDIT</button>{" "}
                <button className="btn-1" onClick={() => handleDelete(data.id)}>DELETE</button>{" "}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UserList;
