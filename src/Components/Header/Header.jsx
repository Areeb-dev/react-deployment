import React, { useEffect, useState } from 'react'
import logo from '../../assets/Images/logo.png'
import menuSvg from '../../assets/Images/menu.svg'
import allPaths from '../../Config/paths'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { removeUser } from '../../Redux/actions/authActions'
import EastIcon from '@mui/icons-material/East';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = ({ ...props }) => {
    const history = useHistory()
    const user = useSelector(state => state?.authReducer?.user)
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(true)

    const Toggle = () => {
        setToggle(!toggle)
    }

    // const user = useSelector(state => state?.authReducer?.user)


    // const logout = () => {
    //     const remove = dispatch(AddUser(user));
    //     console.log(remove)

    // }

    const logout = () => {
        dispatch(removeUser());
        history.replace("/login", null);

        // // redirect the user to the login page
        // window.location.href = "/login";
    }
    return (
        <>
            <div data-animation="default" className="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" role="banner" data-no-scroll={1} data-duration={500} data-doc-height={1}>
                <div className="container nav-container">
                    <div className="nav-menu-container">
                        <a onClick={() => history.push(allPaths?.HOME)} aria-current="page" className="brand w-nav-brand w--current"><img src={logo} className="brand-image" /></a>
                        <nav role="navigation" className="nav-menu w-nav-menu">

                            {user === undefined ?
                                null :
                                <div className="nav-link">
                                    <div className="nav-link-holder">
                                        <a onClick={() => history.push(allPaths?.BUILD)}>Build</a>
                                        <div className="w-embed">
                                        </div>
                                    </div>
                                </div>

                            }



                            <div className="nav-link">
                                <div className="nav-link-holder">
                                    <a onClick={() => history.push(allPaths?.PRICING)}>Pricing</a>
                                    <div className="w-embed">
                                    </div>
                                </div>
                            </div>
                            <div className="nav-link">
                                <div className="nav-link-holder">
                                    <a onClick={() => history.push(allPaths?.HOME)} href="#Drops">Drops</a>
                                    <div className="w-embed">
                                    </div>
                                </div>
                            </div>
                            {
                                user === undefined ?
                                    null :
                                    <div className="nav-link">
                                        <div className="nav-link-holder">
                                            <a onClick={() => history.push(allPaths?.PROFILE)}>Profile</a>
                                            <div className="w-embed">
                                            </div>
                                        </div>
                                    </div>
                            }

                            {
                                user !== undefined
                                    ?
                                    <div className="nav-button-holder" onClick={logout}  >
                                        <a
                                            // onClick={() => history.push(allPaths?.SIGN_UP)}
                                            className="button w-button"  >Logout <LogoutIcon/></a>
                                    </div>

                                    :
                                    <div className="nav-button-holder">
                                        <a onClick={() => history.push(allPaths?.SIGN_UP)} className="button w-button">Sign up <EastIcon /></a>
                                    </div>
                            }


                            {/* <div> <button onClick={logout}  >logout</button> </div> */}
                        </nav>
                        <div className={toggle ? 'menu-button w-nav-button' : 'menu-button w-nav-button open'} onClick={Toggle}><img src={menuSvg} loading="lazy" alt="" className='invert-menu' /></div>
                    </div>
                </div>
                {
                    !toggle ?
                        <div className='toggle_container'>
                            {user === undefined ?
                                null :
                                <div className="nav-link">
                                    <div className="nav-link-holder">
                                        <a onClick={() => history.push(allPaths?.BUILD)}>Build</a>
                                        <div className="w-embed">
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="nav-link">
                                <div className="nav-link-holder pricing">
                                    <a onClick={() => history.push(allPaths?.PRICING)}>Pricing</a>
                                    <div className="w-embed">
                                    </div>
                                </div>
                            </div>
                            <div className="nav-link">
                                <div className="nav-link-holder pricing">
                                    <a onClick={() => history.push(allPaths?.HOME)} href="#Drops">Drops</a>
                                    <div className="w-embed">
                                    </div>
                                </div>
                            </div>
                            {
                                user === undefined ?
                                    null :
                                    <div className="nav-link pricing">
                                        <div className="nav-link-holder">
                                            <a onClick={() => history.push(allPaths?.PROFILE)}>Profile</a>
                                            <div className="w-embed">
                                            </div>
                                        </div>
                                    </div>
                            }
                            {
                                user !== undefined
                                    ?
                                    <div className="nav-button-holder" onClick={logout}  >
                                        <a
                                            // onClick={() => history.push(allPaths?.SIGN_UP)}
                                            className="button w-button"  >Logout <LogoutIcon /></a>
                                    </div>
                                    :
                                    <div className="nav-button-holder">
                                        <a onClick={() => history.push(allPaths?.SIGN_UP)} className="button w-button">Sign up <EastIcon /></a>
                                    </div>
                            }
                        </div>
                        : null
                }
            </div >
        </>
    )
}

export default Header