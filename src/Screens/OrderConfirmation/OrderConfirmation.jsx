import React from 'react'

const OrderConfirmation = () => {
  return (
    <div>
      
          <div
              data-node-type="commerce-order-confirmation-wrapper"
              data-wf-order-query=""
              data-wf-page-link-href-prefix=""
              className="w-commerce-commerceorderconfirmationcontainer"
          >
              <div className="w-commerce-commercelayoutcontainer w-container">
                  <div className="w-commerce-commercelayoutmain">
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
                      <div className="w-commerce-commercecheckoutshippingsummarywrapper">
                          <div className="w-commerce-commercecheckoutsummaryblockheader">
                              <h4 aria-level={2}>Shipping Method</h4>
                          </div>
                          <fieldset className="w-commerce-commercecheckoutblockcontent">
                              <div className="w-commerce-commercecheckoutrow">
                                  <div className="w-commerce-commercecheckoutcolumn">
                                      <div className="w-commerce-commercecheckoutsummaryitem">
                                          <div />
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
                                  data-wf-template-id="wf-template-63ea7886a3cf5103828d20af000000000051"
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
                                  data-wf-template-id="wf-template-63ea7886a3cf5103828d20af00000000006b"
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
                  </div>
              </div>
          </div>


    </div>
  )
}

export default OrderConfirmation
