import PropTypes from "prop-types"
import React from "react"

const states = require("../json/states.json")

class StateSelect extends React.Component {
  handleStateChange = e => {
    e.preventDefault()
    this.props.stateChanged(e.target.value)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return false
  }

  render() {
    return (
      <select
        className="u-full-width"
        onChange={this.handleStateChange.bind(this)}
      >
        <option value="">Select a state</option>
        {states.map((state, index) => {
          return (
            <option value={state.abbreviation} key={index}>
              {state.name}
            </option>
          )
        })}
      </select>
    )
  }
}

StateSelect.propTypes = {
  stateChanged: PropTypes.func.isRequired,
}

StateSelect.defaultProps = {
  stateChanged: null,
}

export default StateSelect
