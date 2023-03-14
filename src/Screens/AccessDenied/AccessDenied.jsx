import React from 'react'

const AccessDenied = () => {
  return (
    <div className='AccessDenied'  >
          <div className="w-users-userformpagewrap">
              <div className="w-users-userformheader">
                  <img
                      src="https://d3e54v103j8qbb.cloudfront.net/static/utility-lock.ae54711958.svg"
                      alt=""
                  />
                  <h2  className='Access_heading' >Access</h2> 
                  <h2 className='Access_heading' >Denied</h2>
              </div>
              <p>
                  A site membership is required to view this page. Please{" "}
                  <a href="sign-up.html">Sign up</a> or <a href="log-in.html">Log in</a>.
              </p>
          </div>

    </div>
  )
}

export default AccessDenied
