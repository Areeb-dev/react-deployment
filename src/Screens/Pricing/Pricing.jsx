import React from 'react'
import { Footer, Header } from '../../Components'
import { useSelector } from 'react-redux';
function Pricing() {
  // const name = useSelector((state) => state.UsersData);
  // console.log(name,'data')
  const userData = localStorage.getItem('data')
  console.log(userData)
  return (
    <div className='pricing_section'   >
      <Header />
      {/* <div className="section">
        <div className="container">
          <div className="style-guide-gray-background big-margins">
            <section className="uui-section_pricing04">
              <div className="uui-page-padding">
                <div className="uui-container-large">
                  <div className="uui-padding-vertical-xhuge">
                    <div className="uui-text-align-center">
                      <div className="uui-max-width-large align-center">
                        <div className="uui-heading-subheading">Pricing</div>
                        <h2 className="uui-heading-medium">
                          Simple, transparent pricing
                        </h2>
                        <div className="uui-space-xsmall" />
                      </div>
                    </div>
                    <div className="w-layout-grid uui-pricing04_components">
                      <div className="uui-pricing04_plan">
                        <div className="uui-pricing04_content">
                          <div className="uui-pricing04_content-top">
                            <div className="uui-text-align-center">
                              <h2 className="uui-heading-xxsmall">Bronze</h2>
                              <div className="uui-pricing04_price">
                                $10
                                <span className="uui-pricing04_price-text">
                                  /month
                                </span>
                              </div>
                              <div className="uui-text-size-medium">
                                Billed annually.
                              </div>
                            </div>
                            <div className="uui-pricing04_feature-list">
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce76658c8-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Access to all basic features
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce76658cd-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  100 credits per month
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce76658d2-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Credit accumulation
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce76658dc-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Basic support plan
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="uui-button w-inline-block">
                            <div>Get started</div>
                          </a>
                        </div>
                      </div>
                      <div className="uui-pricing04_popular-plan">
                        <div className="uui-pricing04_popular-label">
                          <div>Most popular plan</div>
                        </div>
                        <div className="uui-pricing04_content">
                          <div className="uui-pricing04_content-top">
                            <div className="uui-text-align-center">
                              <h2 className="uui-heading-xxsmall">Silver</h2>
                              <div className="uui-pricing04_price">
                                $20
                                <span className="uui-pricing04_price-text">
                                  /month
                                </span>
                              </div>
                              <div className="uui-text-size-medium">
                                Billed annually.
                              </div>
                            </div>
                            <div className="uui-pricing04_feature-list">
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce76658f4-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Everything in Bronze package
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce76658f9-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  100 additional credits
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce76658fe-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  10% discount on clothing
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce7665908-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Priority support
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="uui-button w-inline-block">
                            <div>Get started</div>
                          </a>
                        </div>
                      </div>
                      <div className="uui-pricing04_plan">
                        <div className="uui-pricing04_content">
                          <div className="uui-pricing04_content-top">
                            <div className="uui-text-align-center">
                              <h2 className="uui-heading-xxsmall">Gold</h2>
                              <div className="uui-pricing04_price">
                                $40
                                <span className="uui-pricing04_price-text">
                                  /month
                                </span>
                              </div>
                              <div className="uui-text-size-medium">
                                Billed annually.
                              </div>
                            </div>
                            <div className="uui-pricing04_feature-list">
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce766591d-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Everything in Silver package
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce7665922-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  150 additional credits
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce7665927-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  20% discount on clothing
                                </div>
                              </div>
                              <div
                                id="w-node-_6f29dcb2-d679-6fa3-d1a9-7859c02cbd7c-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  Feedback priority (tell us what you need and we'll
                                  make it happen)
                                </div>
                              </div>
                              <div
                                id="w-node-fc353852-3760-0de4-b14c-1d0ce766592c-0b0fff3b"
                                className="uui-pricing04_feature"
                              >
                                <div className="uui-pricing04_icon-wrapper">
                                  <div className="uui-icon-1x1-xsmall w-embed">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <g clipPath="url(#clip0_4195_156141)">
                                        <path
                                          d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                          stroke="#039855"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </g>
                                      <defs>
                                        <clipPath id="clip0_4195_156141">
                                          <rect
                                            width={24}
                                            height={24}
                                            rx={12}
                                            fill="white"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                </div>
                                <div className="uui-text-size-medium">
                                  More services coming soon...
                                </div>
                              </div>
                            </div>
                          </div>
                          <a href="#" className="uui-button w-inline-block">
                            <div>Get started</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer/> */}
      {/* <p>{name}</p> */}
   


    </div>
  )
}

export default Pricing
