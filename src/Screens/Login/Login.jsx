import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import allPaths from "../../Config/paths"
import axios from "axios"
import { AUTH } from "../../utils/apis";
import { useDispatch } from "react-redux";
import { Button, GoogleLoginBtn } from "../../Components/index"
import { AddUser } from "../../Redux/actions/authActions";
import { successMessage, errorMessage, googleLogin } from "../../utils/helpers"
import { GoogleLogin } from 'react-google-login'
import google_logo from '../../assets/Images/google_logo.png'

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [spin, setSpin] = useState(false)

  const dispatch = useDispatch();
  const validateEmail = (e) => {
    return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = {
      email: email,
      password: password
    }
    if (!validateEmail(email)) {
      return errorMessage('Please Input Valid Email!')
    }
    if (!email || !password) {
      errorMessage('Please Provide All Fields.')
      return true
    }
    setLoading(true)
    axios.post(AUTH?.LOGIN, formData)
      .then((res) => {
        const { data } = res
        if (data?.success) {
          setLoading(false)
          successMessage(
            "Successfully Login"
          )
          dispatch(AddUser(data?.user));
          return setTimeout(() => {
            history.push(allPaths?.HOME)
          }, 300)
        }
        else {
          setLoading(false)
          errorMessage(data?.message)
        }
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })
  }
  return (
    <div className="login_section"  >
      <div className="w-users-userformpagewrap">
        <div className="w-users-userloginformwrapper">
          <form
            method="post"
            // onSubmit={handleSubmit}
            data-wf-user-form-type="login"
            data-wf-user-form-redirect="/"
          >
            <div className="w-users-userformheader">
              <h2 className="login_signup_heading">Log In</h2>
            </div>
            <label htmlFor="Email">Email</label>
            <div className="form-group">
              <div className="relative">
                <input
                  className="form-control user_input"
                  id="name"
                  data-wf-user-form-input-type="email"
                  value={email}
                  type="email"
                  required
                  autofocus=""
                  autoComplete=""
                  placeholder="Type your Email here..."
                  onChange={(e) => setEmail(e?.target?.value)}
                  name='name'
                />
                <i className="fa fa-user" />
              </div>
            </div>
            <br />

            <label htmlFor="Password">Password</label>
            <div className="form-group">
              <div className="relative">
                <input
                  className="form-control user_input"
                  id="name"
                  data-wf-user-form-input-type="password"
                  type="password"
                  required
                  autofocus=""
                  autoComplete=""
                  placeholder="Type your Password here..."
                  value={password}
                  onChange={(e) => setPassword(e?.target?.value)}
                  name='name'
                />
                <i className="fa fa-user" />
              </div>
            </div>
            <div className="w-users-userformfooter">
              <span>Don"t have an account?</span>
              <a className="font-size-18" style={{ fontSize: 18 }} onClick={() => history.push(allPaths?.SIGN_UP)}>
                Sign Up
              </a>
            </div>

          </form>
          <Button loading={loading} Name="Login In" onClick={handleSubmit} />
          <p className="or">OR</p>
          {/* <GoogleLogin
            clientId={'129228822361-7o51m08bb42d55h1ftdplfrv9ub1lih7.apps.googleusercontent.com'}
            className='googleBtn'
            onSuccess={updateGoogleLogin}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            style={{ display: 'inline', padding: '0px', display: 'none' }}
            render={renderProps => (
              <div onClick={renderProps.onClick}>
                <button className="btn-google">
                  <img className="google_logo" src={google_logo} /> Sign in with Google
                </button>
              </div>
            )}
          /> */}
          <GoogleLoginBtn btnText="Sign in with Google" />
          <div
            style={{ display: "none" }}
            data-wf-user-form-error="true"
            className="w-users-userformerrorstate w-form-fail"
          >
            <div
              className="user-form-error-msg"
              wf-login-form-general-error-error="We're having trouble logging you in. Please try again, or contact us if you continue to have problems."
              wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
            >
              We"re having trouble logging you in. Please try again, or contact us if
              you continue to have problems.
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
