import React from 'react'

const PaypalCheckout = () => {
  return (
    <div>
          <div
              data-node-type="commerce-paypal-checkout-form-container"
              data-wf-checkout-query=""
              data-wf-page-link-href-prefix=""
              className="w-commerce-commercepaypalcheckoutformcontainer"
          >
              <div className="w-commerce-commercelayoutcontainer w-container">
                  <div className="w-commerce-commercelayoutmain">
                      <form
                          data-node-type="commerce-checkout-shipping-methods-wrapper"
                          className="w-commerce-commercecheckoutshippingmethodswrapper"
                      >
                          <div className="w-commerce-commercecheckoutblockheader">
                              <h4 aria-level={2}>Shipping Method</h4>
                          </div>
                          <fieldset>
                              <div
                                  data-node-type="commerce-checkout-shipping-methods-list"
                                  className="w-commerce-commercecheckoutshippingmethodslist"
                                  data-wf-collection="database.commerceOrder.availableShippingMethods"
                                  data-wf-template-id="wf-template-63ea7886a3cf5167ac8d20ac000000000012"
                              >
                                  <label className="w-commerce-commercecheckoutshippingmethoditem">
                                      <input type="radio" required="" name="shipping-method-choice" />
                                      <div className="w-commerce-commercecheckoutshippingmethoddescriptionblock">
                                          <div className="w-commerce-commerceboldtextblock" />
                                          <div />
                                      </div>
                                      <div />
                                  </label>
                              </div>
                              <div
                                  data-node-type="commerce-checkout-shipping-methods-empty-state"
                                  style={{ display: "none" }}
                                  className="w-commerce-commercecheckoutshippingmethodsemptystate"
                              >
                                  <div>No shipping methods are available for the address given.</div>
                              </div>
                          </fieldset>
                      </form>
                      <div className="w-commerce-commercecheckoutcustomerinfosummarywrapper">
                          <div className="w-commerce-commercecheckoutsummaryblockheader">
                              <h4 aria-level={2}>Customer Information</h4>
                          </div>
                          <fieldset className="w-commerce-commercecheckoutblockcontent">
                              <div className="w-commerce-commercecheckoutrow">
                                  <div className="w-commerce-commercecheckoutcolumn">
                                      <div className="w-commerce-commercecheckoutsummaryitem">
                                          <label className="w-commerce-commercecheckoutsummarylabel">
                                              Email
                                          </label>
                                          <div />
                                      </div>
                                  </div>
                                  <div className="w-commerce-commercecheckoutcolumn">
                                      <div className="w-commerce-commercecheckoutsummaryitem">
                                          <label className="w-commerce-commercecheckoutsummarylabel">
                                              Shipping Address
                                          </label>
                                          <div />
                                          <div />
                                          <div />
                                          <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                          </div>
                                          <div />
                                      </div>
                                  </div>
                              </div>
                          </fieldset>
                      </div>
                      <div className="w-commerce-commercecheckoutpaymentsummarywrapper">
                          <div className="w-commerce-commercecheckoutsummaryblockheader">
                              <h4 aria-level={2}>Payment Info</h4>
                          </div>
                          <fieldset className="w-commerce-commercecheckoutblockcontent">
                              <div className="w-commerce-commercecheckoutrow">
                                  <div className="w-commerce-commercecheckoutcolumn">
                                      <div className="w-commerce-commercecheckoutsummaryitem">
                                          <label className="w-commerce-commercecheckoutsummarylabel">
                                              Payment Info
                                          </label>
                                          <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                          </div>
                                          <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                              <div />
                                              <div> / </div>
                                              <div />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="w-commerce-commercecheckoutcolumn">
                                      <div className="w-commerce-commercecheckoutsummaryitem">
                                          <label className="w-commerce-commercecheckoutsummarylabel">
                                              Billing Address
                                          </label>
                                          <div />
                                          <div />
                                          <div />
                                          <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                              <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                          </div>
                                          <div />
                                      </div>
                                  </div>
                              </div>
                          </fieldset>
                      </div>
                      <div className="w-commerce-commercecheckoutorderitemswrapper">
                          <div className="w-commerce-commercecheckoutsummaryblockheader">
                              <h4 aria-level={2}>Items in Order</h4>
                          </div>
                          <fieldset className="w-commerce-commercecheckoutblockcontent">
                              <div
                                  role="list"
                                  className="w-commerce-commercecheckoutorderitemslist"
                                  data-wf-collection="database.commerceOrder.userItems"
                                  data-wf-template-id="wf-template-63ea7886a3cf5167ac8d20ac000000000056"
                              />
                          </fieldset>
                      </div>
                  </div>
                  <div className="w-commerce-commercelayoutsidebar">
                      <div className="w-commerce-commercecheckoutordersummarywrapper">
                          <div className="w-commerce-commercecheckoutsummaryblockheader">
                              <h4 aria-level={2}>Order Summary</h4>
                          </div>
                          <fieldset className="w-commerce-commercecheckoutblockcontent">
                              <div className="w-commerce-commercecheckoutsummarylineitem">
                                  <div>Subtotal</div>
                                  <div />
                              </div>
                              <div
                                  className="w-commerce-commercecheckoutordersummaryextraitemslist"
                                  data-wf-collection="database.commerceOrder.extraItems"
                                  data-wf-template-id="wf-template-63ea7886a3cf5167ac8d20ac000000000070"
                              >
                                  <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                                      <div />
                                      <div />
                                  </div>
                              </div>
                              <div className="w-commerce-commercecheckoutsummarylineitem">
                                  <div>Total</div>
                                  <div className="w-commerce-commercecheckoutsummarytotal" />
                              </div>
                          </fieldset>
                      </div>
                      <a
                          href="#"
                          value="Place Order"
                          data-node-type="commerce-checkout-place-order-button"
                          className="w-commerce-commercecheckoutplaceorderbutton"
                          data-loading-text="Placing Order..."
                      >
                          Place Order
                      </a>
                      <div
                          data-node-type="commerce-checkout-error-state"
                          style={{ display: "none" }}
                          className="w-commerce-commercepaypalcheckouterrorstate"
                      >
                          <div
                              aria-live="polite"
                              className="w-checkout-error-msg"
                              data-w-info-error="There was an error processing your customer info. Please try again, or contact us if you continue to have problems."
                              data-w-shipping-error="Sorry. We can’t ship your order to the address provided."
                              data-w-billing-error="Your payment could not be completed with the payment information provided. Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order. Contact us if you continue to have problems."
                              data-w-minimum-error="The order minimum was not met. Add more items to your cart to continue."
                              data-w-payment-error="There was an error processing your payment. Please try again, or contact us if you continue to have problems."
                              data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again."
                              data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again."
                              data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again."
                              data-w-invalid-discount-error="This discount is invalid."
                              data-w-expired-discount-error="This discount is no longer available."
                              data-w-usage-reached-discount-error="This discount is no longer available."
                              data-w-requirements-not-met-error=""
                          >
                              There was an error processing your customer info. Please try again, or
                              contact us if you continue to have problems.
                          </div>
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default PaypalCheckout
