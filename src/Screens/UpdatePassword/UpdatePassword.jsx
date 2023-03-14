import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { AUTH } from '../../utils/apis'
import { successMessage, errorMessage, warningMessage } from '../../utils/helpers'
import allPaths from '../../Config/paths'
import { Header } from '../../Components'

const UpdatePassword = () => {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const user = useSelector(state => state?.authReducer?.user)
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()

        let formData = {
            userId: user?._id,
            password,
            newPassword
        }
        if (!password || !newPassword) {
            errorMessage('Please Provide All Fields.')
            return true
        }
        if (newPassword?.length < 8) {
            errorMessage('Your Password Must Be At Least 8 Character')
            return true
        }

        
        setLoading(true)

        axios.post(AUTH?.CHANGEPASSWORD, formData)
            .then((res) => {
                const { data } = res
                if (data?.success) {
                    successMessage(
                        ' Password Updated Successfully'
                    )
                    history.push(allPaths?.PROFILE)
                }
                else {
                    errorMessage(data?.message)
                }
                setLoading(false)
            })
            .catch((e) => {
                // errorMessage()
                setLoading(false)
                console.log(e)
            })
    }
    return (
        <div className='UpdatePassword' >
            <Header/>
            <div className="w-users-userformpagewrap">
                <div className="w-users-userupdatepasswordformwrapper">
                    <div tabIndex={-1} className="w-users-userformsuccessstate w-form-success">
                        <div className="w-users-userformheader">
                            <img
                                src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg"
                                alt=""
                            />
                            <h2>Password updated</h2>
                        </div>
                        <p>
                            Your password was updated successfully. You were automatically logged in
                            and can continue your session.
                        </p>
                        <a href="index.html" className="w-button">
                            Go to Homepage
                        </a>
                    </div>
                    <form method="post" data-wf-user-form-type="updatePassword">
                        <div className="w-users-userformheader">
                            <h2>Update </h2>
                            <h2>Password</h2>
                        </div>
                        <p id="wf-update-password-paragraph">
                            Please enter your new password in the field below. Make sure you are not
                            using your current password.
                        </p>
                        <label htmlFor="wf-update-password">Old Password</label>
                        <input
                            type="password"
                            maxLength={256}
                            placeholder=""
                            name="Password"
                            id="wf-update-password"
                            aria-describedby="wf-update-password-paragraph"
                            className="w-input"
                            required=""
                            data-wf-user-form-input-type="password"
                            value={password}
                            onChange={(e) => setPassword(e?.target?.value)}
                        />

                        <label htmlFor="wf-update-password">New Password</label>
                        <input
                            type="password"
                            maxLength={256}
                            placeholder=""
                            name="Password"
                            id="wf-update-password"
                            aria-describedby="wf-update-password-paragraph"
                            className="w-input"
                            required=""
                            data-wf-user-form-input-type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e?.target?.value)}
                        />

                        
                        <button onClick={handleSubmit} className="w-users-userformbutton signup_login_button login_margin ">
                            {loading && <i class="fa fa-spinner fa-spin"></i>} &nbsp;
                            Update Password
                        </button>

                    </form>
                    <div
                        style={{ display: "none" }}
                        data-wf-user-form-error="true"
                        className="w-users-userformerrorstate w-form-fail"
                    >
                        <div
                            className="user-form-error-msg"
                            wf-update-pw-form-general-error-error="There was an error updating your password. Please try again, or contact us if you continue to have problems."
                            wf-update-pw-form-weak-password-error="Your password must be at least 8 characters."
                        >
                            There was an error updating your password. Please try again, or contact
                            us if you continue to have problems.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdatePassword
