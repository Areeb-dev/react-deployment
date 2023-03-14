import React from 'react'
import { Footer, Header } from '../../Components'

const PageNotFound = () => {
  return (
    <div className='PageNotFound'  >
        <Header/>
          <div className="utility-page-wrap">
              <div className="utility-page-content w-form">
                  <h2>Page Not Found</h2>
                  <div>The page you are looking for doesn't exist or has been moved</div>
                  <a href="index.html" className="button big top-margin-l w-button">
                      Back to home
                  </a>
              </div>
          </div>
          <Footer/>

    </div>
  )
}

export default PageNotFound
