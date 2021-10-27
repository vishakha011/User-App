export const clearUser = () => ({
    type: 'CLEAR_USER'
  })
  
  export const setUser = (data) => ({
    type: 'SET_USER',
    payload: data  
  })
  
  export const addUser = (data) => 
  ({  
    type: 'ADD_USER',  
    payload: data  
  });  
  
  export const editUser = (data) => ({  
    type: 'EDIT_USER',  
    payload: data  
  }) 
  
  export const deleteUser = (id) => ({  
    type: 'DELETE_USER',  
    payload: id  
  })

  export const setDuplicateUser = (data) => ({  
    type: 'DUPLICATE_USER',  
    payload: data  
  }) 