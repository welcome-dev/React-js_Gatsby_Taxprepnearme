import PropTypes from "prop-types"
import React from "react"

const cities = require("../json/cities.json")

class CitySelect extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedCity: "" }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return (
      this.props.stateCode !== nextProps.stateCode ||
      this.state.selectedCity !== nextState.selectedCity
    )
  }

  handleCityChange = e => {
    e.preventDefault()
    const selectedCity = e.target.value
    this.setState({ selectedCity: selectedCity })
    this.props.cityChanged(selectedCity)
  }

  render() {
    let stateCities = []
    if (this.props.stateCode) stateCities = cities[this.props.stateCode]

    return (
      <select
        className="u-full-width"
        value={this.state.selectedCity}
        onChange={this.handleCityChange.bind(this)}
      >
        <option value="">Select a city</option>
        {stateCities.map((city, index) => {
          return (
            <option value={city} key={index}>
              {city}
            </option>
          )
        })}
      </select>
    )
  }
}

CitySelect.propTypes = {
  stateCode: PropTypes.string.isRequired,
  cityChanged: PropTypes.func.isRequired,
}

CitySelect.defaultProps = {
  stateCode: "",
  cityChanged: null,
}

export default CitySelect
