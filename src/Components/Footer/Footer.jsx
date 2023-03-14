import React from 'react'
import allPaths from '../../Config/paths'
import {useHistory} from 'react-router-dom'

const Footer = () => {
  const history = useHistory()
  return (
    <div>
      <br/>
      <div className="footer">
  <div className="container footer-container">
    <div className="footer-holder">
      <div className="footer-brand-holder">
        <div
          id="w-node-eec48bb4-7097-222d-1919-0fb3ed1909af-0a144c54"
          className="footer-link-wrapper"
        >
          <div className="footer-brand-container">
            <div className="footer-title">
            Aipperal is a platform where our digital selves can freely live, play and prosper.
            </div>
            <div className="small-paragraph">
              In reference to liberating and setting data free – as it should.
            </div>
          </div>
          <div className="footer-link-holder">
            <div className="footer-link-container">
              <a href="#Drops" className="footer-link w-inline-block">
                <div>Terms & Conditions</div>
              </a>
              <a href="#Art" className="footer-link w-inline-block">
                <div>Privacy Policy</div>
              </a>
              <a href="#About" className="footer-link w-inline-block">
                <div>About</div>
              </a>
              <a href="#Join" className="footer-link w-inline-block">
                <div>Feedback</div>
              </a>
            </div>
            <div className="footer-link-container">
             
            </div>
          </div>
        </div>
        <div
          id="w-node-_593c6d01-8c32-d2cc-ddf9-6693ffc0aaba-0a144c54"
          className="footer-form-holder"
        >
          <div className="form-block w-form">
            <form
              id="Newsletter-Form"
              name="wf-form-Newsletter-form"
              data-name="Newsletter form"
              method="get"
              className="form"
            >
              <div className="form-title-holder">
                <div className="footer-title">
                  Join our newsletter to stay up to date on features and
                  releases.
                </div>
              </div>
              <div className="text-field-holder">
                <input
                  type="email"
                  className="text-field w-input"
                  maxLength={256}
                  name="Email"
                  data-name="Email"
                  placeholder="Email"
                  id="Email-2"
                />
                <input
                  type="submit"
                  defaultValue="Submit"
                  data-wait="Please wait..."
                  className="button form-button w-button"
                />
              </div>
              <div className="form-title-holder">
                <div className="small-paragraph">
                  By subscribing you agree to our privacy policy and provide
                  consent to receive updates from our company.
                </div>
              </div>
            </form>
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Footer
