import { message, notification } from 'antd'
import axios from 'axios'
import { AUTH } from './apis'
import allPaths from '../Config/paths'

const successMessage = (desc = 'Successfully Complete!') => {
    return message.success(desc, [0.8])
}

const infoMessage = (desc = 'Successfully Complete!') => {
    return message.info(desc, [0.8])
}

const errorMessage = (desc = 'Oops Something Went Wrong!') => {
    return message.error(desc, [0.8])
}
const warningMessage = (desc = 'Warning!') => {
    return message.warning(desc, [0.8])
}

const validateEmail = (e) => {
    return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}


const userObject = (result) => {
    const { profileObj } = result
    return {
        email: profileObj?.email,
        name: profileObj?.familyName && profileObj?.givenName ? `${profileObj?.givenName} ${profileObj?.familyName}` : `${profileObj?.givenName}`,
        uid: profileObj?.googleId
    }
}

const googleLogin = (result, history, addUser, dispatch, isSignup) => {
    const obj = userObject(result)
    axios.post(AUTH?.SOCIALLOGIN, obj)
        .then(async (res) => {
            const { data } = res
            if (data.success) {
                dispatch(addUser(data?.user))
                successMessage(isSignup ? 'Successfully Sign up' : 'Successfully Logged In!')
                return setTimeout(() => {
                    history?.replace(allPaths?.HOME)
                }, 300)
            } else {
                errorMessage(data.message)
                console.log('e mess', data?.message)
            }
        })
        .catch((e) => {
            console.log('e', e)
            errorMessage('Oops Something Went Wrong!')
        })
}


export {
    successMessage,
    infoMessage,
    errorMessage,
    warningMessage,
    validateEmail,
    googleLogin
}