import apiUrl from "../Config/api"

const authApi = `${apiUrl}/api/user`


const AUTH = {
    LOGIN: `${authApi}/login`,
    SIGNUP: `${authApi}/signup`,
    UPDATEUSER:`${authApi}/updateUser`,
    CHANGEPASSWORD:`${authApi}/changePassword`,
    SOCIALLOGIN:`${authApi}/socialLogin`
}

export {
    AUTH,
  
}

