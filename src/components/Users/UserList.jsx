import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, deleteUser, setUser } from "../../actions";
import Button from "../Button/Button"

const UserList = () => {
  const users = useSelector(state=>state.users)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(clearUser())
    dispatch(deleteUser(id));
  };

  const handleEdit = (data) => {
    dispatch(setUser(data))
  }

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
                <Link to={`/user/edit/${data.id}`}>
                  <Button onClick={handleEdit} buttonText="EDIT"></Button>{" "}
                </Link>

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
