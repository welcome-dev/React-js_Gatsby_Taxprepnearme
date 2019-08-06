import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StateSelect from "../components/state-select"
import CitySelect from "../components/city-select"
import TaxDisplay from "../components/tax-display"

export default class IndexPage extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      stateCode: "",
      cityName: "",
    }
  }

  handleStateChanged = stateCode => {
    this.setState({
      stateCode: stateCode,
      cityName: "",
    })
  }

  handleCityChanged = cityName => {
    this.setState({ cityName: cityName })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" />

        <div className="grid-container halves">
          <div>
            <StateSelect stateChanged={this.handleStateChanged.bind(this)} />
          </div>

          <div>
            <CitySelect
              stateCode={this.state.stateCode}
              cityChanged={this.handleCityChanged.bind(this)}
            />
          </div>
        </div>
        <br />

        <div style={{ overflowX: "auto" }}>
          <TaxDisplay
            stateCode={this.state.stateCode}
            cityName={this.state.cityName}
          />
        </div>
      </Layout>
    )
  }
}
