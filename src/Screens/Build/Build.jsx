import React from 'react'
import logo from '../../assets/Images/logo.png'
import { Header } from '../../Components'
import ImageForm from './Form'

function Build() {
  return (
    <div className='build_Section'>
      <Header/>
      {/* <div
        data-animation="default"
        className="navbar w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="medium"
        role="banner"
        data-no-scroll={1}
        data-duration={500}
        data-doc-height={1}
      >
        <div className="container nav-container">
          <div className="nav-menu-container">
            <a href="index.html" className="brand w-nav-brand">
              <img
                src={logo}
                loading="lazy"
                alt=""
                sizes="(max-width: 991px) 90px, 130px"
                // srcSet="images/logo.png 500w, images/logo.png 800w, images/logo.png 1080w, images/logo.png 1485w"
                className="brand-image"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="nav-link">
                <div className="nav-link-holder">
                  <a href="build.html" aria-current="page" className="w--current">
                    Build
                  </a>
                  <div className="w-embed">
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n      .footer-text-holder {\n        pointer-events:none; \n      }\n    "
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="nav-link">
                <div className="nav-link-holder">
                  <a href="pricing.html">Pricing</a>
                  <div className="w-embed">
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n      .footer-text-holder {\n        pointer-events:none; \n      }\n    "
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="nav-link">
                <div className="nav-link-holder">
                  <a href="/#Drops">Drops</a>
                  <div className="w-embed">
                    <style
                      type="text/css"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n      .footer-text-holder {\n        pointer-events:none; \n      }\n    "
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="nav-button-holder">
                <a href="sign-up.html" className="button w-button">
                  Sign up
                </a>
              </div>
            </nav>
            <div className="menu-button w-nav-button">
              <img
                src="images/menu.svg"
                loading="lazy"
                alt=""
                className="invert-menu"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="section">
        <div className="container">
          <ImageForm />
        </div>
      </div>

    </div>
  )
}

export default Build
