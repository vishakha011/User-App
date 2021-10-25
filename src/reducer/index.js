const userReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('users'))
    switch (action.type) {
        case 'ADD':
            list.push(action.payload)
            localStorage.setItem('users', JSON.stringify(list))
            return { list, currentIndex: state.currentIndex }
        case 'UPDATE':
            list[state.currentIndex] = action.payload
            localStorage.setItem('users', JSON.stringify(list))
            return { list, currentIndex: -1 }

        case 'UPDATE-INDEX':
            return { list, currentIndex: action.payload }

        case 'DELETE':
            list.splice(action.payload, 1)
            localStorage.setItem('users', JSON.stringify(list))
            return { list, currentIndex: -1 }
        default:
            return state;
    }

};


export default userReducer;