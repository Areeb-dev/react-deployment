import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import allPaths from '../../Config/paths'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { AUTH } from '../../utils/apis'
import { useDispatch } from 'react-redux';
import { AddUser } from '../../Redux/actions/authActions';
import { Uploader, Header } from '../../Components'
import { requiredMessage, inputPlace, successMessage, errorMessage, warningMessage } from '../../utils/helpers'

const UserAccount = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const user = useSelector(state => state?.authReducer?.user)
    const [fileList, setFileList] = useState([])
    const [loading, setLoading] = useState(false)

    if (!user?._id) {
        history.push(allPaths.HOME)
    }
    const Name = user?.name
    const Email = user?.email
    const UserID = user?._id
    const Address = user?.address

    const [name, setName] = useState(Name);
    const [email, setEmail] = useState(Email)
    const [address, setAddress] = useState(Address)


    const handleSubmit = async (event) => {
        event.preventDefault();

        let formData = {
            name: name,
            email: email,
            userId: UserID,
            address: address

        }
        setLoading(true)

        axios.post(AUTH?.UPDATEUSER, formData)
            .then((res) => {
                const { data } = res
                if (data?.success) {
                    successMessage(
                        ' Profile Updated Successfully'
                    )
                    dispatch(AddUser(data?.user));
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
        <>
            <div className='backGround'>
                <div><Header /></div>
                <div className="main_user_account">
                    <form className="form "
                        method="post"
                        onSubmit={handleSubmit} >
                        <div className="heading_div">

                            <h2>User Profile</h2>

                            <div className="uploader"> <Uploader user={user} setFileList={setFileList} fileList={FileList} /> </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Name:</label>
                            <div className="relative">
                                <input
                                    className="form-control user_input"
                                    id="name"
                                    type="text"
                                    required
                                    autofocus=""
                                    title="Username should only contain letters. e.g. Piyush Gupta"
                                    autoComplete=""
                                    placeholder="Type your name here..."
                                    defaultValue={name}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    // onChange={handleNameChange}
                                    name='name'
                                />
                                <i className="fa fa-user" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <div className="relative">
                                <input
                                    name='email'
                                    className="form-control"
                                    type="email"
                                    required=""
                                    placeholder="Type your email address..."
                                    defaultValue={email}
                                    //  onChange={handleEmailChange}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)
                                    }

                                />
                                <i className="fa fa-envelope" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Address:</label>
                            <div className="relative">
                                <input
                                    className="form-control"
                                    type="address"
                                    name="address"
                                    required=""
                                    placeholder="Type your Address..."
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <i className="fa fa-phone" />
                            </div>
                        </div>


                        {user?.socialId ?
                            null
                            : <div className="reset_password">
                                <h3>Password settings</h3>
                                <a onClick={() => history.push(allPaths?.UPDATEPASSWORD)}> Update password </a>
                            </div>
                        }
                        {/* <div className="reset_password">
                            <h3>Password settings</h3>
                            <a onClick={() => history.push(allPaths?.UPDATEPASSWORD)}> Update password </a>
                        </div> */}


                        <div className="userAccount_button">
                            {
                                loading ?
                                    <button className='save_and_cancel savechanges' type='submit' >
                                        {loading && <i class="fa fa-spinner fa-spin"></i>} &nbsp;
                                        Save Changes </button>
                                    : <button className='save_and_cancel savechanges' type='submit' >Save Changes </button>
                            }

                            <span className='cancel'>Cancel</span>

                        </div>

                    </form>
                </div>
            </div>
        </>

    )
}

export default UserAccount
