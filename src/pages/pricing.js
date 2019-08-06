import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Pricing = () => (
  <Layout>
    <SEO title="Pricing" />
    <div>
        <p>
          If Tax preparers need to add their listing to the website, they will have to provide their IRS PTIN (Preparer Tax Identification Number), for verification with the IRS database prior to the listing being added to the website.
        </p>
        <p>
          Listing fee
        </p>
        <p>
          $300 invoice each tax year (month of June)
        </p>
        <p>
          Use coinbase.com or your local Coinstar Kiosk to make payment via Bitcoin to the public key listed below
        </p>
        <div style={{textAlign: 'center'}}>
          <img src={require("../images/qrcode.png")} alt="qrcode" />
        </div>
        <p>
          After a payment is made, send the transaction confirmation using the link below
        </p>
    </div>
    <div style={{textAlign: 'center'}}>
      <Link to="/contact">taxprepnearme.com/contact</Link>
    </div>
  </Layout>
)

export default Pricing
