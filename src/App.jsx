import React from 'react'
import AOS from 'aos'
import './App.css'
import 'antd/dist/antd.min.css'
import "bootstrap/dist/css/bootstrap.min.css"
// import UserAccount from '../src/Screens/UserAccount/UserAccount'
import { Header } from './Components'
import { Routing } from './Config/routes'
import axios from 'axios'
import {
  Build, Home, Signup, Login, Pricing, Protected,
  AccessDenied, CheckOut, OrderConfirmation,
  PaypalCheckout, ResetPassword, UpdatePassword, UserAccount, PageNotFound, StyleGuide, 
} from './Screens'
AOS.init()

const App =() => {
  // const res = await axios.get(`http://localhost:4000/api/get/test`)
  // console.log(res,'all data')
  return (
    <div>
      {/* <UpdatePassword /> */}
      <Routing />
      {/* <UserAccount /> */}
      {/* <h1>hello world</h1> */}
    </div>
  )
}

export default App