import React, {useState, useEffect} from 'react'
import * as actions from "../../actions";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import axios from 'axios'

const UserList = (props) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    axios.get("https://reqres.in/api/users?page=2")
  .then(function (response) {
    // console.log(response.data);
    setUserData(response.data);
    setLoading(false)
  })
  .catch((error) =>{
    console.log(error);
  })
  }

  useEffect(() => {
    fetchData()
  }, [])

    const handleEdit = (index) => {
        props.updateId(index)
    }

    const handleDelete = (index) => {
        props.deleteUser(index)
    }
 
    if(loading) {
      return <h3>Loading</h3>
    }

    return (
        <table className="container">
            <tbody>
                {/* {props.list.map((item, index) => {
                    return <tr key={index}>
                        <td>{item.userFirstName}</td>
                        <td>{item.userLastName}</td>
                        <td>{item.userNumber}</td>
                        <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                    </tr>
                })} */}
                {userData.data.map(item => {
                   return <tr key={item.id}>
                   <td>{item.email}</td>
                   <td>{item.first_name}</td>
                   <td>{item.last_name}</td>
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
