import allPaths from './paths'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { } from '../Components'
import { Home, Build, Pricing, Signup, Login, StyleGuide, UserAccount, ResetPassword,UpdatePassword } from '../Screens'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Result, Button } from 'antd'

const Page404 = (props) => {
    const { history } = props
    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={<Button
                type='primary'
                className='form-button'
                onClick={() => history.push('/')}
            >Back Home</Button>}
        />
    )
}
const Routing = () => {

    const user = useSelector(state => state?.authReducer?.user)
    return (
        <>
            <Router>
                <Switch>
                    <Route path={allPaths?.HOME} exact component={Home} />
                    <Route path={allPaths?.BUILD} exact component={Build} />
                    <Route path={allPaths?.PRICING} exact component={Pricing} />
                    <Route path={allPaths?.PROFILE} exact component={UserAccount} />
                    <Route path={allPaths?.SIGN_UP} exact component={Signup} />
                    <Route path={allPaths?.LOGIN} exact component={Login} />
                    {/* <Route path={allPaths?.STYLE_GUIDE} exact component={StyleGuide} /> */}
                    <Route path={allPaths?.RESETPASSWORD} exact component={ResetPassword} />
                    <Route path={allPaths?.UPDATEPASSWORD} exact component={UpdatePassword} />

                    <Route path='/:page404' exact component={Page404} />
                    <Route path='/:page404/:token' exact component={Page404} />
                    <Route path='convert-image/:page404' exact component={Page404} />

                </Switch>
            </Router>
        </>
    )
}
export { Routing }
