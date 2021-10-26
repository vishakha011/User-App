import React from 'react'
import * as actions from "../../actions";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

const UserList = (props) => {

    const handleEdit = (index) => {
        props.updateId(index)
    }

    const handleDelete = (index) => {
        props.deleteUser(index)
    }
    return (
        <table className="container">
            <tbody>
                {props.list.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.userFirstName}</td>
                        <td>{item.userLastName}</td>
                        <td>{item.userNumber}</td>
                        <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    )
};

const mapStateToProps = state => {
    return {
      list: state.list,
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateId: actions.updateIndex,
        deleteUser: actions.Delete
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
