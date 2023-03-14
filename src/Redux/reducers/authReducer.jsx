import { LOGIN_USER, REMOVE_USER, ADD_USER } from '../types'
const initialState = {
    users: []
};

const reducer = (state = initialState, action) => {
    // switch (action.type) {
    //     case LOGIN_USER: {
    //         return { ...state, user: action.user }
    //     }
    //     case REMOVE_USER: {
    //         return state = {}
    //     }
    //     default: {
    //         return state
    //     }
    // console.log(state, 'reduces')

    switch (action.type) {
        case ADD_USER:
            return {
                ...state, user: action.user
            };
        case REMOVE_USER: {
            return  state = {}

        }
        default:
            return state;
    }
}

export default reducer

