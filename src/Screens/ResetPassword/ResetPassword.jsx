import React from 'react'

const ResetPassword = () => {
  return (
    <div className='ResetPassword'  >
          <div className="w-users-userformpagewrap">
              <div className="w-users-userresetpasswordformwrapper">
                  <div tabIndex={-1} className="w-users-userformsuccessstate w-form-success">
                      <div className="w-users-userformheader">
                          <img
                              src="https://d3e54v103j8qbb.cloudfront.net/img/email-72.67fa6be437.svg"
                              alt=""
                          />
                          <h2>Password Reset Email Sent</h2>
                      </div>
                      <p>
                          If we found an account associated with that email address, we've sent a
                          link to reset your password.
                      </p>
                  </div>
                  <form method="post" data-wf-user-form-type="resetPassword">
                      <div className="w-users-userformheader">
                          <h2>Reset</h2> 
                          <h2>Password</h2>
                      </div>
                      <label htmlFor="wf-reset-password-email">Email</label>
                      <input
                          type="email"
                          maxLength={256}
                          placeholder=""
                          name="Email"
                          id="wf-reset-password-email"
                          aria-describedby="wf-reset-password-paragraph"
                          className="w-input"
                          required=""
                          data-wf-user-form-input-type="email"
                      />
                      {/* <input
                          type="submit"
                          defaultValue="Reset Password"
                          data-wait="Please wait..."
                          className="w-users-userformbutton w-button"
                      /> */}
                      <button className="w-users-userformbutton signup_login_button login_margin ">Reset Password</button>

                  </form>
                  <div
                      style={{ display: "none" }}
                      data-wf-user-form-error="true"
                      className="w-users-userformerrorstate w-form-fail"
                  >
                      <div
                          className="user-form-error-msg"
                          wf-reset-pw-form-general-error-error="There was an error resetting your password. Please try again, or contact us if you continue to have problems."
                      >
                          There was an error resetting your password. Please try again, or contact
                          us if you continue to have problems.
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default ResetPassword
