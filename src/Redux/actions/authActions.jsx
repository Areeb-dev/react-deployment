import { LOGIN_USER, REMOVE_USER, ADD_USER } from '../types'

const loginUser = (user) => {
    return {
        type: LOGIN_USER,
        user
    }
}

const removeUser = (user) => {
    return {
        type: REMOVE_USER,
        user:user
    }
}
const AddUser = (user) => {
    return {
        type: ADD_USER,
        user: user
    }

}

export {
    loginUser,
    removeUser,
    AddUser
}