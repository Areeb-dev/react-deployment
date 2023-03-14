import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import allPaths from "../../Config/paths"
import axios from "axios"
import { useDispatch } from "react-redux";
import { AddUser } from "../../Redux/actions/authActions";
import { AUTH } from "../../utils/apis";
import { Button, GoogleLoginBtn } from "../../Components/index"

import { requiredMessage, inputPlace, successMessage, errorMessage, warningMessage } from "../../utils/helpers"
import { ADD_USER } from "../../Redux/types";
const Signup = () => {
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const history = useHistory()
  const dispatch = useDispatch();
  const validateEmail = (e) => {
    return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  }
  const handleSubmit = async (event) => {

    event.preventDefault();
    let formData = {
      name: fullName,
      email: email,
      password: password
    }


    if (!fullName || !password || !email) {
      errorMessage('Please Provide All Fields.')
      return true
    }


    if (password?.length < 8) {
      errorMessage('Your Password Must Be At Least 8 Character')
      return true
    }
    else if (isChecked === false) {
      errorMessage('Please Accept Our privacy Policy')
      return true

    }
    else if (isChecked2 === false) {
      errorMessage('Please Accept Our privacy Policy')
      return true

    }
    if (!validateEmail(email)) {
      return warningMessage('Please Input Valid Email!')
    }
    else (
      setLoading(true)
    )
    axios.post(AUTH?.SIGNUP, formData)
      .then((res) => {
        const { data } = res
        // console.log(data)
        if (data?.success) {
          setLoading(false)
          successMessage(
            "Successfully Signup"
          )
          return setTimeout(() => {
            history.push(allPaths?.LOGIN)

          }, 300)
          // alert("submit")
        }
        else {
          errorMessage(data?.message)
          setLoading(false)
        }
      })
      .catch((e) => {
        setLoading(false)
        console.log(e)
      })


  };


  return (
    <>
      <div className="signup_section">
        <div className="w-users-userformpagewrap">
          <div className="w-users-usersignupformwrapper">
            <div tabIndex={-1} className="w-users-userformsuccessstate w-form-success">
              <div className="w-users-userformheader">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg"
                  alt=""
                />
                <h2>Account activated</h2>
              </div>
              <p>
                Your account was created successfully. You will be redirected shortly.
              </p>
              <div data-wf-user-form-redirect="">
                <a href="index.html">If nothing happens, click here.</a>
              </div>
            </div>
            <form
              method="post"
              // onSubmit={handleSubmit}
              data-wf-user-form-type="signup">
              <div className="w-users-userformheader">
                <h2 className="login_signup_heading" >Sign up</h2>
              </div>
              <label htmlFor="Email">Email</label>
              {/* <input
                type="email"
                maxLength={256}
                placeholder=""
                name="email"
                id="wf-sign-up-email"
                className="w-input"
                required=""
                data-wf-user-form-input-type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              /> */}
              <div className="form-group">
                <div className="relative">
                  <input
                    className="form-control user_input"
                    id="name"
                    data-wf-user-form-input-type="email"
                    type="email"
                    required
                    autofocus=""
                    autoComplete=""
                    placeholder="Type your Email here..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='name'
                  />
                  <i className="fa fa-user" />
                </div>
              </div>
              <br />
              <label htmlFor="Name">Name</label>
              <div className="form-group">
                <div className="relative">
                  <input
                    className="form-control user_input"
                    id="name"
                    data-wf-user-form-input-type="wf-user-field-name"
                    type="text"
                    required
                    autofocus=""
                    autoComplete=""
                    placeholder="Type your Full Name here..."
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    name='name'
                  />
                  <i className="fa fa-user" />
                </div>
              </div>
              <br />
              <label htmlFor="Password">Password</label>
              {/* <input
                type="password"
                maxLength={256}
                placeholder=""
                name="password"
                id="wf-sign-up-password"
                className="w-input"
                required=""
                data-wf-user-form-input-type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              /> */}
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
                    onChange={(e) => setPassword(e.target.value)}
                    name='name'
                  />
                  <i className="fa fa-user" />
                </div>
              </div>
              <br />
              <label className="w-checkbox">
                <input
                  type="checkbox"
                  id="wf-sign-up-accept-privacy"
                  required=""
                  name="Checkbox"
                  data-name="Checkbox"
                  data-wf-user-field="wf-user-field-accept-privacy"
                  className="w-checkbox-input"
                  onChange={(e) => { setIsChecked(e.target.checked); }}

                />
                <span className="w-form-label" htmlFor="Checkbox">
                  By creating an account, I agree to this website"s{" "}
                  <a href="#">privacy policy</a> and <a href="#">terms of service</a>
                </span>
              </label>
              {/* <br /> */}
              <label className="w-checkbox">
                <input
                  type="checkbox"
                  id="wf-sign-up-accept-communications"
                  required=""
                  name="Checkbox"
                  data-name="Checkbox"
                  data-wf-user-field="wf-user-field-accept-communications"
                  className="w-checkbox-input"
                  onChange={(e) => { setIsChecked2(e.target.checked); }}

                />
                <span className="w-form-label" htmlFor="Checkbox">
                  I consent to receive marketing emails.
                </span>
              </label>

              <div className="w-users-userformfooter">
                <span>Already have an account?</span>
                <a className="font-size-18" style={{ fontSize: 18 }} onClick={() => history.push(allPaths?.LOGIN)}>Log In</a>
              </div>

            </form>
            <Button className="w-users-userformbutton signup_login_button" onClick={handleSubmit} loading={loading} Name="Sign Up" />
            <p className="or">OR</p>
            <div style={{ marginBottom: 15 }}>
              <GoogleLoginBtn btnText="Sign up with google" isSignup={true} />
            </div>

            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-signup-form-general-error-error="There was an error signing you up. Please try again, or contact us if you continue to have problems."
                wf-signup-form-not-allowed-error="You're not allowed to access this site, please contact the admin for support."
                wf-signup-form-invalid-email-error="Make sure your email exists and is properly formatted (e.g., user@domain.com)."
                wf-signup-form-email-already_exist-error="An account with this email address already exists. Log in or reset your password."
                wf-signup-form-use-invite_email-error="Use the same email address your invitation was sent to."
                wf-signup-form-invalid-password-error="Your password must be at least 8 characters."
                wf-signup-form-not-verified-error="We couldn't verify your account. Please try again, or contact us if you continue to have problems."
                wf-signup-form-expired-token-error="This verification link has expired. A new verification link has been sent to your email. Please try again, or contact us if you continue to have problems."
                wf-signup-form-validation-failed-error="There was an error in some of the information provided."
              >
                There was an error signing you up. Please try again, or contact us if
                you continue to have problems.
              </div>
            </div>
            <div
              tabIndex={-1}
              className="w-users-usersignupverificationmessage w-form-verification"
              data-wf-user-form-verification="true"
            >
              <div className="w-users-userformheader">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/img/email-72.67fa6be437.svg"
                  alt=""
                />
                <h2>Verification Required</h2>
              </div>
              <p>
                Account verification required. Please check your email to find your
                unique verification link.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
