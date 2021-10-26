const initialState = {
    users: [
      { id: 1, userFirstName: "John", userLastName: "Smith", userNumber: "2149698" },
    ],
    user: {
      id: 0,
      userFirstName: "", 
      userLastName: "", 
      userNumber: ""
    },
    duplicateUser: {
      id: 0,
      userFirstName: '',
      userLastName: '',
      userNumber: ''
    }
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLEAR_USER":
        return {
          ...state,
          user: {
            id: 0,
            userFirstName: "",
            userLastName: "",
            userNumber:""
          }
        };
      case "SET_USER":
        return {
          ...state,
          user: action.payload
        };
      case "ADD_USER":
        return {
          ...state,
          users: state.users.concat(action.payload)
        };
      case "EDIT_USER":
        return {
          ...state,
          users: state.users.map((content, i) =>
            content.id === action.payload.id
              ? {
                  ...content,
                  userFirstName: action.payload.userFirstName,
                  userLastName: action.payload.userLastName,
                  userNumber: action.payload.userNumber
                }
              : content
          )
        };
      case "DELETE_USER":
        return {
          ...state,
          users: state.users.filter((item) => item.id !== action.payload)
        };
        case "DUPLICATE_USER":
        return {
          ...state,
          duplicateUser: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  