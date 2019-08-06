import PropTypes from "prop-types"
import React from "react"

import Service from "../helpers/service"
import TaxCard from "./tax-card"

const loading = require("../images/loading.gif")

class TaxDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      taxes: [],
      loading: false,
    }
    this.service = new Service()
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.stateCode === "" || nextProps.cityName === "") {
      this.setState({ taxes: [], loading: false })
      return
    }

    this.setState({ taxes: [], loading: true })
    const params = {
      stateCode: nextProps.stateCode,
      cityName: nextProps.cityName,
    }
    this.service.getTaxData(params, this.handleHttpResponse.bind(this))
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      (nextProps.stateCode !== "" && nextProps.cityName !== "") ||
      this.state.loading !== nextState.loading ||
      (this.props.stateCode !== nextProps.stateCode ||
        this.props.cityName !== nextProps.cityName)
    )
  }

  handleHttpResponse = data => {
    this.setState({ taxes: data.Items, loading: false })
  }

  tableRow(taxes) {
    return taxes.map(function(tax, index) {
      return <TaxCard key={index} tax={tax} />
    })
  }

  render() {
    const taxes = this.state.taxes
    let taxRows
    if (this.state.loading) {
      taxRows = <div  style={{textAlign: 'center'}}>
        <img src={loading} alt="" />
      </div>
    } else if (taxes.length === 0) {
      taxRows = <div style={{textAlign: 'center'}}>No tax data</div>
    } else {
      taxRows = this.tableRow(taxes)
    }

    return (
      <div>
        { taxRows }
      </div>
    )
  }
}

TaxDisplay.propTypes = {
  stateCode: PropTypes.string,
  cityName: PropTypes.string,
}

TaxDisplay.defaultProps = {
  stateCode: "",
  cityName: "",
}

export default TaxDisplay
