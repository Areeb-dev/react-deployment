import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { AUTH } from "../../utils/apis";
import { useDispatch } from "react-redux";
import { AddUser } from "../../Redux/actions/authActions";
import { successMessage, errorMessage, googleLogin } from "../../utils/helpers"
import { GoogleLogin } from 'react-google-login'
import google_logo from '../../assets/Images/google_logo.png'
import { gapi } from 'gapi-script'

const GoogleLoginBtn = ({ btnText, isSignup }) => {
    const history = useHistory()
    const [spin, setSpin] = useState(false)
    const dispatch = useDispatch();
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "244276883148-bu4mnocfksnu6ohjrenq755ufrurjjc2.apps.googleusercontent.com",
                scope: 'email',
            });
        }

        gapi.load('client:auth2', start);
    }, []);
    const updateGoogleLogin = async (e) => {
        setSpin(true)
        const success = await googleLogin(e, history, AddUser, dispatch, isSignup)

        if (!success) {
            setSpin(false)
        }
    }
    const responseGoogle = (response) => {
        console.log(response)
    }

    return (
        <GoogleLogin
            clientId="244276883148-bu4mnocfksnu6ohjrenq755ufrurjjc2.apps.googleusercontent.com"
            className='googleBtn'
            onSuccess={updateGoogleLogin}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            style={{ display: 'inline', padding: '0px', display: 'none' }}
            render={renderProps => (
                <div onClick={renderProps.onClick}>
                    <button className="btn-google">
                        <img className="google_logo" src={google_logo} />
                        {btnText}
                    </button>
                </div>
            )}
        />
    )
}

export default GoogleLoginBtn